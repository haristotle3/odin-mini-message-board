import { Router } from "express";
import messageDetailsController from "../controllers/messageDetailsController.js";

const messageRouter = Router();

messageRouter.get("/:messageId", messageDetailsController);

export default messageRouter;
