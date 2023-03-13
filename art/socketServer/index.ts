import express, { Application } from "express";
import http, { Server } from "http";
import { Server as SocketServer, Socket } from "socket.io";
import cors from "cors";

// importing the middleware that will store the data in database
// import addMessage from  "../server/controllers/message"


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
let highestBidder = "";

io.on("connection", (socket: Socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data: string) => {
    socket.join(data);
    console.log("join room", data);
  });

socket.on("send_message", (data: { arr: string[]; room: string; message: string }) => {
socket.to(data.room).emit("receive_message", data);
console.log("send message", data);
});

socket.emit("currentBid", { highestBid, highestBidder });

socket.on("bid", ({ bid }: { bid: number }) => {
  if (bid > highestBid) {
    highestBid = bid;
    socket.emit("message", { message: `Your bid of ${bid} is the highest.` });
  } else {
    socket.emit("message", { message: `Sorry, your bid of ${bid} is not the highest.` });
  }
});
});







server.listen(3001, () => {
  console.log("SERVER IS RUNNING AND LISTENING ...");
});
