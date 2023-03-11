import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

function Bidding() {
  const [bid, setBid] = useState("");
  const [message, setMessage] = useState("");

  const handleBidChange = (event:any) => {
    setBid(event.target.value);
  };

  const handleFormSubmit = (event:any) => {
    event.preventDefault();

    socket.emit("bid", { bid });
  };

  useEffect(() => {
    socket.on("message", (data) => {
      setMessage(data.message);
    });
  }, []);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg">
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="bid-amount" className="text-lg font-medium mb-2">
            Bid amount:
          </label>
          <input
            type="number"
            id="bid-amount"
            value={bid}
            onChange={handleBidChange}
            className="border rounded-lg py-2 px-4"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Submit Bid
        </button>
      </form>
      {message && (
        <p className="mt-4 text-lg font-medium text-center">{message}</p>
      )}
    </div>
  );
}

export default Bidding;
