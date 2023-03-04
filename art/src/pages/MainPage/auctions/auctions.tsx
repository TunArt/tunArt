import React from "react";
import NavBar from "../navBar";
import Search from "../search";
import styles from "../../../styles/principale.module.css";


const auctions=()=>{
    return(
        <div className={styles.all}>
            <div><NavBar/></div>
        <div className={styles.wrapper}>
            <h1 className={styles.titles}>Welcome to Auctions room!</h1>
            <h4>Were legendary piece of arts are sold!</h4>
        </div>
        </div>
    )
}
export default auctions;