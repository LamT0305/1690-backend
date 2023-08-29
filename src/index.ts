import app from './app';
import config from "./configs/index"
import {Socket} from "socket.io";
import eventEmitters from "./configs/eventEmitters";

const PORT = process.env.PORT || 3000;

/* ----------------- database configure ----------------- */
config.dbconect();
// /* ------------------------------------------------------ */

const http = require('http').createServer(app);

const io = require('socket.io')(http, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'DELETE']
    }
});


io.on("connection", (socket: Socket) => {
    socket.on("join", (id: string) => {
        socket.join(id);
        console.log("User joined", id);

        socket.emit("joined", `You has joined ${id}`);
    });

    socket.on("disconnect", () => {
        console.log(socket.id + " disconnected");
    });
});

eventEmitters.on("updateLotStatus", (data: any) => {
    io.emit("updateLotStatus", data);
});

http.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

