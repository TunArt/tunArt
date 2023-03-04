import React from "react";
import NavBar from "../navBar";
import ProductDetails from "./productDetails";
import { TestInventories } from "../testInventories";
import styles from "../../../styles/principale.module.css";


//const dummyShop=["./img 01.jpeg", "./img 02.webp","./search icon 00"]

const shop=()=>{
return(
    <div className={styles.all}>
        <div><NavBar/></div>
    <div className={styles.wrapper}>
        <h1 className={styles.titles}>Our shop:</h1>
        <br></br>
        <div className={styles.gallery}>
        <ProductDetails/>
        </div>
        
    </div>
    </div>
)
}
export default shop;