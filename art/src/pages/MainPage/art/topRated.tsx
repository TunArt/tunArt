import React, {useState} from "react";
import styles from "../../../styles/principale.module.css";
import style from "../../../styles/newArt.module.css";
import Link from "next/link";
import {useRouter} from "next/router";
//import { query } from "express";

const TopRated=(props)=>{

    const[toggle, setToggle]= useState(false)
    const [popUp, setPopUp] = useState(false)
    const[children, setChildren]=useState("")
    const[page,setPage]=useState(1);
    const route=useRouter()

    const isAuction= props.ele.auction ? "Auction" :"Sell"
    const isForSaleOrBid = props.ele.auction ? "Bid" :"Buy"

    const showHide=()=>{
        setToggle(!toggle);
    }
    const BuyRedirect=()=>{
        var pathAuction ="/bid"
        var pathBuy="/MainPage/art/artPurchase2/"
        if(props.ele.auction){
            {
                route.push(pathAuction)
            }
        }  
        else{
            route.push({pathname: pathBuy,
                query:{item:JSON.stringify(props.ele)}
        }) }  
    }


function BoldText({children}) {
    return <span style={{fontWeight: 'bold'}}>{children}</span>;
  }

    return(  
        
        <div className={style.box}>
          <div className={style.imageBox}>
            <img src={props.ele.image} alt="pic"/>
          </div>
          <div className={style.content}>
            <h2><BoldText>Art Name:</BoldText>{" "+props.ele.name}<br/></h2>  
            
            <p><BoldText>Artist Name:</BoldText><a href="/admin">{" "+props.ele.artist.name}</a><br/></p>
            <p><BoldText>Price:</BoldText>{" "+props.ele.price+" $"}<br/></p>
            <p><button onClick={BuyRedirect} className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" style={{marginRight:"80px", marginTop:"40px"}}>{isForSaleOrBid}</button></p>

          </div>
        </div>      
                                
    )
}
export default TopRated;

/*
<div className={styles.container}>
                         <div className={styles.front} style={{ backgroundImage:`url(${props.ele.image})` }}>
                          <div className={styles.inner}>
							<p style={{fontFamily:"Montserrat"}}>{props.ele.name}</p>
						</div>
					</div>
				  	<div className={styles.back}>
						<div className={styles.inner}>
                    <BoldText>Art Name:</BoldText>{" "+props.ele.name+" "}<br/>
                    <BoldText>Price:</BoldText>{" "+props.ele.price+" $"}<br/>
                    <BoldText>Selling Type:</BoldText>{" "+isAuction}<br/>
                    <BoldText>Creation Date:</BoldText><a href="/admin/">{" "+props.ele.artist.name}</a><br/>
                    <BoldText>Rating:</BoldText>{" "+props.ele.rating+"/10 "}<br/>
                    <BoldText>Description:</BoldText>{" "+props.ele.description}<br/>
                    <button type="submit" onClick={BuyRedirect} className={styles.submitButton2}>{isForSaleOrBid}</button>
             </div>
            </div>
            </div>
                
                 
*//* <p><button type="submit" onClick={BuyRedirect} className={styles.submitButton2}>{isForSaleOrBid}</button></p> */