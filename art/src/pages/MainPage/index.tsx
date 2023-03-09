import React,{useEffect,useState} from "react";
import NavBar from "../../components/navBar";
import { navLinks } from "./link";
import Link from "next/link";
import styles from "../../styles/principale.module.css"
import Search from "./search/search";
import axios from "axios"
import { useRouter } from 'next/router';
import Bucket from "../../components/backet/backet";
import { loadComponents } from "next/dist/server/load-components";

interface EmailParams{
    email: string;
}
interface DataParams{
    email: string;
    userName: string;
}
const MainPage =()=>{
    const [showCart,setShowcart]=useState(false)
    const router=useRouter()
    const [user, setUser] = useState([])
    const [artists,setArtists]=useState([])
    const [render,setRender]=useState(false);
    const id:string = router.query.id ?? router.query.id
    console.log(router.query)
    useEffect(()=>{
        axios.get(`http://localhost:3000/api/users/getUserId/${localStorage.id}`).then((res)=>{
        setUser(res.data)
        console.log(res);
        }).then(()=>{
            axios.get("http://localhost:3000/api/artists/getArtists").then((res)=>{
                console.log(res)
                setArtists(res.data)
            })
        }).catch((err)=>{
            if(!localStorage.id){
                return <h1>Please log In for Sign Up</h1>
            }
        })
    },[id])
    
    console.log(showCart)
    console.log(typeof( router.query.id) )
    console.log(user)
    return(
        <div className={styles.all}>
<<<<<<< HEAD
            {showCart && <Bucket id={localStorage.id} setShowcart={setShowcart} />}
        <div><NavBar id={localStorage.id} showCart={showCart} setShowcart={setShowcart}  /></div>
=======
        <div><NavBar id={id} /></div>
>>>>>>> 666d27ba48a6fcc4b2ea03af0ca3ed265922e922
        <div className={styles.wrapper}>
         <a className={styles.titles}>{"ArtFolio   "}</a>
        <a style={{fontFamily:'Droid Sans'}}>{": The home of art .."}</a>
        <br></br>  
        </div>
        
        </div>
    )
}
export default MainPage;