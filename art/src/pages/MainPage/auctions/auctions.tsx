import React from "react";
import NavBar from "../../../components/navBar";
import Search from "../search";
import styles from "../../../styles/principale.module.css";


const auctions=()=>{
    return(
        <div className={styles.all}>
        <div className={styles.main}>
            <div><NavBar/></div>
            <h1>Welcome to Auctions room!</h1>
            <h4>Were legendary piece of arts are sold!</h4>
        </div>
        </div>
    )
}
export default auctions;