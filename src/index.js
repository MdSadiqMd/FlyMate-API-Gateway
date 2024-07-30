const express = require("express");
const rateLimit = require("express-rate-limit");
const { createProxyMiddleware } = require("http-proxy-middleware");

const config = require("./config/server.config.js");
const logger = require("./config/logger.config.js");
const apiRoutes = require("./routes");

const app = express();

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000,
  max: 30,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter);

app.use(
  "/flightsService",
  createProxyMiddleware({
    target: config.FLIGHT_SERVICE,
    changeOrigin: true,
    pathRewrite: { "^/flightsService": "/" },
  })
);
app.use(
  "/bookingService",
  createProxyMiddleware({
    target: config.BOOKING_SERVICE,
    changeOrigin: true,
    pathRewrite: { "^/bookingService": "/" },
  })
);

app.use("/api", apiRoutes);

app.listen(config.PORT, () => {
  logger.info(`Successfully started the server on PORT : ${config.PORT}`);
});
