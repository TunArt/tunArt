import React from "react";
import NavBar from "./navBar";
import { navLinks } from "./link";
import Link from "next/link";
import styles from "../../styles/principale.module.css"
import Search from "./search";

const MainPage =()=>{
    return(
        <div className={styles.all}>
        <div><NavBar /></div>
        <div className={styles.wrapper}>
            <a className={styles.titles}>{"ArtFolio   "}</a>
        <a style={{fontFamily:'Droid Sans'}}>{": The home of art .."}</a>
        <br></br>  
    <div>
        
        <br></br>
        <p>Put the content here</p>
        <p>this is a test for the main page.</p>
        <p>never maind this</p>
        <p>don't focus on this please !</p>
        <p>why are you still looking at these meaningless lines !!</p>
        <p>stop it!</p>
        <p>now !!</p>
    </div>
    </div>
        </div>
    )
}
export default MainPage;