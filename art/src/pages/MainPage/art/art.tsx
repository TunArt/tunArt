import React from "react";
import NavBar from "../navBar";
import { TestData } from "../testData";
import styles from "../../../styles/principale.module.css";


//const dummyArt=["./img 01.jpeg", "./img 02.webp"]

const Art=()=>{
return(
    <div className={styles.all}>
    <div className={styles.main}>
        
        <h1>The Gallery:</h1>
        <div><NavBar/></div>
        <br></br>
        <div>
        {TestData.map((e)=>(
            <div className={styles.art}>
            <ul>
                <img style={{width:400, height:200}} src={e.ArtImage}/>
            <p>{"Art Name: "+e.ArtName+" "}<br/>{"Art Type: "+e.ArtType+" "}<br/>
            {"Creation Date: "+e.CreationDate+" "}<br/>{"Price: "+e.Price+"$"}<br/>
            {"Number Of Pieces: "+e.NumberOfPieces+" "}<br/>
            {"Rating: "+e.Rating+"/10 "}<br/>{"Selling Type: "+e.SellingType+" "}<br/>
            {"Description: "+e.Description}</p>
            </ul>
            <br/>
            </div>
        ))}
        </div>
        
    </div>
    </div>
)
}
export default Art;