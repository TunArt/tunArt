import React, { useState } from "react";
import { TestInventories } from "../testInventories";
import styles from "../../../styles/principale.module.css";

const ProductDetails=()=>{
    const[toggle, setToggle]= useState(true)

    const showHide=()=>{
        setToggle(!toggle);
    }

    return(

        <div className={styles.all}>
        <div className={styles.gallery}>
        {TestInventories.map((e)=>(
            <>
                <img style={{width:400, height:200}} src={e.Picture} alt="image" className={styles.imagesshop}/><br/>
                <button onClick={showHide}>Show / Hide</button>
                {toggle ?
            <div>
                {"Product Name: "+e.ProductName+" - "}{"Price: "+e.Price+"$ "}<br/>
                {"Product Brand: "+e.Brand+" - "}{"Quantity: "+e.Quantity+" "}<br/>
                {"Product Description: "+e.ProductDescription+" - "}{"Rating: "+e.Rating+"/10"}<br/>
                {"Shoppers Comments: "+e.Commnets}<br/>  
            </div>
            :<></>
            } 
            </>
        ))}
        </div>
        </div>
    )
}
export default ProductDetails;