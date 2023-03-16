import React,{useEffect, useState} from "react";
import styles from "../slider/slider2.module.css";
import TopRated2 from "./topRated2";
import axios from "axios";


const Slider2=()=>{
  const[top,setTop]=useState([]);
  const[active, setActive]=useState("")

    useEffect(()=>{
        axios.get(`http://localhost:3000/api/artworks/getTopArtworks/`)
        .then(response => {
            console.log(response.data);
        setTop(response.data)
        })
    },[])

        function sliderPluggin(activeslide = 0) {
          setActive("active")
          }
          
          
    return(
        <>
        <div className={styles.container}>
    {top.map((ele,index)=>(
        <div  key={index}>
            <TopRated2  setActive={}sliderPluggin={sliderPluggin} ele={ele}/>
        </div>
    ))}  
    </div> 
        </>
    )
}
export default Slider2;