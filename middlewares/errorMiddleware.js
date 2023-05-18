const errorHandler = (error, req, res, next) => {
    console.log(error);
    
    const statusCode = error.statusCode || 500;
    const errorMessage = statusCode === 500 ? 'Something went wrong' : error.message;
  
    res.status(statusCode).json({
      error: {
        message: errorMessage
      }
    });
  };

  module.exports = {errorHandler};