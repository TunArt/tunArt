import { useState } from 'react';
import styles from "src/styles/SideBar.module.css";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleNewMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage }]);
      setNewMessage('');
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
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 bg-gray-700 text-white rounded-md py-1 px-2 mr-4"
          placeholder="Type your message..."
        />
        <button
          onClick={handleNewMessage}
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
