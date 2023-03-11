import React ,{useState}from "react";
import styles from "../../../styles/principale.module.css";
import Router,{useRouter} from "next/router";


const SearchList=(props)=>{
    
    const route=useRouter()
    const isAuction= props.element.auction ? "Auction" :"Sell"
    const isForSaleOrBid = props.element.auction ? "Bid" :"Buy"

    const BuyRedirect=()=>{
        if(props.element.auction){
            {
                route.push("/MainPage/auctions/auctions")
            }
        }  
        else{
            alert("Shop cart is not ready yet!! harry up Aziz!")
        }   
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
export default SearchList;