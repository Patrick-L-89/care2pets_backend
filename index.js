const express = require("express");
const corsMiddleWare = require("cors");
const socketio = require("socket.io");
const Users = require("./models").user;
const Pets = require("./models").pet;
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = 4000;

app.use(corsMiddleWare());

app.get("/", (req, res) => {
  res.send("Hi from express");
});

app.get("/pets", async (req, res) => {
  const pets = await Pets.findAll();
  res.status(200).send({ message: "ok", pets });
});

const caretakersRouter = require("./routers/caretakers");
app.use("/caretakers", caretakersRouter);

console.log("What is server?", server);

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
