"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleValidationError = (error, res) => {
    let message = "";
};
const globalError = (err, req, res, next) => {
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
exports.default = globalError;
