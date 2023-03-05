import styles from "../styles/chatroom.module.css";
import io, { Socket } from "socket.io-client";
import react, { useEffect, useState } from "react";

const socket: Socket = io("http://localhost:3001");

function App(): JSX.Element {
  // Room State
  const [room, setRoom] = useState<string>("");

  // Messages State
  const [message, setMessage] = useState<string>("");
  const [messageData, setMessageData] = useState<{ [key: string]: string[] }>({});

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    if (message !== "") {
      const newMessageData = { ...messageData };
      if (!(room in newMessageData)) {
        newMessageData[room] = [];
      }
      newMessageData[room].push(message);
      setMessageData(newMessageData);
      setMessage("");
      socket.emit("send_message", { message, room });
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data: { message: string; room: string }) => {
      const newMessageData = { ...messageData };
      if (!(data.room in newMessageData)) {
        newMessageData[data.room] = [];
      }
      newMessageData[data.room].push(data.message);
      setMessageData(newMessageData);
    });
  }, [messageData]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className={styles.app}>
      <h1>Messages:</h1>
      <div className={styles.discussion}>
        {room in messageData &&
          Array.isArray(messageData[room]) &&
          messageData[room].map((e: string, index: number) => {
            return (
              <p key={index} className={styles.oneMessage}>
                {e}
              </p>
            );
          })}
      </div>
      <div className={styles.footer}>
        <div>
          <input
            className={styles.room}
            placeholder="Room Number..."
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setRoom(event.target.value);
            }}
          />
          <button className={styles.join} onClick={joinRoom}>
            Join Room
          </button>
        </div>
        <div>
          <input
            className={styles.message}
            placeholder="Message..."
            value={message}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setMessage(event.target.value);
            }}
            onKeyDown={handleKeyPress}

          />
          <button
            onClick={sendMessage}
            className={`${styles.button} ${styles.send}`}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
