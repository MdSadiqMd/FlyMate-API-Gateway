const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const config = require("../config/server.config");
const logger = require("../config/logger.config");

function checkPassword(plainPassword, encryptedPassword) {
  try {
    return bcrypt.compareSync(plainPassword, encryptedPassword);
  } catch (error) {
    logger.error(`Error in checking password`);
    throw error;
  }
}

function createToken(input) {
  try {
    return jwt.sign(input, config.JWT_SECRET, {
      expiresIn: config.JWT_EXPIRY,
    });
  } catch (error) {
    logger.error(`Error in creating token`);
    throw error;
  }
}

function verifyToken(token) {
  try {
    return jwt.verify(token, config.JWT_SECRET);
  } catch (error) {
    logger.error(`Error in verifying token`);
    throw error;
  }
}

module.exports = {
  checkPassword,
  createToken,
  verifyToken,
};
