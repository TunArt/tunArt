import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/principale.module.css";
import style from "../../../styles/newArt.module.css";
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

    // const BuyRedirect=()=>{
    //     var pathAuction ="/bid/"
    //     var pathBuy="/MainPage/art/artPurchase2/"
    //     if(props.element.auction){
    //         {
    //             route.push(pathAuction)
    //         }
    //     }  
    //     else{
    //         route.push({pathname: pathBuy,
    //             query:{item:JSON.stringify(props.element)}
    //     }) }  
    // }


function BoldText({children}) {
    return <span style={{fontWeight: 'bold'}}>{children}</span>;
  }

  console.log("data ==> ", imgs);
  
    return(
        <>
        <div className={styles.all}>
            <NavBar/>
            <p className={styles.titles}>Artist Details</p>
            <img src={details.picture} style={{height:"200px", width:"200px", marginLeft:"100px", alignContent:"center"}}/>
            <ul style={{marginLeft:"100px", color:"white"}}>{"Name: "+details.name}</ul>
            <ul style={{marginLeft:"100px",color:"white"}}>{"Bio: "+details.bio}</ul>
            <ul style={{marginLeft:"100px",color:"white"}}>{"E-mail: "+details.email}</ul>
            <ul style={{marginLeft:"100px",color:"white"}}>{"Date of Birth: "+details.birthDate}</ul>
            <ul style={{marginLeft:"100px",color:"white"}}>{"Artist's ID: "+details.id}</ul>
        </div>
        <h1>Some of the artits's artworks</h1>
        <div className={style.all}>
        
        <div className={style.Container}>
            {imgs.map((ele)=>(  
                <div>
                <div className={style.box}>
                <div className={style.imageBox}>
                  <img src={ele.image} alt="pic"/>
                </div>
                <div className={style.content}>
                  <h2><BoldText>Art Name:</BoldText>{" "+ele.name}<br/></h2>  
                  <p><BoldText>Artist Name:</BoldText>{" "+ele.artist.name}<br/></p>
                  <p><BoldText>Price:</BoldText>{" "+ele.price+" $"}<br/></p>
                  <p><button  className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" style={{marginRight:"80px", marginTop:"40px"}}>BUY</button></p>
                </div>
              </div>
              </div>
            ))}
            
        </div>
        
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