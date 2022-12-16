import { Request, Response } from "express";
import { ErrorHandler } from "../utils/errorHandler";

export default (err: ErrorHandler, req: Request, res: Response, next: any) => {
  err.statusCode = err.statusCode || 500;

  console.log(process.env.NODE_ENV);

  if (process.env.NODE_ENV === "development") {
    res.status(err.statusCode).json({
      success: false,
      error: err,
      errMessage: err.message,
      stack: err.stack,
    });
  }

  if (process.env.NODE_ENV === "production") {
    let error = { ...err };

    error.message = err.message;
    res.status(err.statusCode).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
