import React from "react";
import styles from "../../../styles/principale.module.css";
import NavBar from "../../../components/navBar";
import 'w3-css/w3.css';
import Footer from "../footer/footer";
import { useRouter } from "next/router";

const Payment=()=>{
    const route=useRouter();

    const paymentClick=()=>{
        alert("Payment successfull ! have a nice day :)");
    }

    const redirect=()=>{
        route.push("/MainPage/art/art")
    }
    return(
        
        <div className={styles.all}>
            <NavBar/>
            <button className={styles.submitButton2} style={{marginLeft:"100px"}} onClick={redirect}>Back to Gallery</button>
        <div className={styles.wrapper}>
            <h1 className={styles.titles}>PAYMENT DETAILS:</h1>
            <form className="w3-card-4" style={{width:"600px", height:"auto", marginTop:"50px", fontFamily:"monospace", backgroundColor:"gray"}}>
                <h3 style={{fontFamily:"monospace", marginLeft:"30px", marginRight:"30px", marginTop:"2 0px", padding:"10px", backgroundColor:"darkorange", textAlign:"center", borderRadius:"10px"}}>Please fill in you informations</h3><br/>
                <input type="text" placeholder="Enter your full name" style={{width:"300px",marginLeft:"30px", padding:"6px"}}></input><br/><br/>
                <input type="text" placeholder="Enter your card number" style={{width:"300px",marginLeft:"30px", padding:"6px"}}></input><br/><br/>
                <input type="text" placeholder="Enter your card's expiring date" style={{width:"300px",marginLeft:"30px", padding:"6px"}}></input><br/><br/>
                <input type="text" placeholder="Enter your card's CCV" style={{width:"300px",marginLeft:"30px", padding:"6px"}}></input><br/><br/>
                <button type="submit" onClick={paymentClick}className={styles.submitButton2} style={{marginLeft:"30px", marginBottom:"30px"}}>Purchse</button>
            </form>
            
            </div>
            <Footer/>
        </div>
            
        
    )
}
export default Payment;