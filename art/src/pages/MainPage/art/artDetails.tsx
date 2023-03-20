import React, {useState} from "react";
import style from "../../../styles/newArt.module.css";
//import styles from "../../../styles/principale.module.css";
import Link from "next/link";
import {useRouter} from "next/router";
//import { query } from "express";

const ArtDetails=(props)=>{
console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",props);
const fistPic=(Array.isArray(JSON.parse(props.element.image))? JSON.parse(props.element.image)[0]: JSON.parse (props.element.image))
console.log("pic",typeof(fistPic));
    const[toggle, setToggle]= useState(false)
    const [popUp, setPopUp] = useState(false)
    const[children, setChildren]=useState("")
    const[page,setPage]=useState(1);
    const route=useRouter()
//console.log('ele',props.element)
    const isAuction= props.element.auction ? "Auction" :"Sell"
    const isForSaleOrBid = props.element.auction ? "Bid" :"Buy"
    const showHide=()=>{
        setToggle(!toggle);
    }
    const BuyRedirect=()=>{
        var pathAuction ="/bid/"
        var pathBuy="/MainPage/art/artPurchase2/"
        if(props.element.auction){
            {
                route.push(pathAuction)
            }
        }  
        else{
            route.push({pathname: pathBuy,
                query:{item:JSON.stringify(props.element)}
        }) }  
    }


function BoldText({children}) {
    return <span style={{fontWeight: 'bold'}}>{children}</span>;
  }

  return(
        <div >
    <div className={style.box}>
      <div className={style.imageBox}>
        <img src={fistPic} alt="pic"/>
      </div>
      <div className={style.content}>
        <h2><BoldText>Art Name:</BoldText>{" "+props.element.name}<br/></h2>  
        
        <p><BoldText>Artist Name:</BoldText>{" "+props.element.artist.name}<br/></p>
        <p><BoldText>Price:</BoldText>{" "+props.element.price+" $"}<br/></p>
        <p><button onClick={BuyRedirect} className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" style={{marginRight:"80px", marginTop:"40px"}}>{isForSaleOrBid}</button></p>
    
      </div>
    </div>
    
      </div>           
            
    )
    }
export default ArtDetails;

/* <p><button type="submit" onClick={BuyRedirect} className={styles.submitButton2}>{isForSaleOrBid}</button></p> */