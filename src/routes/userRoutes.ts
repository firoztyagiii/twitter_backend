import express from "express";
import * as userController from "../controller/userController";
import * as validate from "../util//validate";

const router = express.Router();

router.route("/signup").post(validate.validateSignup, userController.signUp);
router.route("/login").post(validate.validateLogin, userController.login);

export default router;
