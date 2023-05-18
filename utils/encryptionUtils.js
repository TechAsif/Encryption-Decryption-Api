const crypto = require('crypto');

// Encrypt a string using AES encryption
const encryptString = (str, secretKey) => {
  const cipher = crypto.createCipher('aes-256-cbc', secretKey);
  let encrypted = cipher.update(str, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

// Decrypt an encrypted string using AES decryption
const decryptString = (encryptedStr, secretKey) => {
  try {
    const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
    let decrypted = decipher.update(encryptedStr, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  } catch (error) {
    const decrypptionError = new Error("Decryption failed. Invalid secret key or text.");
    decrypptionError.statusCode = 401;
    throw decrypptionError
  }
};

module.exports = {
  encryptString,
  decryptString
};