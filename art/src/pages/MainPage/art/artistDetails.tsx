import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/principale.module.css";
import NavBar from "../../../components/navBar";
import Footer from "../footer/footer";
import { useRouter } from 'next/router';




const ArtistDetails=()=>{
    const route=useRouter()
    const {query} = route || {};
    const data = String(query?.data)
    const items = JSON.parse(data);
    //console.log("item ===> ",items);

    const[details, setDetails]=useState([])
    //const[id, setId]=useState(null)
    const[imgs, setImg]=useState([])
    
    useEffect(()=>{
        axios.get(`http://localhost:3000/api/artists/getIdArtist/${items}/`)
        .then(response => {
            console.log(response.data);   
        setDetails(response.data)
        })  
    },[])

    useEffect(()=>{
        axios.get(`http://localhost:3000/api/artworks/getSomeArtworks/${items}/`)
        .then(response => {
            console.log(response.data);   
        setImg(response.data)
        })    
    },[])

    return(
        <>
        <div className={styles.all}>
            <NavBar/>
            <p className={styles.titles}>Artist Details</p>
            <img src={details.picture} style={{height:"200px", width:"200px", marginLeft:"100px", alignContent:"center"}}/>
            <ul style={{marginLeft:"100px"}}>{details.name}</ul>
            <ul style={{marginLeft:"100px"}}>{details.bio}</ul>
            <ul style={{marginLeft:"100px"}}>{details.email}</ul>
            <ul style={{marginLeft:"100px"}}>{details.birthDate}</ul>
            <ul style={{marginLeft:"100px"}}>{details.id}</ul>
        </div>
        <h1>Some of the artits's artworks</h1>
        <div className={styles.cols}>
            {imgs.map((ele)=>(  
                <div className={styles.col} >
                    <img src={ele.image} style={{width:"200px", height:"200px"}}/>
                </div>
            ))}
            
        </div>
            <br/><br/>
        <Footer/>
        </>
    )
}
export default ArtistDetails;

// const isChangeTheState=()=>{
// setId(1)
// console.log(id)
// }