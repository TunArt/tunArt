import { createServer } from "http";
import { Server, Socket } from "socket.io";

const server = createServer();
const io = new Server(server);

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

server.listen(3000, () => {
  console.log("listening on *:3000");
});
