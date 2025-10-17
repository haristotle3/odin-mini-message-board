import db from "../models/db.js";

export default async function indexController(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Odin Mini Message Board", messages: messages });
}
