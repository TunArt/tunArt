import React, {useState} from "react";
import styles from "../../../styles/principale.module.css";
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
        var pathAuction ="/MainPage/auctions/auctions"
        var pathBuy="/MainPage/art/artPurchase"
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
                    <BoldText>Creation Date:</BoldText>{" "+props.ele.creationDate+" "}<br/>
                    <BoldText>Rating:</BoldText>{" "+props.ele.rating+"/10 "}<br/>
                    <BoldText>Description:</BoldText>{" "+props.ele.description}<br/>
                    <button type="submit" onClick={BuyRedirect} className={styles.submitButton2}>{isForSaleOrBid}</button>
             </div>
            </div>
            </div>
                
                 
    )
}
export default TopRated;