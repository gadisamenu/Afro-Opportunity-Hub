import { Router } from "express";
import authController from "../controllers/authController";
import isAuthenticated from "../middlewares/authenticate";

const authRouter = Router();
authRouter.post("/signup",authController.userSignup)
authRouter.post("/login",authController.userLogin)
authRouter.get("/logout",isAuthenticated,authController.logoutUser)
authRouter.post("/changePassword",isAuthenticated,authController.changePassword)

export default authRouter