import { useState, useEffect, useCallback } from "react";
import io, { Socket } from "socket.io-client";
import axios from "axios";
import Timer from "timer-component";
import style from "../../styles/bid.module.css"
const socket: Socket = io("http://localhost:3001");
interface item {
  currentBidder: number;
  currentPrice: number;
  artWorkId: number;
}
interface bids {
  name: string;
  startDate: Date;
  endDate: Date;
  creationDate: Date;
  price: number;
  rating: number;
  description: string;
  auction: boolean;
  image: string;
}
const Bidding: React.FC<bids> = (props: any) => {
  // console.log('item',props)
  const [update, setUpdate] = useState(false);
const [currentBidder,setCurrentBidder]=useState("")
  const [bid, setBid] = useState({});
  const [price, setPrice] = useState<number>();
  const [message, setMessage] = useState<number>(0);
  const [data, setData] = useState("");
  const [timeReached, setTimeReached] = useState(false);
  socket.on("connect", () => {
    console.log('id',socket.id); // x8WIv7-mJelg7on_ALbx
  })
  const fetchingData = () => {
    axios
      .get("http://localhost:3000/api/bids/getAll/" + props.id)
      .then((result) => {
        // console.log('rrrr',result)
        setData(result.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchingData();
  }, []);
  const handleBid = useCallback((chunk: item) => {
    console.log("chunk is the client", chunk);
    setMessage(chunk.currentPrice);
  }, []);
  const handleBidChange = (event: any) => {
    setPrice(event.target.value);
  };
  const handleFormSubmit = (event: any) => {
    event.preventDefault();
console.log('ccc',currentBidder)
    const bid: item = {
      currentBidder: +localStorage.id,
      currentPrice: +price,
      artWorkId: +props.id,
    };
    console.log(
      Number(price) >
       message+
          (message* 10) / 100 && !timeReached
    );
    if (
      Number(price) >
        message+
          (message* 10) / 100 &&
      !timeReached
    ) {
      setUpdate(!update);
      axios
        .post("http://localhost:3000/api/bids/addBid", {
          currentBidder: localStorage.id,
          currentPrice: price,
          artWorkId: props.id,
        })
        .then((result) => {
          console.log("done");
          console.log(bid);
          socket.emit("bid", bid);
        })
        .catch((err) => {
          console.log(err);
          console.log(bid, "after");
        });
    }
  };
  useEffect(() => {
    socket.on("currentBid", handleBid);
    // return () => {
    //   socket.off("currentBid", handleBid);
    // };
  }, [update,message]);
  // console.log("message",message)
  return (
    <div>
      <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg">
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div >Title:      {props.name}</div>
          
          {/* <div>Current Bid:{data[data.length-1].currentPrice}</div> */}
          {/* <div>Current Bid:{message}</div> */}
          <div id={style.price} style={{width:"22rem"}}>Current Bid:   {message}</div>
          <div className="flex flex-col">
            <label htmlFor="bid-amount" className="text-lg font-medium mb-2">
              Bid amount:
            </label>
            <input
              type="number"
              id="bid-amount"
              value={price}
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
        {/* <div id={style.price}>Current Bid:{message}</div> */}
      </div>
    </div>
  );
};
export default Bidding;