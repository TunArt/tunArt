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

io.on("connection", (socket: Socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data: string) => {
    socket.join(data);
    console.log("join room", data);
  });

  socket.on(
    "send_message",
    (data: { arr: string[]; room: string; message: string }) => {
        // if we want to refactor later and get rid of the old post request 
        // let msg = {...data, }
        // addMessage({
        //     ...data
        //   })
        
      socket.to(data.room).emit("receive_message", data);
      console.log("send message", data);
    }
  );
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING AND LISTENING ...");
});
