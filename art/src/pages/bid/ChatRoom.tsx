<<<<<<< HEAD
import styles from "../styles/chatroom.module.css";
import io, { Socket } from "socket.io-client";
import react, { useEffect, useState } from "react";


const socket: Socket = io("http://localhost:3001");

function ChatRoom(): JSX.Element {
  const Message = require('../../../server/models/message')
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

       // Create new message in Sequelize
    Message.create({ content: message, room: room });
    }
  };

  useEffect(() => {
    // Fetch messages for current room
    Message.findAll({ where: { room: room } })
      .then((messages) => {
        const newMessageData = { ...messageData };
        newMessageData[room] = messages.map((message) => message.content);
        setMessageData(newMessageData);
      })
      .catch(err => console.log(err));
  
    // Listen for new messages from Socket.IO
    socket.on("receive_message", (data: { message: string; room: string }) => {
      const newMessageData = { ...messageData };
      if (!(data.room in newMessageData)) {
        newMessageData[data.room] = [];
      }
      newMessageData[data.room].push(data.message);
      setMessageData(newMessageData);
  
      // Create new message row in Sequelize
      Message.create({ content: data.message, room: data.room });
    });
  }, [room, messageData]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
=======
import { useState } from 'react';
import styles from "src/styles/SideBar.module.css";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleNewMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage }]);
      setNewMessage('');
>>>>>>> 666d27ba48a6fcc4b2ea03af0ca3ed265922e922
    }
  };

  return (
    <div className={styles.n}>
    <div className="flex flex-col h-screen">
      <div className="bg-gray-800 text-white py-3 px-4 flex justify-between items-center">
        <div className="font-bold text-xl">Chat Room</div>
        <div className="flex items-center">
          <div className="mr-2">Username:</div>
          <div className="bg-gray-700 text-white rounded-md py-1 px-2">John</div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto py-4 px-6">
        {messages.map((message, index) => (
          <div key={index} className="mb-4">
            <div className="font-bold">{message.sender}</div>
            <div>{message.text}</div>
          </div>
        ))}
      </div>
      <div className="bg-gray-800 py-3 px-4 flex justify-between items-center">
        <input
          type="text"
<<<<<<< HEAD
          value={message}
          onChange={(e) => setMessage(e.target.value)}
=======
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
>>>>>>> 666d27ba48a6fcc4b2ea03af0ca3ed265922e922
          className="flex-1 bg-gray-700 text-white rounded-md py-1 px-2 mr-4"
          placeholder="Type your message..."
        />
        <button
<<<<<<< HEAD
          onClick={sendMessage}
=======
          onClick={handleNewMessage}
>>>>>>> 666d27ba48a6fcc4b2ea03af0ca3ed265922e922
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
    </div>
  );
};

export default ChatRoom;
