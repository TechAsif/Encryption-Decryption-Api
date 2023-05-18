const encryptionService = require('../services/encryptionService');

strEncrypt = (req, res) => {
    const {str, secret} = req.body;
    try {
        const encrytedText = encryptionService.encryptString(str,secret); 
        res.status(200).json({encrytedText});
    } catch (error) {
        throw error
    }
}

strDecrypt = (req, res) => {
    const {str, secret} = req.body;
    try {
        const decryptedText = encryptionService.decryptString(str,secret); 
        res.status(200).json({decryptedText});
    } catch (error) {
        throw error
    }
}

module.exports = {strEncrypt, strDecrypt};