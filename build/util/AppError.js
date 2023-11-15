"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    constructor(msg, statusCode) {
        super(msg);
        statusCode = statusCode;
        isOperational: true;
    }
}
exports.default = AppError;
