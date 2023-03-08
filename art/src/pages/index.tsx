import Head from "next/head";
import { Button } from "antd";
import { useState, useEffect } from 'react'
import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "src/styles/Home.module.css";
import swipes from "src/styles/swiper.module.css"
import SinUp from './sinUp'
import Image from "next/image";
import Login from './login';
import axios from 'axios';
import {useRouter} from "next/router"
interface Props { }

import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const inter = Inter({ subsets: ["latin"] });
const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
  { id: 2, name: 'Assets under holding', value: '$119 Billion' },
  { id: 3, name: 'New users annually', value: '46,000' },
]


const Home: React.FC<Props> = () => {
  const route=useRouter()
  const [popUp, setPopUp] = useState(false);
  const [popUpLogin, setPopUpLogin] = useState(false);
  
  const isuserHere=()=>{
    if(localStorage.id ){
      console.log(localStorage.id)
    route.push({
      pathname: '/MainPage',
      query: { "id": localStorage.id, type: true },
    })
    }
  }
  
  const togglePopup = () => {
    setPopUp(!popUp);
    setPopUpLogin(false)
  };
  const togglePopupLogin = () => {
    setPopUpLogin(!popUpLogin);
    setPopUp(false)
  };

  useEffect(() => {
    isuserHere()
    import('swiper').then((Swiper) => {
      new Swiper.default('.swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    });
  }, []);


  return (
    <div>
      <Head>

        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
      </Head>
      <div className={styles.test} >
        <main id={styles.body}>
          <div id={styles.main}>
            <div id={styles.box1}></div>
            <div id={styles.box2}>
              <div id={styles.text}>
                ART is the <br />work of God
              </div>
            </div>
          </div>
          <div id={styles.box3}>
            <div id={styles.container}>
              <div id={styles.logo}>
                
              </div>
              <div id={styles.menu}>
                <ul>
                  <Link href=""><li>HOME</li></Link>
                  <li>SERVICES</li>
                  <Link href="#aboutUs"><li>ABOUT</li></Link>
                  <Link href={"/"}><li>CONTACT</li></Link>
                </ul>
                  <button className={styles.btn} onClick={togglePopupLogin} >login</button>
                  <button onClick={togglePopup} className={styles.btn}  >signup</button>
              </div>
            </div>
          </div>
          {popUpLogin && <div className="overlay" ><Login /></div>}
          {popUp && <div className="overlay"><SinUp /></div>}


        </main>

        <div>


        </div>

        <div className={styles.info}>
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

        </div>

      </div>

      <div>
        <div className={swipes.swiperContainer}>
          <div className={swipes.swiperWrapper}>
            <div className={swipes.swiperSlide}></div>
            <div className={swipes.swiperSlide}> </div>
            <div className={swipes.swiperSlide}> </div>
            <div className={swipes.swiperSlide}> </div>
            <div className={swipes.swiperSlide}> </div>
            <div className={swipes.swiperSlide}> </div>
            <div className={swipes.swiperSlide}> </div>
            <div className={swipes.swiperSlide}> </div>
          </div>
        </div>


<div id="aboutUs">
  <div className={swipes.test}>
  
   <div className={swipes.text}> <h1>Join in, it’s free.</h1> <p> Welcome to our art website! We showcase 
    talented artists from around the world, featuring a
     diverse range of art styles and mediums. Our carefully selected 
     artists are both emerging and established, and our website provides 
     a convenient platform for purchasing art with secure transactions and 
     worldwide shipping available. Enjoy exploring our collection and discovering new artists and works that inspire you!</p></div> 
 <div className={swipes.test} >
<div className={swipes.image}></div>
  </div>
 
</div>
</div>  

<div className={swipes.test}>
<div className={swipes.image2}></div>
 <div className={swipes.textx}> <h1>Check our shop.</h1> <p>Explore our shop's carefully curated selection of unique and high-quality products sourced from independent artists and designers around the world. From handmade ceramics to sustainable fashion, we offer a diverse range of items that embody our passion for creativity and innovation. Shop with us and support a community of creatives who are pushing the boundaries of their craft. Start browsing now and discover the beautiful and unique products waiting for you!</p></div> 
 <div className={swipes.test} >

          </div>

        </div>

<div className={swipes.test}>
  
 <div className={swipes.text}> <h1>Stay tuned for our weekly AUCTIONS.</h1> <p> Join our weekly auctions for a chance to bid on unique and rare items handpicked by our experts from around the world. Our auctions offer something for everyone, from experienced collectors to beginners. Don't miss out on the opportunity to add something special to your collection with our easy-to-use bidding platform. Stay tuned for our upcoming auctions and discover the treasures that await you!</p></div> 
 <div className={swipes.test} >
<div className={swipes.image3}></div>
 </div>
</div>

        <div className={swipes.test}>
          <div className={swipes.textxx}> <h1>"Art is not just a product, it's a journey of self-expression and exploration."</h1> </div>
        </div>

      </div>
      <div className={swipes.test2}> </div>
    </div>
    
  );
}

export default Home;
