import React, { useState } from "react";
import { TestInventories } from "../testInventories";
import styles from "../../../styles/principale.module.css";


const ProductDetails=()=>{
    const[toggle, setToggle]= useState(false)

    const showHide=()=>{
        setToggle(!toggle);
    }

    return(

        <div className={styles.all}>
            <div className={styles.wrapper}>
        <div className={styles.galleryDisplay}>
        {TestInventories.map((e)=>(
            <div className={styles.cards}>
                <img style={{width:400, height:200}} src={e.Picture} alt="image" className={styles.imagesshop}/><br/>
                <div>
                <ul>{"Product Name: "+e.ProductName}</ul>
                <ul>{"Product Brand: "+e.Brand}</ul>
                <ul>{"Price: "+e.Price+" $"}</ul>
                </div>
                {toggle ?
            <div>
                {"Quantity: "+e.Quantity}<br/>  
                {"Product Description: "+e.ProductDescription}<br/>
                {"Rating: "+e.Rating+"/10"}<br/>
                {"Shoppers Comments: "+e.Commnets}    
            </div>
            :<></>
            } 
            <button type="submit" onClick={showHide} className={styles.submitButton}>Show More Details</button>
            </div>
        ))}
        </div>
        </div>
        </div>
    )
}
export default ProductDetails;

{/* <div id="ww_cad417927734c"
 v='1.3' loc='id' 
 a='{"t":"horizontal","lang":"en","sl_lpl":1,"ids":[],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}'>
    Weather Data Source: 
    <a href="https://wetterlang.de/paris_wetter_30_tage/" 
    id="ww_cad417927734c_u" target="_blank">
        Paris 30 tage wetter
        </a>
        </div>
        <script async src="https://app1.weatherwidget.org/js/?id=ww_cad417927734c">

        </script> */}