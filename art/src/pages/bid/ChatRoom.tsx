import styles from "../../styles/chatroom.module.css";
import io, { Socket } from "socket.io-client";
import react, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const socket: Socket = io("http://localhost:3001");

function App(): JSX.Element {
  // Room State
  const [room, setRoom] = useState<string>("");

  // Messages State
  const [message, setMessage] = useState<string>("");
  const [messageData, setMessageData] = useState<{ [key: string]: string[] }>(
    {}
  );
  const [oldMessages, setOldMessages] = useState<any[]>([]);
  const [currentId, setCurrentId] = useState<any>();
  const [user, setUser] = useState<{ [key: string]: string[] }>({});

  // console.log("sent",messageData)

  const route = useRouter();
  const ArtId = route.query.id?.toString();
  // console.log("item id",ArtId);

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
      socket.emit("send_message", { message, room});

      // Create new message in Sequelize
      axios
        .post("http://localhost:3000/api/messages/addmessage", {
          content: message,
          artworkId: ArtId,
          picture: "picture",
          name: "my name",
        })
        .then((res) => console.log("axios.post", res))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/messages/getmessages")
      .then( (res) => {
        setOldMessages(res.data);
        let id =  localStorage.getItem("id")
        return id
      })
      .then((current) => {
        setCurrentId(current);
        console.log("current Id", current);
        return current
      })
      .then((currentId) => {
        return axios.get(`http://localhost:3000/api/users/getUserId/${currentId}`);
      })
      .then((res) => {
        setUser(res.data);
        console.log("res", res);
      })

      .catch((err) => console.log(err));
  }, []);


  useEffect(() => {
    socket.on("receive_message", (data: { message: string; room: string }) => {
      const newMessageData = { ...messageData };
      if (!(data.room in newMessageData)) {
        newMessageData[data.room] = [];
      }
      newMessageData[data.room].push(data.message);
      setMessageData(newMessageData);
    });
  }, [Object.keys(messageData).length]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };
  console.log("current User", user);
  console.log("oldMessages", oldMessages);

  return (
    <div className={styles.app}>
      <h1>Messages:</h1>
      <div className={styles.discussion}>
        {oldMessages
          .filter((e) => e.artworkId == ArtId)
          .map((e) => {
            return (
              <div className={styles.message} key={e.id}>
                <p className={styles.oneMessage}>{e.content}</p>
              </div>
            );
          })}

        {room in messageData &&
          Array.isArray(messageData[room]) &&
          messageData[room].map((e: string, index: number) => {
            console.log("element", e);

            return (
              <div>
                <div>
                  <img className={styles.image} src={user.picture}/>
                  <p>{`${user.userName} said`}</p>
                </div>

              <p key={index} className={styles.oneMessage}>
                {e}
              </p>
              </div>
            );
          })}
      </div>
      <div className={styles.footer}>
        <div>
          {/* <input
            className={styles.room}
            placeholder="Room Number..."
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setRoom(ArtId);
            }}
          /> */}
          <button
            className={styles.join}
            onClick={() => {
              ArtId && setRoom(ArtId);
              joinRoom();
            }}
          >
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
            onClick={() => sendMessage()}
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
