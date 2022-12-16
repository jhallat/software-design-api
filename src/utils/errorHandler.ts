export class ErrorHandler extends Error {
  public statusCode: number;
  constructor(message: string | undefined, statusCode: number) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}
