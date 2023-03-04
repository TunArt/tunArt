// import React, {useState} from "react";
// import styles from "../../../styles/principale.module.css";

// const ArtList: React.FC<Props>=(props)=>{

//     const[toggle, setToggle]= useState(false)
//     const [popUp, setPopUp] = useState(false)

//     const showHide=()=>{
//         setToggle(!toggle);
//     }
//     const BuyPopUp=()=>{
//         setPopUp(!popUp)
//     }
// const isAuction= props.element.auction ? "Auction" :"Sell"

//     return(  
//        <div>
//           <div className={styles.galleryDisplay}>
//             <div className={styles.cards}>
//             <ul>
//                 <img style={{width:400, height:200}} src={props.element.image}/>
//             <div className={styles.cardsContainer}>
//                 {"Art Name: "+props.element.name+" "}<br/>
//                 {"Price: "+props.element.price+" $"}<br/>
//                 {"Selling Type: "+isAuction}<br/>
//             {toggle ?
//             <div>
//             {"Creation Date: "+props.element.creationDate+" "}<br/>
//             {"Rating: "+props.element.rating+"/10 "}<br/>
//             {"Description: "+props.element.description}
//             </div>
//             :<></>} 
//             <button type="submit" onClick={showHide} className={styles.submitButton}>Details</button>
//             <button type="submit" onClick={BuyPopUp} className={styles.submitButton2}>Buy</button>
//             </div>
//             </ul>
//             <br/>
//             </div>
//         </div>
//         </div>
//     )
// }
// export default ArtList;


import React, {useState} from "react";
import styles from "../../../styles/principale.module.css";
import Link from "next/link";
import {useRouter} from "next/router"

const ArtList=(props)=>{

    const[toggle, setToggle]= useState(false)
    const [popUp, setPopUp] = useState(false)
    const[children, setChildren]=useState("")
    const route=useRouter()

    const isAuction= props.element.auction ? "Auction" :"Sell"
    const isForSaleOrBid = props.element.auction ? "Bid" :"Buy"

    const showHide=()=>{
        setToggle(!toggle);
    }
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
export default ArtList;
