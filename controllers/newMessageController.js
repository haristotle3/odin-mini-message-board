import db from "../models/db.js";

export async function newMessageControllerPOST(req, res) {
  const { text, username } = req.body;
  console.log({ text, username });
  await db.insertMessage(text, username);
  res.redirect("/");
}

export function newMessageControllerGET(req, res) {
  res.render("form");
}
