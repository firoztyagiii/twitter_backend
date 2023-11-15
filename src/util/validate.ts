import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const validateSignup = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object()
    .keys({
      userName: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(5).required(),
      confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
    })
    .unknown(true);

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return next(error);
  }
  next();
};

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
  });
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    return next(error);
  }
  next();
};

export { validateSignup, validateLogin };
