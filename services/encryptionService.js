const encryptionUtils = require('../utils/encryptionUtils')

function encryptString(str, secretKey){
    return encryptionUtils.encryptString(str, secretKey);
}

function decryptString(str, secretKey){
    return encryptionUtils.decryptString(str, secretKey);
}

module.exports = { encryptString, decryptString};