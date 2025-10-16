import { Router } from "express";

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "How’s everyone doing today?",
    user: "Samantha",
    added: new Date(),
  },
  {
    text: "Just finished working on my Express app!",
    user: "Daniel",
    added: new Date(),
  },
];

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Odin Mini Message Board", messages: messages });
});

export { messages };
export default indexRouter;
