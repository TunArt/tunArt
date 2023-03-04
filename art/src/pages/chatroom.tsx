import styles from "../styles/chatroom.module.css";

import io, { Socket } from "socket.io-client";
import react,{ useEffect, useState } from "react";

const socket: Socket = io("http://localhost:3001");

function App(): JSX.Element {
  //Room State
  const [room, setRoom] = useState<string>("");

  // Messages States
  const [message, setMessage] = useState<string>("");
  const [messageReceived, setMessageReceived] = useState<string[]>([]);

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    const arr: string[] = [...messageReceived];
    arr.push(message);
    setMessageReceived(arr);
    socket.emit("send_message", { arr, room });
  };

  useEffect(() => {
    socket.on("receive_message", (data: { arr: string[]; message: string }) => {
      const arr: string[] = [...data.arr];
      arr.push(data.message);
      setMessageReceived(arr);
    });
  }, [socket]);

 return (
   <div className={styles.app}>
      <h1 > Messages:</h1>
     <div className={styles.discussion}> {messageReceived.map((e: string) => {
        return <p className={styles.oneMessage}>{e}</p>;
      })}
      </div>
      <div className={styles.footer}>
      <input className={styles.room}
        placeholder="Room Number..."
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setRoom(event.target.value);
        }}
      />
      <button className={styles.join} onClick={joinRoom}> Join Room</button>
      <input
      className={styles.message} 
        placeholder="Message..."
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage}> Send Message</button>
      <h1> Message:</h1>
      {messageReceived.map((e: string) => {
        return <p>{e}</p>;
      })}
    </div>
  </div>
  );
}

export default App;