import React,{useEffect,useState} from "react";
import NavBar from "../../components/navBar";
import { navLinks } from "./link";
import Link from "next/link";
import styles from "../../styles/principale.module.css"
import Search from "./search/search";
import axios from "axios"
import { useRouter } from 'next/router';

interface EmailParams{
    email: string;
}
interface DataParams{
    email: string;
    userName: string;
}
const MainPage =()=>{
    const router=useRouter()
    const [user, setUser] = useState([])
    const [artists,setArtists]=useState([])
    const [render,setRender]=useState(false);
    const id = router.query.id ?? router.query.id
    console.log(router.query)
    useEffect(()=>{
        axios.get(`http://localhost:3000/api/users/getUserId/${id}`).then((res)=>{
        setUser(res.data)
        console.log(res);
        }).then(()=>{
            axios.get("http://localhost:3000/api/artists/getArtists").then((res)=>{
                console.log(res)
                setArtists(res.data)
            })
        })
    },[id])
    if(!id){
        return <div>loading....</div>
    }
    console.log(router.query.id)
    console.log(user)
    return(
        <div className={styles.all}>
        <div><NavBar id={id} /></div>
        <div className={styles.wrapper}>
         <a className={styles.titles}>{"ArtFolio   "}</a>
        <a style={{fontFamily:'Droid Sans'}}>{": The home of art .."}</a>
        <br></br>  
        </div>
        </div>
    )
}
export default MainPage;