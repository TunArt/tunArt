import QRCode from "react-qr-code";
import NavBar from '../../components/navBar'
import styles from "../../styles/qr.module.css"
import swipes from "../../styles/swiper.module.css"
import Link from "next/link";




function App(){

    return (
        <div>
<NavBar/>
        <div className={styles.app}>

            <h1 className={styles.title}> Scan your Code <br />to check in.</h1>
            <QRCode className={styles.qr} value="Welcome to our art gallery, Explore our collection and be inspired by the beauty and imagination that surrounds you.
            this invitation is delivered to Mr/Mme " />
        
        {/* <img className={styles.img1} src="https://d1gotx1r5o7hbd.cloudfront.net/42d7baea65bda709709bb1f1ed60e886.png" alt="" /> */}
        <img className={styles.img1} src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios15-iphone12-pro-camera-scan-qr-code.png" alt="" />

            <img className={styles.img2} src="/wl1.png"/>
            <img className={styles.img3} src="/learn.png"/>
            
            <div>
            <h2 className={styles.title2}> You're Welcome ! </h2>
            <p>"Thank you for attending our events. <br /> We hope that you and your guests <br /> enjoy the event and have a great time! <br /> We're always striving to make event <br /> planning easier and more enjoyable, <br /> so please don't hesitate to reach <br /> out to us with any feedback <br /> or suggestions for how we can <br /> improve your experience. <br /> Cheers!"</p>
            </div>
        </div>
        <footer>
            <div><img src="/logoPage" alt="" /></div>
            <div>


            <div className={swipes.footer2}>

<div style={{"width":"100%"}}>
      <div >
        <ul>
          <Link href=""><li>HOME</li></Link>
          <li>SERVICES</li>
          <Link href="#aboutUs"><li>ABOUT</li></Link>
          <Link href={"/"}><li>CONTACT</li></Link>
          <br />
        </ul>
         
      </div>
      </div>


</div>




            </div>
        </footer>
        </div>
    )
}
export default App