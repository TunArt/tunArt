import React from "react";
import NavBar from "./navBar";
import Search from "./search";
import styles from "../../styles/principale.module.css"

const aboutUs=()=>{
return(
    <div className={styles.all}>
    <div className={styles.main}>
        <div>
            <NavBar/>
        </div>
    <h1>Who we are ?</h1>
    <br></br>
    <p>
        We are the country's first art website.<br></br>
        Focused mainly on selling Artworks and it's tools.<br></br>
        We sell all from contemporary to antique pieces coming from amateur to world class Artists.<br></br>
        All through regular sell or auction to the high value pieces ...
    </p>
    </div>
    </div>
)
}
export default aboutUs;