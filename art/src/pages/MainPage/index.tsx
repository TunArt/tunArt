import React from "react";
import NavBar from "./navBar";
import { navLinks } from "./link";
import Link from "next/link";
import styles from "../../styles/principale.module.css"
import Search from "./search";

const MainPage =()=>{
    return(
        <div className={styles.all}>
        <Link href={"/"}>
            <h1>ArtFolio :</h1>
        </Link>
        <h4>The home of art ..</h4>
        <br></br>
        
    <div>
        <div>
            <NavBar />
        </div>
        <br></br>
        <p>Put the content here</p>
        <p>this is a test for the main page.</p>
        <p>never maind this</p>
        <p>don't look focus at this please !</p>
        <p>why are you still looking at these meaningless lines !!</p>
        <p>stop it!</p>
        <p>now !!</p>
    </div>
        </div>
    )
}
export default MainPage;