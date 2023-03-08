import React, {useState} from "react";
import styles from "../../../styles/principale.module.css";
import Link from "next/link";
import {useRouter} from "next/router"

const ProductDetails=(props)=>{

    const[toggle, setToggle]= useState(false)
    const [popUp, setPopUp] = useState(false)
    const[children, setChildren]=useState("")
    const route=useRouter()

    //const isAuction= props.element.auction ? "Auction" :"Sell"
    //const isForSaleOrBid = props.element.auction ? "Bid" :"Buy"

    const showHide=()=>{
        setToggle(!toggle);
    }
    const Buy=()=>{
        alert("you will be redirected to the purshesing page!")
    }


function BoldText({children}) {
    return <span style={{fontWeight: 'bold'}}>{children}</span>;
  }

    return(  
        
        
                  
                      <div className={styles.container}>
                         <div className={styles.front} style={{ backgroundImage:`url(${props.element.picture})` }}>
                          <div className={styles.inner}>
							<p style={{fontFamily:"Montserrat"}}>{props.element.name}</p>
						</div>
					</div>
				  	<div className={styles.back}>
						<div className={styles.inner}>
                    <BoldText>Product Name:</BoldText>{" "+props.element.name+" "}<br/>
                    <BoldText>Price:</BoldText>{" "+props.element.price+" $"}<br/>
                    <BoldText>Quantity:</BoldText>{" "+props.element.quantity}<br/>
                    <BoldText>Brand:</BoldText>{" "+props.element.brand+" "}<br/>
                    <BoldText>Rating:</BoldText>{" "+props.element.rating+"/5 "}<br/>
                    <BoldText>Description:</BoldText>{" "+props.element.description}<br/>
                    
                    <button type="submit" onClick={Buy} className={styles.submitButton2}>Buy</button>
             </div>
            </div>
            </div>
                
                 
    )
}
export default ProductDetails;
