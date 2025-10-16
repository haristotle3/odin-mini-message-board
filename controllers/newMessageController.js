import messages from "../models/messages.js";

export function newMessageControllerPOST(req, res) {
  const newMessageObject = { ...req.body, added: new Date() };
  messages.push(newMessageObject);
  res.redirect("/");
}

export function newMessageControllerGET(req, res) {
  res.render("form");
}
