export as namespace User;

import { Document } from "mongoose";

export interface IUser {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUserDocument extends IUser, Document {}
