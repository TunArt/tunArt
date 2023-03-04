import React from "react";
import NavBar from "../../components/navBar";
import Search from "./search";
import styles from "../../styles/principale.module.css"

const aboutUs=()=>{
return(
    <div className={styles.all}>
        <div><NavBar/></div>
    <div className={styles.wrapper}>
    <h1 className={styles.titles}>Who are we ?</h1>
    <br></br>
    <p>
        We are the country's first art website.<br/>
        Focused mainly on selling Artworks and it's tools.<br/>
        We sell all from contemporary to antique pieces coming from amateur to world class Artists.<br/>
        All through regular sell or auction for the high value pieces ...
    </p>
    </div>
    </div>
)
}
export default aboutUs;