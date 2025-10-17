import db from "../models/db.js";

export default async function messageDetailsController(req, res) {
  const [messageObject] = await db.getMessageByID(req.params.messageId);
  res.render("message", { messageObject: messageObject });
}
