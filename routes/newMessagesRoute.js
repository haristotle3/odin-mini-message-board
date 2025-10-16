import { Router } from "express";
import messages from "../models/messages.js";

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.render("form");
});

newMessageRouter.post("/", (req, res) => {
  const newMessageObject = { ...req.body, added: new Date() };
  messages.push(newMessageObject);
  res.redirect("/");
});

export default newMessageRouter;
