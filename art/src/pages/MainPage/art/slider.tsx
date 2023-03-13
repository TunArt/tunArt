import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "../../../styles/principale.module.css";
import TopRated from "./topRated";
import axios from "axios";
import sss from "../../../styles/sliderCss.css";


let productsp = [
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
}
];

var $ = require("jquery");
if (typeof window !== "undefined") {
window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const Slider = () => {

    const[top,setTop]=useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3000/api/artworks/getTopArtworks/`)
        .then(response => {
            console.log(response.data);
        setTop(response.data)
        })
    },[])
    

const options = {
margin: 30,
responsiveClass: true,
nav: true,
dots: true,
autoplay: true,
smartSpeed: 1000,
navClass: ["owl-prev", "owl-next"],
navText: [
'',
'',
],
responsive: {
0: {
items: 0,
    },
    400: {
        items: 0,
            },
1000: {
items: 1,
}
},
};

return (
<div >
<div>
<h3 >
</h3>
<ul >
<OwlCarousel
className="owl-theme"
loop
margin={0}
nav={true}
navText={[
'<img src="/images/Arrow_left.png" />',
'<img src="/images/Arrow_right.png" />',
]}
dots={true}
animateIn={true}
{...options}
>
{top && top.length > 0
? <div className={styles.cols}>
{top.map((ele,index)=>(
    <div className={styles.col} key={index}>
    <TopRated ele={ele}/>
    </div>
))}  
</div> 
: ""}
</OwlCarousel>
</ul>
</div>
</div>
);
};
export default Slider;
        