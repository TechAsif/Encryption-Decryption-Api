const express = require('express');
const encryptionController = require('../controllers/encryptionController');

const router = express.Router();

router.post('/encrypt',encryptionController.strEncrypt);
router.post('/decrypt',encryptionController.strDecrypt);

module.exports = router;