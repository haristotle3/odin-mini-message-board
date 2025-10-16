import messages from "../models/messages.js";

export default function indexController(req, res) {
  res.render("index", { title: "Odin Mini Message Board", messages: messages });
}
