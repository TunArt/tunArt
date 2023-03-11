import React, {useEffect, useState} from "react";
import NavBar from "../navBar";
import { TestData } from "../testData";
import styles from "../../../styles/principale.module.css";
import axios from "axios";
import ProductDetails from "./productDetails";
import SearchList from "../search/searchList";
import Footer from "../footer/footer";

//const dummyArt=["./img 01.jpeg", "./img 02.webp"]



const Shop=()=>{

    const[arr, setArr]=useState([])
    const[items, setItems]=useState([])
    const[toggle,setToggle]=useState(false)
    const[name, setName]=useState("")

    const showHide=()=>{
        setToggle(!toggle);
    }

    useEffect(()=>{
        axios.get('http://localhost:3000/api/products/getProducts')
    .then(response => {
        console.log(response.data);
    setArr(response.data)
    })
    },[])
    
    const find=()=>{
        axios.get(`localhost:3000/getOneArtwork/${name}`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        }

    const handleChange=(e)=>{
        setName(e.target.value)
    }

    function onClickk(){
        showHide()
        find()
    }
return(
    <div className={styles.all}>
    
        <div><NavBar/></div>
    <div className={styles.wrapper}> 
        <h1 className={styles.titles}>THE SHOP</h1>
        <br></br>
        
        
        <form className={styles.search}>
            <input type="text" placeholder="search for an artwork" onChange={handleChange}></input>
            
            <button type="submit" onClick={onClickk}><i className={"bi bi-search"}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg></i></button>
        </form>
        {toggle?
        <div>
            {items.map((el,index)=>(
                <div key={index}>
                <SearchList el={el}/>
                </div>
            ))}  
        </div>   
   
    :

        <div className={styles.cols}>   
        {arr.map((element, index) =>(
                <div   className={styles.col}   key={index}>
                    <ProductDetails element={element} />
                  </div>)          
                )}
        </div>
    }
    </div>
    <Footer/>
    </div>
)
}
export default Shop;


// import React from "react";
// import NavBar from "../../../components/navBar";
// import ProductDetails from "./productDetails";
// import { TestInventories } from "../testInventories";
// import styles from "../../../styles/principale.module.css";
// import Footer from "../footer/footer";


// //const dummyShop=["./img 01.jpeg", "./img 02.webp","./search icon 00"]

// const shop=()=>{
// return(
//     <div className={styles.all}>
//         <div><NavBar/></div>
//     <div className={styles.wrapper}>
//         <h1 className={styles.titles}>Our shop:</h1>
//         <br></br>
//         <div className={styles.cols}>   
//         {arr.map((element, index) =>(
//                 <div   className={styles.col}   key={index}>
//                     <ProductDetails element={element} />
//                   </div>)          
//                 )}
//         </div>
        
//     </div>
//     <Footer/>
//     </div>
// )
// }
// export default shop;

