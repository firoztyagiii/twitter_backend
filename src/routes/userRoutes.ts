import express from "express";
import * as userController from "../controller/userController";

const router = express.Router();

router.route("/login").get(userController.login);

export default router;
