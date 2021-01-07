const { error } = require('console');

exports.success = (req, res, data, status, message) => {
  res.status(status || 200).json({
    error: '',
    data,
    message,
  });
};

exports.error = (req, res, error, status, message) => {
  console.log(`[response.error] ${message}`);

  res.status(status || 200).json({
    error,
    data: '',
    message,
  });
};
