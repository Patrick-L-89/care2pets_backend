const express = require("express");
const corsMiddleWare = require("cors");
const socketio = require("socket.io");
const Users = require("./models").user;
const Pets = require("./models").pet;
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const PORT = 4000;

app.use(corsMiddleWare());

io.on("connection", (socket) => {
  console.log("we have a new connection");

  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to the chatroom ${user.room}`,
    });
    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      text: `${user.name} has joined the chatroom ${user.room}!`,
    });

    socket.join(user.room);

    callback();
  });

  socket.on("disconnect", () => {
    console.log("user has left the chat");
  });
});

app.get("/", (req, res) => {
  res.send("Hi from express");
});

app.get("/pets", async (req, res) => {
  const pets = await Pets.findAll();
  res.status(200).send({ message: "ok", pets });
});

const chatroomRouter = require("./routers/chatrouter");
app.use("/chatroom", chatroomRouter);

const caretakersRouter = require("./routers/caretakers");
app.use("/caretakers", caretakersRouter);

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
