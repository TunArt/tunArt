import React,{useEffect,useState} from "react";
import NavBar from "../../components/navBar";
import { navLinks } from "./link";
import Link from "next/link";
import styles from "../../styles/principale.module.css"
import Search from "./search";
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
    const [currentUsrId,setCurrentUserId]=useState('')
    console.log(router.query)
    useEffect(()=>{
        try{
        axios.get(`http://localhost:3000/api/users/getUser/${localStorage.email}`)
        .then((res)=>{
            console.log(res)
            if(!res.data) throw Error('failed')
        setUser(res.data)
        console.log(res);
        console.log("iduser:",localStorage.id);
        
        setCurrentUserId(localStorage.id)
        }).catch((err)=>{
            axios.get(`http://localhost:3000/api/artists/getArtist/${localStorage.email}`).then((res)=>{
                console.log(res)
                setCurrentUserId(localStorage.id)
            setUser(res.data)
            })
        })
    }
    catch{
        return <h1>Please Log In </h1>
    }
    },[])
    
    console.log(showCart)
    console.log(typeof( router.query.id) )
    console.log(user)
    console.log("mmm",currentUsrId)
    return(

        <div className={styles.all}>
            {showCart && <Bucket id={currentUsrId} setShowcart={setShowcart} />}
        <div><NavBar id={currentUsrId} showCart={showCart} setShowcart={setShowcart}  /></div>
        <div className={styles.wrapper}>
         <a className={styles.titles}>{"ArtFolio   "}</a>
        <a style={{fontFamily:'Droid Sans'}}>{": The home of art .."}</a>
        <br></br>  
        </div>
        
        </div>
    )
}
export default MainPage;