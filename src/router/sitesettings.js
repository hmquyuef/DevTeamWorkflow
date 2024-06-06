import { Router } from "express";
import * as controller from "../../controllers/settingController.js";

const settingRouter = Router();

//Get method
settingRouter.route("/all").get(controller.GetSiteSetting);

//Post method
settingRouter.route("/update").post(controller.UpdateSiteSetting);

export default settingRouter;