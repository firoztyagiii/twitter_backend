class AppError extends Error {
  constructor(msg: string, statusCode: number) {
    super(msg);
    statusCode = statusCode;
    isOperational: true;
  }
}

export default AppError;
