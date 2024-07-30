const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 5000,
  SALT_ROUNDS: process.env.SALT_ROUNDS || 10,
  JWT_EXPIRY: process.env.JWT_EXPIRY || "7d",
  JWT_SECRET: process.env.JWT_SECRET || "Random",
};
