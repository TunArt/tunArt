import React, {useState,useEffect} from "react";
import NavBar from "../../../components/navBar";
import styles from "../../../styles/principale.module.css";
import style from "../../../styles/newArt.module.css";
import axios from "axios";
import ArtList from "./artList";
import Footer from "../footer/footer";
import {useRouter} from "next/router";
import Search from "../search/search";
import InfiniteScroll from "react-infinite-scroll-component";
import Slider from "./slider";
import Bucket from "../../../components/backet/backet"
import ArtDetails from "./artDetails";
import Slider2 from "./slider/slider2";



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
    const[count, setCount]=useState(0)
    const route=useRouter();

useEffect(()=>{
    setCurrentUserId(window?.localStorage.id)
},[])

    
    
    var fetchMoreData=async()=>{
           await axios.get(`http://localhost:3000/api/artworks/getLimitedArtworks/${count+2}/`)
        .then(response => {
            console.log(response.data);
            setCount(count + 2)
        setArr(response.data)
        })  
    }
    
return(
    <>
    <div className={styles.all}>
    
        <div><NavBar id={currentUsrId} showCart={showCart} setShowcart={setShowcart} /></div>
        {showCart && <Bucket id={currentUsrId} setShowcart={setShowcart} />}
    <div className={style.box}> 
<br />
<br />
        {/* <h1 className={styles.titles}>THE GALLERY</h1>
        <div>
                <Search />  
        </div>    */}
   
        <h1 className={styles.titles}>TOP RATED ARTWORKS</h1>
        <div><Slider/></div>
        <h1 className={styles.titles}>All ARTS</h1>
        {toggle?
        <></>
    :   
    <InfiniteScroll
    dataLength={arr.length}
    next={fetchMoreData }
    hasMore={true}
    loader={<h4 style={{ textAlign:'center'}}>Loading...</h4>}
  >
        <div className={style.container}>   
        {arr.map((element, index) =>(
                <div      key={index}>
                    <ArtDetails element={element} />
                  </div>)          
                )}
        </div>
        </InfiniteScroll>
    }
    
    </div>
    
    </div>
    <Footer/>
    </>
)
}
export default Art;