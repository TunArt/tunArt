import React,{useEffect, useState} from "react";
import axios from "axios";
import NavBar from "../../../components/navBar";
import styles from "../../../styles/principale.module.css";
import {useRouter} from "next/router";
import Footer from "../footer/footer";
import 'w3-css/w3.css';
import { borderRadius, padding } from "@mui/system";


const ArtPurchase=()=>{
    const route=useRouter()
    const {query} = route || {};
    const item = String(query?.item)
    const items = JSON.parse(item);
    console.log("item",item);

   
    function payment(){
        route.push("/MainPage/art/artPayment")
    }

    const redirect=()=>{
        route.push("/MainPage/art/art")
    }
    //route.query.image;

    return(
        <>
        <div className={styles.all}>
        <NavBar/>
        <button className={styles.submitButton2} style={{marginLeft:"100px"}} onClick={redirect}>Go Back</button>
        <div className={styles.wrapper}>
            <h1 className={styles.titles}>ITEM DETAILS:</h1>
            <div className="w3-card-4" style={{width:"50%", backgroundColor:"gray", boxShadow:""}}>
                <img src={items.image} style={{height:"300px", width:"300px", margin:"30px"}}/>
                <div className="w3-container w3-center">
                    <ul style={{textAlign:"left",marginLeft:"20px" ,padding:"5px", backgroundColor:"darkorange" ,borderRadius:"10px",marginBottom:"5px"}}>Name:{" "+items.name}</ul>
                    <ul style={{textAlign:"left",marginLeft:"20px",padding:"5px", backgroundColor:"darkorange" ,borderRadius:"10px", marginBottom:"5px"}}>Artist:{" "+items.artist.name }</ul>
                    <ul style={{textAlign:"left",marginLeft:"20px",padding:"5px", backgroundColor:"darkorange" ,borderRadius:"10px",marginBottom:"5px"}}>Price:{" "+items.price+" $"}</ul>
                    <ul style={{textAlign:"left",marginLeft:"20px",padding:"5px", backgroundColor:"darkorange" ,borderRadius:"10px",marginBottom:"5px"}}>Creation Date:{" "+items.creationDate}</ul>
                    <ul style={{textAlign:"left",marginLeft:"20px",padding:"5px", backgroundColor:"darkorange" ,borderRadius:"10px",marginBottom:"5px"}}>Art Type:{" "+items.description}</ul>
                </div>
                
                <button type="submit" className={styles.submitButton2} onClick={payment} style={{marginBottom:"20px", marginLeft:"235px"}}>Pass To Payment</button>
            </div>    
        </div>
        <Footer/>
        </div>  
        </>
    )
}
export default ArtPurchase;