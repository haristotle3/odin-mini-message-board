import messages from "../models/messages.js";

export default function messageDetailsController(req, res) {
  const messageObject = messages[Number(req.params.messageId)];
  res.render("message", { messageObject: messageObject });
}
