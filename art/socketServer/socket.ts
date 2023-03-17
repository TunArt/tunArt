// import http, { Server } from "http";
// import express, { Application } from "express";
// import { Server as SocketServer, Socket } from "socket.io"
// import cors from "cors"

// const app: Application = express();
// app.use(cors());

// const server: http.Server = http.createServer(app);


// const io: SocketServer = new SocketServer(server, {
// cors: {
// origin: "http://localhost:3002",
// methods: ["GET", "POST"],
// }, 
// });

// let highestBid = 0;
// let interval:any;


// io.on("connection", (socket: Socket) => {
//   socket.on("bid", ( bid : { currentBidder:number;currentPrice:number;artWorkId:number }) => {
//     console.log('this is the bid from the server',bid)
//     socket.emit("currentBid",bid);
   
//   });
// });

// server.listen(3006, () => {
//   console.log("listening on *:3006");
// });
