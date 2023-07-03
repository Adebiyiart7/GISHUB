const apiResponse = (code, message, body, totalLength) => {
  return {
    code,
    message: message || "",
    body,
    totalLength,
  };
};

module.exports = {
  apiResponse,
};
