const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const http = require("http");
const { Server } = require("socket.io");
const httpServer = http.createServer(app);
const io = new Server(httpServer);
io.on("connection", (socket) => {
  console.log("New user connection to our server");
  socket.on("disconnect", (socket) => {
    console.log("user disconnected");
  });
  //   socket.on("message", (data) => {
  //     console.log(data);
  //   });
  socket.send("hello");
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/app.html");
});
httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
