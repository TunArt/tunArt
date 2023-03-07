import React, { useState } from "react";
import styles from "../../../styles/principale.module.css"
import axios from "axios";
//import TestData from "../testData"
import SearchList from "./searchList";
//import { elements } from "chart.js";

const Search=()=>{
    const[items, setItems]=useState([])
    const[toggle,setToggle]=useState(false)
    const[name, setName]=useState("")

    const showHide=()=>{
        setToggle(!toggle);
    }

    const find=()=>{
        axios.get(`localhost:3000/getOneArtwork/${name}`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        }
    
        // const filterdByName = (array) => {
        //     return array.filter(el => el.artName.toLowerCase().includes(query))
        // }
    

    // const filtered = filterdByName(TestData);

    const handleChange=(e)=>{
        setName(e.target.value)
    }

    function onClickk(){
        showHide()
        find()
    }

    return(
<>
    <div >
        <form className={styles.search}>
            <input type="text" placeholder="search" onChange={handleChange}></input>
            
            <button type="submit" onClick={onClickk}><i className={"bi bi-search"}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg></i></button>
        </form>
        <div>
            {items.map((element,index)=>(
                <div key={index}>
                <SearchList element={element}/>
                </div>
            ))}  
        </div>   
    </div>
</>
    )
}
export default Search;