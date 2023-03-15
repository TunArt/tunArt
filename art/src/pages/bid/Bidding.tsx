import { useState, useEffect,useCallback } from "react";
import io from "socket.io-client";
import axios from "axios";
import Timer from 'timer-component';

const socket = io("http://localhost:3006");

interface item{
  currentBidder:number,
       currentPrice: number,
       artWorkId:number
      };

interface bids{
  name: string,
  startDate: Date,
  endDate: Date,
  creationDate: Date,
  price: number,
  rating: number,
  description: string,
  auction: boolean,
  image: string,
  
}

const Bidding:React.FC<bids>= (props:any)=> {
  // console.log('item',props)
  const [update, setUpdate] = useState(false);

  const [bid,setBid]=useState({})
  const [price, setPrice] = useState<number>(0);
  const [message, setMessage] = useState<number>(0);
const [data,setData]=useState("");
const [timeReached, setTimeReached] = useState(false);
// console.log('pp',props.id)
// console.log('dddd',parseInt(props.endDate)-parseInt(props.startDate))
// console.log('t',props.startDate)
const fetchingData = () => {
  axios
    .get("http://localhost:3000/api/bids/getAll/"+props.id)
    .then((result) => {
      // console.log('rrrr',result)
      setData(result.data);
    })
    .catch((err) => console.log(err));
};
// console.log(data)
useEffect(() => {
  fetchingData();
  
}, []);

 console.log('data',data)
const handleBid = useCallback((chunk:item) => {
  console.log('chunk is the client',chunk)
  setMessage(chunk.currentPrice);
}, []);

  const handleBidChange = (event:any) => {
    setPrice(event.target.value);
  };

  const handleFormSubmit = (event:any) => {
    
    event.preventDefault();

    const bid:item ={
        currentBidder:localStorage.id,
      currentPrice: price,
      artWorkId:props.id
    
    }
    setUpdate(!update)
      axios.post("http://localhost:3000/api/bids/addBid",{
      "currentBidder":localStorage.id,
      "currentPrice": price,
      "artWorkId":props.id
    }
    ).then((result)=>{
    console.log("done")
    }).catch((err)=>console.log(err));
    socket.emit("bid",  bid )
    // if(!data){
    //   socket.emit("bid", { bid })
    //   axios.post("http://localhost:3000/api/bids/addBid",{
    //   "currentBidder":localStorage.id,
    //   "currentPrice": price,
    //   "artWorkId":props.id
    // }).then((result)=>{
    // console.log("done")
    // }).catch((err)=>console.log(err));
    // }
   
    
  //  else if((Number(price)>(data.currentPrice+((data.currentPrice*10)/100)))&&!timeReached){
      
      
  //   socket.emit("bid", { bid })
  //   axios.put("http://localhost:3000/api/bids/updateBid/"+props.id,{currentPrice:Number(price)}).then((result)=>{
  //   setUpdate(!update)
  // }).catch((err)=>console.log(err));
  // }
   }
 

  useEffect(() => {
    socket.on("currentBid",handleBid)

    return () => {
      socket.off('currentBid', handleBid);

    };
  }, [update]);
// console.log("message",message)
  return (
    <div>
          <Timer
      seconds={1200}
      // direction="backward"
     // startImmediately={false}
      onTick={(time) => {
        if (time === 0) {
          setTimeReached(true);
        }
      }}
    >
      {({ getTime }) => (
        <div>
          <h1>Time remaining: {getTime()}</h1>
          {timeReached && <p>The time has been reached!</p>}
        </div>
      )}
    </Timer>

    <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg">
   
       { console.log("mehdi",update)}
      <form onSubmit={handleFormSubmit} className="space-y-4">
      <div>Title:{props.name}</div>
      <div>startDate :{props.startDate}</div>
     
        <div>End date :{props.endDate}</div>
       <hr/>    
        <div>Current Bid:</div>
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
     
    </div>
    </div>
  );
}

export default Bidding;