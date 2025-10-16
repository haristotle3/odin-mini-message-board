import express from "express";
import path from "path";
import "dotenv/config";
import { fileURLToPath } from "url";
import indexRouter from "./routes/index.js";
import newMessageRouter from "./routes/newMessagesRoute.js";

const app = express();
const PORT = process.env.PORT;
const hostname = process.env.hostname;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newMessageRouter);

app.all(/.*/, (req, res) => {
  res.send("This page doesn't exist");
});

app.listen(PORT, hostname, () => {
  console.log(`Server running on ${hostname}:${PORT}`);
});
