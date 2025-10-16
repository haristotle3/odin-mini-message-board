import { Router } from "express";
import messages from "../models/messages.js";

const messageRouter = Router();

messageRouter.get("/:messageId", (req, res) => {
  const messageObject = messages[Number(req.params.messageId)];
  res.render("message", { messageObject: messageObject });
});

export default messageRouter;
