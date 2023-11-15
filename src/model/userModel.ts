import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema<User.IUser>({
  userName: {
    type: String,
    required: [true, "Username is required."],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required."],
  },
  confirmPassword: {
    type: String,
  },
});

userSchema.pre("save", async function (this: User.IUserDocument, next) {
  if (!this.isNew || !this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 12);
});

const UserModel = mongoose.model<User.IUser>("users", userSchema);

export default UserModel;
