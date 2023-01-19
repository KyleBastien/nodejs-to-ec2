import express from "express";
import { getHelloWorld } from "./helpers/get-hello-world";

const app = express();
const port = 3000;

app.get("/", (_, res) => {
  res.json({ text: getHelloWorld() });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
