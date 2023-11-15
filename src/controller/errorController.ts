import { Request, Response, NextFunction } from "express";

const handleValidationError = (error: Error, res: Response) => {
  let message = "";
};

const globalError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  if (err.name == "ValidationError") {
    handleValidationError(err, res);
  }
  // if (err.isOperational) {
  //   res.status(err.statusCode).json({
  //     status: "Failed",
  //     message: err.msg,
  //   });
  // }
};

export default globalError;
