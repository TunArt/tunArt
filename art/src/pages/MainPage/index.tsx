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
    const [currentUsrId,setCurrentUserId]=useState('')
    console.log(router.query)
    useEffect(()=>{
        try{
        axios.get(`http://localhost:3000/api/users/getUser/${localStorage.email}`)
        .then((res)=>{
        console.log(res)
        if(!res.data) {throw Error('failed')}
        setUser(res.data)
        setCurrentUserId(localStorage.id)
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
        
    }
    },[])
    
    console.log(showCart)
    console.log(typeof( router.query.id) )
    console.log(user)
    console.log("mmm",currentUsrId)
    return(

        <div>
            {showCart && <Bucket id={currentUsrId} setShowcart={setShowcart} />}
        <div><NavBar id={currentUsrId} showCart={showCart} setShowcart={setShowcart}  /></div>
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">ArtFolio</h1>
            <h2 className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">The home of art ..</h2>
        </div>
        
        </div>
    )
}
export default MainPage;
