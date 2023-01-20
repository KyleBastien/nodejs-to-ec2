import express from "express";
import { getHelloWorld } from "./helpers/get-hello-world";
import { getStudents } from "./helpers/get-students";

const app = express();
const port = 3000;

app.get("/", (_, res) => {
  res.json({ text: getHelloWorld() });
});

app.get("/students", (_, res) => {
  res.json(getStudents());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
