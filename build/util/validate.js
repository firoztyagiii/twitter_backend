"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLogin = exports.validateSignup = void 0;
const joi_1 = __importDefault(require("joi"));
const validateSignup = (req, res, next) => {
    const schema = joi_1.default.object()
        .keys({
        userName: joi_1.default.string().required(),
        email: joi_1.default.string().email().required(),
        password: joi_1.default.string().min(5).required(),
        confirmPassword: joi_1.default.string().valid(joi_1.default.ref("password")).required(),
    })
        .unknown(true);
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
        return next(error);
    }
    next();
};
exports.validateSignup = validateSignup;
const validateLogin = (req, res, next) => {
    const schema = joi_1.default.object().keys({
        email: joi_1.default.string().email().required(),
        password: joi_1.default.string().min(5).required(),
    });
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
        return next(error);
    }
    next();
};
exports.validateLogin = validateLogin;
