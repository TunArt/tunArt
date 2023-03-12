import React, {useState,useEffect} from "react";
// import { ReactDOM } from "react";
import NavBar from "../../../components/navBar";
import styles from "../../../styles/principale.module.css";
import axios from "axios";
import ArtList from "./artList";
import Footer from "../footer/footer";
import {useRouter} from "next/router";
import Search from "../search/search";
import TopRated from "./topRated";
import InfiniteScroll from "react-infinite-scroll-component";
//const dummyArt=["./img 01.jpeg", "./img 02.webp"]
import Bucket from "../../../components/backet/backet"


const Art=()=>{
    const [showCart,setShowcart]=useState(false)
    const router=useRouter()
    const [user, setUser] = useState([])
    const [artists,setArtists]=useState([])
    const [render,setRender]=useState(false);
    const [currentUsrId,setCurrentUserId]=useState("")
    const[arr, setArr]=useState([])
    const[items, setItems]=useState([])
    const[toggle,setToggle]=useState(false);
    const[name, setName]=useState("");
    const[top, setTop]=useState([]);
    const[count, setCount]=useState(0)
    const route=useRouter();

    // const showHide=()=>{
    //     setToggle(!toggle);
    // }
    // useEffect(()=>{
    //     axios.get(`http://localhost:3000/api/artworks/getTopArtworks/`)
    //     .then(response => {
    //         console.log(response.data);
    //     setTop(response.data)
    //     })
    // },[])

    var fetchMoreData=async()=>{
           await axios.get(`http://localhost:3000/api/artworks/getArtworks/${count+2}`)
        .then(response => {
            console.log(response.data);
            setCount(count + 2)
        setArr(response.data)
        })  
    }
    
    const find=()=>{
        axios.get(`localhost:3000/getOneArtwork/${name}`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        }

    const handleChange=(e)=>{
        setName(e.target.value)
    }

    function onClickk(){
        showHide()
        find()
    }

    

    
return(
    <div className="min-h-screen flex flex-col">
  <NavBar id={currentUsrId} showCart={showCart} setShowcart={setShowcart} />
  {showCart && <Bucket id={currentUsrId} setShowcart={setShowcart} />}
  <div className="flex-grow container mx-auto">
    <h1 className="text-4xl font-bold mb-8">The Gallery:</h1>
    <form className="flex mb-8">
      <input
        className="border border-gray-300 rounded-l px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-600"
        type="text"
        placeholder="search for an artwork"
        onChange={handleChange}
      />
      <button
        className="border border-gray-300 rounded-r px-4 py-2 bg-gray-200 hover:bg-gray-300"
        type="submit"
        onClick={onClickk}
      >
        <i className="bi bi-search text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </i>
      </button>
    </form>
    <h2 className="text-2xl font-bold mb-4">TOP RATED ARTWORKS</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {top.map((ele, index) => (
        <TopRated key={index} ele={ele} />
      ))}
    </div>
    <h2 className="text-2xl font-bold mb-4">All ARTS</h2>
    {toggle ? (
      <div>
        {items.map((el, index) => (
          <Search key={index} el={el} />
        ))}
      </div>
    ) : (
      <InfiniteScroll
        dataLength={arr.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
      >
        {arr.map((element, index) => (
          <ArtList key={index} element={element} />
        ))}
      </InfiniteScroll>
    )}
  </div>
  <Footer width={1600} height={100} />
</div>
)
}
export default Art;
/*
 <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.items.map((i, index) => (
            <div style={style} key={index}>
              div - #{index}
            </div>
          ))}
        </InfiniteScroll>
*/