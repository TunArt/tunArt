import React, {useState} from "react";
//import styles from "../../../styles/principale.module.css";
import style from "../../../styles/newArt.module.css";
import styles from "../slider/slider2.module.css";
import Link from "next/link";
import {useRouter} from "next/router";
import NavBar from "../../../../components/navBar";
import Footer from "../../footer/footer";
//import { query } from "express";

const TopRated2=(props)=>{

    const[toggle, setToggle]= useState(false)
    const [popUp, setPopUp] = useState(false)
    const[children, setChildren]=useState("")
    const[page,setPage]=useState(1);
    const[active, setActive]=useState(false)
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
    function sliderPluggin() {
        setActive(!active)
        console.log(active);

        }
// function BoldText({children}) {
//     return <span style={{fontWeight: 'bold'}}>{children}</span>;
//   }

const classActive = active? `${styles.active} ${styles.slide}`:styles.slide
    return(  
        <div> 
        <img className={classActive}  id={props.ele.id}  src={props.ele.image} onClick={sliderPluggin} />
    <h3>{props.ele.name}</h3>
  </div>
                           
    )
}
export default TopRated2;
