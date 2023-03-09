import React, {useEffect, useState} from "react";
import NavBar from "../../../components/navBar";
import { TestData } from "../testData";
import styles from "../../../styles/principale.module.css";
import axios from "axios";
import ArtList from "./artList";
import SearchList from "../search/searchList";
import Footer from "../footer/footer";
import {useRouter} from "next/router";

//const dummyArt=["./img 01.jpeg", "./img 02.webp"]



const Art=()=>{

    const[arr, setArr]=useState([])
    const[items, setItems]=useState([])
    const[toggle,setToggle]=useState(false)
    const[name, setName]=useState("")
    const route=useRouter();
    const[page,setPage]=useState(1)

    const showHide=()=>{
        setToggle(!toggle);
    }
    useEffect(()=>{
        axios.get('http://localhost:3000/api/artworks/getArtworks')
    .then(response => {
        console.log(response.data);
    setArr(response.data)
    })
    },[page])
    
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
        <h1 className={styles.titles}>THE GALLERY</h1>
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
                    <ArtList element={element} />
                  </div>)          
                )}
        </div>
    }
    </div>
    <Footer/>
    </div>
)
}
export default Art;

/*
isLast={index === images.length - 1}
      newLimit={() => setPage(page + 1)}
*/

// import React, {useState} from "react";
// import NavBar from "../navBar";
// import { TestData } from "../testData";
// import styles from "../../../styles/principale.module.css";
// import axios from "axios";
// import ArtList from "./artList";

// //const dummyArt=["./img 01.jpeg", "./img 02.webp"]



// const Art=()=>{

//     const[arr, setArr]=useState([])

//    !arr.length? axios.get('http://localhost:3000/api/artworks/getArtworks')
//     .then(response => {
//         console.log(response.data);
//     setArr(response.data)
//     }):undefined
    
    
// return(
//     <div className={styles.all}>
//     <div className={styles.main}> 
    
//         <div><NavBar/></div>
//         <h1 className={styles.titles}>The Gallery:</h1>
//         <br></br>
//         <div>   
//         {arr.map((element, index) =>(
//                 <div key={index}>
//                     <ArtList element={element} />
//                   </div>)          
//                 )}
//         </div>
        
//     </div>
//     </div>
// )
// }
// export default Art;

// import React, {useState} from "react";
// import NavBar from "../navBar";
// import { TestData } from "../testData";
// import styles from "../../../styles/principale.module.css";
// import axios from "axios";

// //const dummyArt=["./img 01.jpeg", "./img 02.webp"]

// axios.get('http://localhost:3000/api/artworks/getArtworks',
//      {
//         //donnees : res.data
//     }
// )
// .then(response => {
//   console.log(response.data);
// });

// const Art=()=>{

//     const[toggle, setToggle]= useState(false)
//     const[arr, setArr]=useState([])
//     const showHide=()=>{
//         setToggle(!toggle);
//     }

// return(
//     <div className={styles.all}>
//     <div className={styles.main}> 
//         <div><NavBar/></div>
//         <h1 className={styles.titles}>The Gallery:</h1>
//         <br></br>
//         <div className={styles.galleryDisplay}>
//         {TestData.map((e)=>(
//             <div className={styles.cards}>
//             <ul>
//                 <img style={{width:400, height:200}} src={e.ArtImage}/>
//             <div className={styles.cardsContainer}>
//                 <ul><h2>{"Art Name: "+e.ArtName+" "}</h2></ul>
//                 <ul><h2>{"Price: "+e.Price+" $"}</h2></ul>
//                 <ul><h2>{"Selling Type: "+e.SellingType+" "}</h2></ul>
//             {toggle ?
//             <div>
//             {"Creation Date: "+e.CreationDate+" "}<br/>
//             {"Number Of Pieces: "+e.NumberOfPieces+" "}<br/>
//             {"Rating: "+e.Rating+"/10 "}<br/>
//             {"Description: "+e.Description}
//             </div>
//             :<></>} 
//             <button type="submit" onClick={showHide} className={styles.submitButton}>Show More Details</button>
//             </div>
//             </ul>
//             <br/>
//             </div>
//         ))}
//         </div>
        
//     </div>
//     </div>
// )
// }
// export default Art;