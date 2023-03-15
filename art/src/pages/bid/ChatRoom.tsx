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
    // if (room !== "") {
    //   socket.emit("join_room", room);
    //   // alert("room-joined");
    // }
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
          name: user.userName||user.name,
          picture: user.picture,
        })
        .then((res) =>{ 
          console.log("axios.post", res);
         
          
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    


    axios
      .get("http://localhost:3000/api/messages/getmessages")
      .then( (res) => {
        setOldMessages(res.data);
        let email =  localStorage.getItem("email")
        return email
      })
      .then((current) => {
        setCurrentId(current);
        console.log("current Mail", current);
        return current
      })
      .then((currentMail) => {
        return axios.get(`http://localhost:3000/api/users/getUser/${currentMail}`)
        .then((res) => {
    
          if(res.data==''){
           axios.get(`http://localhost:3000/api/artists/getArtist/${currentMail}`)
           .then((res) => {
            setUser(res.data);
            
           })
           .catch(error => console.log(error));
  
          }
          else
          {setUser(res.data);
          console.log("res", res);}
        })
        
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
    //to fix the messages being delivered twice  
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
      <h1>Discuss it here :</h1>
      <div className={styles.discussion}>
        {oldMessages
          .filter((e) => e.artworkId == ArtId )
          .map((e) => {
            return (
              <div  key={e.id}>
                <img className={styles.image} src={e.picture}/>
                 <div  className={styles.littleContainer}> 
                 <p className={styles.userName} >{e.name}</p>
                 <p className={styles.time} >{e.createdAt}</p>

                </div>
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
                  <img className={styles.image} src={user.picture}/>
                <div className={styles.littleContainer}>
                  <p className={styles.userName} >{user.userName}{user.name}</p>

                </div>

              <p key={index} className={styles.oneMessage} style={{"margin-top":"-5%"}}>
                {e}
              </p>
              </div>
            );
          })}
      </div>
      <div className={styles.footer}>
        <div>
            
          <button
            className={styles.join}
            onClick={setTimeout(() => {
               setRoom(ArtId);
              joinRoom();
              

            }, 500)}

          >
            
          </button>
        </div>
        <div>
          <input
            className={styles.message}
            placeholder="Type your message here ..."
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
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
