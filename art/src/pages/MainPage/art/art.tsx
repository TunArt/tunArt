import React, {useState,useEffect} from "react";
import NavBar from "../../../components/navBar";
import styles from "../../../styles/principale.module.css";
import axios from "axios";
import ArtList from "./artList";
import Footer from "../footer/footer";
import {useRouter} from "next/router";
import Search from "../search/search";
//import TopRated from "./topRated";
import InfiniteScroll from "react-infinite-scroll-component";
import Slider from "./slider";
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
    //const[top, setTop]=useState([]);
    const[count, setCount]=useState(0)
    const route=useRouter();

    
    
    var fetchMoreData=async()=>{
           await axios.get(`http://localhost:3000/api/artworks/getLimitedArtworks/${count+2}`)
        .then(response => {
            console.log(response.data);
            setCount(count + 2)
        setArr(response.data)
        })  
    }
    
return(
    <div className={styles.all}>
    
        <div><NavBar id={currentUsrId} showCart={showCart} setShowcart={setShowcart} /></div>
        {showCart && <Bucket id={currentUsrId} setShowcart={setShowcart} />}
    <div className={styles.wrapper}> 

        <h1 className={styles.titles}>The Gallery:</h1>
        <br></br>
        <div>
                <Search />  
        </div>   
   
        <h1 className={styles.titles}>TOP RATED ARTWORKS</h1>
        <div><Slider/></div>
        {/* <>
        <div className={styles.cols}>
            {top.map((ele,index)=>(
                <div className={styles.col} key={index}>
                <TopRated ele={ele}/>
                </div>
            ))}  
        </div> 
        </>  */}
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
        <div className={styles.cols}>   
        {arr.map((element, index) =>(
                <div   className={styles.col}   key={index}>
                    <ArtList element={element} />
                  </div>)          
                )}
        </div>
        </InfiniteScroll>
    }
    
    </div>
    <Footer/>
    </div>
)
}
export default Art;

//useEffect(()=>{
    //     axios.get(`http://localhost:3000/api/artworks/getTopArtworks/`)
    //     .then(response => {
    //         console.log(response.data);
    //     setTop(response.data)
    //     })
    // },[])

    // const find=()=>{
    //     axios.get(`localhost:3000/api/artists/getOneArtwork/${name}`)
    //       .then(function (response) {
    //         console.log(response);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //     }

/* <form className={styles.search}>
            <input type="text" placeholder="search for an artwork" onChange={handleChange}></input>
            <button type="submit" onClick={onClickk}><i className={"bi bi-search"}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg></i></button>
        </form> */

    // const handleChange=(e)=>{
    //     setName(e.target.value)
    // }

    // function onClickk(){
    //     showHide()
    //     //find()
    // }

    /*
    const showHide=()=>{
        setToggle(!toggle);
    }
    */