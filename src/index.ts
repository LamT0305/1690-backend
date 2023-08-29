import app from "./app";
import config from "./configs/index";
import socketIO from "socket.io";
import http from "http";

const server = http.createServer(app);
const io = new socketIO.Server(server);

const PORT = process.env.PORT || 3000;

/* ----------------- database configure ----------------- */
config.dbconect();
/* ------------------------------------------------------ */
/* ----------------- Socket.io configuration ----------------- */

io.on("connection", (Socket) => {
  console.log("a user connected");

  //handle real-time events
  Socket.on("updateData", (data: any) => {
    console.log("received data from client:", data);
    io.emit("dataUpdated", data);
  });

  Socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
