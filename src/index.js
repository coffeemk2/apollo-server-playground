import express from "express";
import clearConsole from "../utils/clearConsole";
const app = express();

app.get("/", (req, res) => res.send("Hello World"));
app.get("/app", (req, res) => {
  console.log("hit /app");
  res.send("Hello World2");
});

app.listen(3000, () => {
  clearConsole();
  console.log("Example app listening on port 3000!");
});
