import { Router } from "express";
import {
  newMessageControllerPOST,
  newMessageControllerGET,
} from "../controllers/newMessageController.js";

const newMessageRouter = Router();

newMessageRouter.get("/", newMessageControllerGET);
newMessageRouter.post("/", newMessageControllerPOST);

export default newMessageRouter;
