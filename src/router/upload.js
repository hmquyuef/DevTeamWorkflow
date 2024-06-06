import { Router } from "express";
import * as controller from "../../controllers/uploadController.js";

const uploadRouter = Router();

//Post method
uploadRouter.route("/upload").post(controller.UploadFile);
uploadRouter.route("/remove").post(controller.RemoveFile);

export default uploadRouter;