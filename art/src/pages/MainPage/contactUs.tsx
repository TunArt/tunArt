import React from "react";
import NavBar from "./navBar";
import Search from "./search";
import styles from "../../styles/principale.module.css"

const contactUs=()=>{
    return(
        <div className={styles.all}>
            <div><NavBar/></div>
        <div className={styles.wrapper}>
            <h1 className={styles.titles}>Contact us on:</h1>
            <br></br>
            <ul>
                <li><h4>Email: contact@artfolio.com</h4></li>
                <li><h4>Phone Number: +216 33 333 333</h4></li>
                <li><h4>Fax: +216 44 444 444</h4></li>
                <li><h4>Location: 123 Legendaries street-Tunis-Republic of Tunisa</h4></li>
            </ul>
        </div>
        </div>
    )
}
export default contactUs;