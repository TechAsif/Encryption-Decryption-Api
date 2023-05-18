const express = require('express');
const encryptionRoutes = require('./routes/encryptionRoutes');
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();
app.use(express.json());

app.use('/api/v1',encryptionRoutes);
app.use(errorMiddleware.routeNotMatchHandler);
app.use(errorMiddleware.globalErrorHandler);

module.exports = app;
