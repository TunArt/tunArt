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
io.on("connect", (socket: Socket) => {
  console.log(`User Connected: ${socket.id}`);
  // socket.on("send", (str: string) => {
  //   console.log(str);
  //   socket.emit("recieve", str)
  //   socket.broadcast.emit("recieve", str)
  // })
  socket.on("bid", ( bid : { currentBidder:number;currentPrice:number;artWorkId:number }) => {
    console.log('this is the bid from the server',bid)
    socket.emit("currentBid",bid);
    socket.broadcast.emit("currentBid",bid);
  });
  socket.on("join_room", (data: string) => {
    socket.join(data);
    console.log("join room", data);
  });
socket.on("send_message", (data: { arr: string[]; room: string; message: string }) => {
  console.log("send message", data);
socket.to(data.room).emit("receive_message", data);
});
})
// currentBidder:{type:DataTypes.INTEGER},
//     currentPrice: {type:DataTypes.INTEGER},
//     artWorkId:
server.listen(3001, () => {
  console.log("SERVER IS RUNNING AND LISTENING ...");
});