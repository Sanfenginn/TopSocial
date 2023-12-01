const errorHandler = (err, req, res) => {
  console.error("error: ", err.stack);
  const statusCode = err.response.status || 500; //如果没有status，就显示500
  const message = err.message || "Internal Server Error"; //如果没有message，就显示Internal Server Error
  res.status(statusCode).json({
    error: message,
  });
};

module.exports = { errorHandler };
