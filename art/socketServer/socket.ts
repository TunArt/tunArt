import http, { Server } from "http";
import express, { Application } from "express";
import { Server as SocketServer, Socket } from "socket.io"
import cors from "cors"

const app: Application = express();
app.use(cors());

const server: http.Server = http.createServer(app);

const io: SocketServer = new SocketServer(server, {
cors: {
origin: "http://localhost:3002",
methods: ["GET", "POST"],
},
});

let highestBid = 0;



io.on("connection", (socket: Socket) => {
  console.log("a user connected");

  socket.on("bid", ({ bid }: { bid: number }) => {
    if (bid > highestBid) {
      highestBid = bid;
      socket.emit("message", { message: `Your bid of ${bid} is the highest.` });
    } else {
      socket.emit("message", { message: `Sorry, your bid of ${bid} is not the highest.` });
    }
  });

  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });
});

server.listen(3001, () => {
  console.log("listening on *:3001");
});
