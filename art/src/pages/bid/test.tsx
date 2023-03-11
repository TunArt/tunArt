import styles from "../../styles/chatroom.module.css";
import io, { Socket } from "socket.io-client";
import react, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const socket: Socket = io("http://localhost:3001");

function App(): JSX.Element {
  // ArtId State
  

  // Messages State
  const [message, setMessage] = useState<string>("");
  const [messageData, setMessageData] = useState<{ [key: string]: string[] }>({});
  const [oldMessages, setOldMessages] = useState<any[]>([]);
  const [currentId, setCurrentId] = useState<number>()
  const [reload, setreload] = useState<boolean>(false);
console.log("sent",messageData)
// console.log(props);



const route = useRouter();
const ArtId=route.query.id?.toString()
console.log("item id",ArtId);
// const [ArtId, setArtId] = useState<number>(ArtId);
  // const { query } = route || {};
  // const post = String(query?.post);
  // const posts = JSON.parse(post);


  const joinRoom = () => {
   
      socket.emit("join_room", ArtId);
  
  };

  const sendMessage = () => {
    if (message !== "") {
      const newMessageData = { ...messageData };
      if (!(ArtId in newMessageData)) {
        newMessageData[ArtId] = [];
      }
      newMessageData[ArtId].push(message);
      setMessageData(newMessageData);
      setMessage("");
      socket.emit("send_message", { message, ArtId });
      setreload(!reload)
      

             // Create new message in Sequelize
      axios.post("http://localhost:3000/api/messages/addmessage", {
        content:message,
        artworkId:ArtId,
        picture:"picture",
        name:"my name",

    

        })
      .then((res) => console.log("axios.post",res))
      .catch((err) => console.log(err));
    }

    }
  
    useEffect(() => {



      axios.get("http://localhost:3000/api/messages/getmessages")
      .then((res) => setOldMessages(res.data))
      .catch((err) => console.log(err));

      console.log("old",oldMessages);
      setCurrentId(localStorage.id)
      console.log("currentId",currentId)




    },[])
  useEffect(() => {

    socket.on("receive_message", (data: { message: string; ArtId: string }) => {
      const newMessageData = { ...messageData };
      if (!(data.ArtId in newMessageData)) {
        newMessageData[data.ArtId] = [];
      }
      
      newMessageData[data.ArtId].push(data.message);
      setMessageData(newMessageData);
    });
  }, [messageData]);



  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage()
      // setreload(!reload);
    }
  };

  return (
    <div className={styles.app}>
      <h1>Messages:</h1>
      <div className={styles.discussion}>
{/* {oldMessages
.filter((e)=> e.artworkId == ArtId)
.map((e)=>{
  return (
    <div className={styles.message} key={e.id}>
      <p  className={styles.oneMessage}>{e.content}</p>
    </div>
  )  
})} */}


        {
        ArtId in messageData &&
          Array.isArray(messageData[ArtId]) &&
          messageData[ArtId]
          .map((e: string, index: number) => {
            console.log("element",e);
            
            return (
              <p key={index} className={styles.oneMessage}>
                {e}
              </p>
            );
          })}
      </div>
      <div className={styles.footer}>
        <div>
          {/* <input
            className={styles.room}
            placeholder="room Number..."
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              // setArtId(event.target.value);
            }}
          /> */}
          <button className={styles.join} onClick={joinRoom}>
            Join room
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
