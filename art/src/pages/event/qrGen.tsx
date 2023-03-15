import QRCode from "react-qr-code";
import NavBar from '../../components/navBar'
import styles from "../../styles/qr.module.css"
import swipes from "../../styles/swiper.module.css"
import Link from "next/link";
import axios from "axios";

import react, { useEffect, useState } from "react";





function App(){
    const [fullName, setFullName] = useState<string>("");
    const [user, setUser] =useState<{ [key: string]: string[] }>({});



    useEffect(()=>{
        axios.get(`http://localhost:3000/api/users/getUser/${localStorage.getItem("email")}`)
        .then(res=>{
            if (res.data==""){
                axios.get(`http://localhost:3000/api/artists/getArtist/${localStorage.getItem("email")}`)
                .then(res=>{setUser(res.data)})
                .catch(err=>console.log(err))
            }
            else {setUser(res.data)}

        })
        .catch(err=>console.log(err)
        )
    },[])
console.log("good morning", user.name||user.userName);
    return (
        <div>
<NavBar/>
        <div className={styles.app}>
        {/* value="Welcome to our art gallery, Explore our collection and be inspired by the beauty and imagination that surrounds you.this invitation is delivered to Mr/Mme " */}

            <h1 className={styles.title}> Scan your Code <br />to check in.</h1>
            <QRCode className={styles.qr} value={`Dear ${user.name || user.userName},  You are cordially invited to attend our showcase. Come and enjoy a night of stunning artwork from around the world. We hope to see you there!`} />
        
        {/* <img className={styles.img1} src="https://d1gotx1r5o7hbd.cloudfront.net/42d7baea65bda709709bb1f1ed60e886.png" alt="" /> */}
        <img className={styles.img1} src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios15-iphone12-pro-camera-scan-qr-code.png" alt="" />

            <img className={styles.img2} src="/wl1.png"/>
            {/* <img className={styles.img3} src="/learn.png"/> */}
            
            <div>
            <h2 className={styles.title2}> You're Welcome ! </h2>
            <p style={{"color":"white"}}>"Thank you for attending our events. <br /> We hope that you and your guests <br /> enjoy the event and have a great time! <br /> We're always striving to make event <br /> planning easier and more enjoyable, <br /> so please don't hesitate to reach <br /> out to us with any feedback <br /> or suggestions for how we can <br /> improve your experience. <br /> Cheers!"</p>
            </div>
        </div>


    <footer className={styles.footer}>
        <ul className={styles.navfooter}>
          <li><Link href="">HOME</Link></li>
          <li>SERVICES</li>
          <li><Link href="#aboutUs">ABOUT</Link></li>
          <li><Link href={"/"}>CONTACT</Link></li>
        </ul>
   </footer>
        </div>
    )
}
export default App