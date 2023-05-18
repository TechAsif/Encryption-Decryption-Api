const globalErrorHandler = (error, req, res, next) => {
    console.log(error);
    
    const statusCode = error.statusCode || 500;
    const errorMessage = statusCode === 500 ? 'Something went wrong' : error.message;
  
    res.status(statusCode).json({
      error: {
        message: errorMessage
      }
    });
  };

  const routeNotMatchHandler = (req, res, next) => {
    const error = new Error("Not Found");
    error.statusCode = 404;
    next(error);
  }

  module.exports = {errorHandler, routeNotMatchHandler};