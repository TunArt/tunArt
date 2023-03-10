import React, {useState} from "react";
import styles from "../../../styles/principale.module.css";
import Link from "next/link";
import {useRouter} from "next/router";
//import { query } from "express";

const ArtList=(props)=>{

    const[toggle, setToggle]= useState(false)
    const [popUp, setPopUp] = useState(false)
    const[children, setChildren]=useState("")
    const[page,setPage]=useState(1);
    const route=useRouter()

    const isAuction= props.element.auction ? "Auction" :"Sell"
    const isForSaleOrBid = props.element.auction ? "Bid" :"Buy"

    const showHide=()=>{
        setToggle(!toggle);
    }
    const BuyRedirect=()=>{
        var pathAuction ="/MainPage/auctions/auctions"
        var pathBuy="/MainPage/art/artPurchase"
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
        
        
                  
                      <div className={styles.container}>
                         <div className={styles.front} style={{ backgroundImage:`url(${props.element.image})` }}>
                          <div className={styles.inner}>
							<p style={{fontFamily:"Montserrat"}}>{props.element.name}</p>
						</div>
					</div>
				  	<div className={styles.back}>
						<div className={styles.inner}>
                    <BoldText>Art Name:</BoldText>{" "+props.element.name+" "}<br/>
                    <BoldText>Price:</BoldText>{" "+props.element.price+" $"}<br/>
                    <BoldText>Selling Type:</BoldText>{" "+isAuction}<br/>
                    <BoldText>Creation Date:</BoldText>{" "+props.element.creationDate+" "}<br/>
                    <BoldText>Rating:</BoldText>{" "+props.element.rating+"/10 "}<br/>
                    <BoldText>Description:</BoldText>{" "+props.element.description}<br/>
                    <button type="submit" onClick={BuyRedirect} className={styles.submitButton2}>{isForSaleOrBid}</button>
             </div>
            </div>
            </div>
                
                 
    )
}
export default ArtList;