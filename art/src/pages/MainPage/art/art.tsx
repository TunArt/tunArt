import React, {useState} from "react";
import NavBar from "../../../components/navBar";
import { TestData } from "../testData";
import styles from "../../../styles/principale.module.css";
import axios from "axios";
import ArtList from "./artList";

//const dummyArt=["./img 01.jpeg", "./img 02.webp"]



const Art=()=>{

    const[arr, setArr]=useState([])

   !arr.length? axios.get('http://localhost:3000/api/artworks/getArtworks')
    .then(response => {
        console.log(response.data);
    setArr(response.data)
    }):undefined
    
    
return(
    <div className={styles.all}>
    
        <div><NavBar/></div>
    <div className={styles.wrapper}> 
        <h1 className={styles.titles}>The Gallery:</h1>
        <br></br>
        <div className={styles.cols}>   
        {arr.map((element, index) =>(
                <div   className={styles.col}   key={index}>
                    <ArtList element={element} />
                  </div>)          
                )}
        </div>
        
    </div>
    </div>
)
}
export default Art;


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