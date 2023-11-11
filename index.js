const http = require("http");
const express = require("express");
const path = require("path");

const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  //   console.log("a new  user connected", socket.id);
  socket.on("user-message", (message) => {
    // console.log("a new message of user::", message);
    io.emit("message", message);
  });
    //   user.typing message
});

app.use(express.static(path.resolve("public")));

app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");
});

server.listen(9000, () => console.log(`sever started at port 9000`));
