import { Router } from "express";
import messages from "../models/messages.js";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Odin Mini Message Board", messages: messages });
});

export default indexRouter;
