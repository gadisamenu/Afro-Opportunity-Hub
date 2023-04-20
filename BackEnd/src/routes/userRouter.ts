import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/userController";
import multipleUpload from "../middlewares/multipleUpload";

const userRouter = Router();
userRouter.get("/",getUsers)
userRouter.get("/:id",getUser)
userRouter.post("/",multipleUpload,createUser)
userRouter.put("/:id",multipleUpload,updateUser)
userRouter.delete("/:id",deleteUser)

export default userRouter