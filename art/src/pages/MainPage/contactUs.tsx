import React from "react";
import NavBar from "../../components/navBar";
import Search from "./search/search";
import styles from "../../styles/principale.module.css"
import Footer from "./footer/footer";

const contactUs=()=>{
    return(
        <div className={styles.all}>
            <div><NavBar/></div>
        <div className={styles.wrapper}>
            <h1 className={styles.titles}>CONTACT US ON</h1>
            <br></br>
            <ul>
                <li>Email: contact@artfolio.com</li>
                <li>Phone Number: +216 33 333 333</li>
                <li>Fax: +216 44 444 444</li>
                <li>Location: 123 Legendaries street-Tunis-Republic of Tunisa</li>
            </ul>
        </div>
        <Footer/>
        </div>
    )
}
export default contactUs;