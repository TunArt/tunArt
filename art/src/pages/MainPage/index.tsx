import React,{useEffect,useState} from "react";
import NavBar from "../../components/navBar";
import { navLinks } from "./link";
import Link from "next/link";
import styles from "../../styles/principale.module.css"
import Search from "./search";
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
    return(
        <div className={styles.all}>  
    <div>
            <NavBar />
        <h1> {artists?.userName}</h1>
        <p>this is a test for the main page.</p>
        <p>never maind this</p>
        <p>don't look focus at this please !</p>
        <p>why are you still looking at these meaningless lines !!</p>
        <p>stop it!</p>
        <p>now !!</p>
    </div>
        </div>
    )
}
export default MainPage;