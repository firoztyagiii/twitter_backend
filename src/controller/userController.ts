import { Request, Response, NextFunction } from "express";
import UserModel from "../model/userModel";
import AppError from "../util/AppError";
import * as compare from "../util/compare";

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userName, email, password } = req.body;
    await UserModel.create({
      userName,
      email,
      password,
    });
    res.status(201).json({
      status: "Success",
      message: "User has been created.",
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return next(new AppError("Invalid credentials", 401));
    }
    if (!(await compare.comparePassword(password, user.password))) {
      return next(new AppError("Invalid credentials", 401));
    }
    // GEN TOKEN
  } catch (err) {
    next(err);
  }
};

export { signUp, login };
