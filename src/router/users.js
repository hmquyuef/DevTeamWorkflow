import { Router } from "express";
import * as controller from "../../controllers/userController.js";

const userRouter = Router();

//Post method
userRouter.route("/register").post(controller.Register);
userRouter.route("/login").post(controller.Auth);

//Get method
userRouter.route("/logout").get(controller.Logout);
userRouter.route("/info").get(controller.GetUserBySesstion);
userRouter.route("/all").get(controller.GetListUsers);

//Delete method
userRouter.route("/:id").delete(controller.DeleteUserById);

export default userRouter;