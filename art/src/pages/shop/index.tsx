import Footer from "../MainPage/footer/footer";
import styles from "../../styles/principale.module.css";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/navBar";
import axios from "axios";
import Image from "next/image";
import Bucket from "src/components/backet/backet";
import { json } from "sequelize";
interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  comments: string;
  price: number;
  quantity: number;
  brand: string;
  picture: any;
}

interface ProductList {
  items: Product[];
}

export async function getServerSideProps() {
  try {
    const res = await axios.get("http://localhost:3000/api/products/getProducts");
    const items = res.data as Product[]; // type assertion
    return {
      props: { items },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { items: [] }, // return empty array on error
    };
  }
}

export default function Example({ items }: ProductList) {
  const [showCart,setShowcart]=useState(false)
   const [user, setUser] = useState([])
    const [artists,setArtists]=useState([])
    const [render,setRender]=useState(false); 
    const [currentUsrId,setCurrentUserId]=useState<string>("")
  console.log(items)
  const router = useRouter();
  
  const handleProductClick = (item: Product) => {
    router.push({
      pathname: `shop/${item.id}`,
      query: { items: JSON.stringify(item) },
    });
  };
useEffect(()=>{
  setCurrentUserId(window.localStorage.id)
},[])

  return (
    <>
    {!items && <div> loading....</div>}
    {items && <>     
    <div className="sticky top-0 z-50"> 
<Navbar id={currentUsrId} showCart={showCart} setShowcart={setShowcart} />
{showCart && <Bucket id={currentUsrId} setShowcart={setShowcart} />}

</div> 
<div className="pt-10	 bg-gray-800">
  <h1 className="text-center text-2xl font-bold text-blue-500">All Products</h1>
</div>
<div className="flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-10 justify-center   bg-gray-800 text-white">
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2text-white">
		<svg width={16} height={16} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Start Up</span>
	</a>
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-white">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Tools</span>
	</a>
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-white">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
		</svg>
		<span>Best rated</span>
	</a>
</div>
<div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
{items.map((item,i)=>{
return (

  <section className="py-10 bg-transparent	" key={i} onClick={()=>{
    handleProductClick(item)
  }}>
      <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <a href="#">
        <div className="relative flex items-end overflow-hidden rounded-xl">
          <img src={(JSON.parse(item.picture)[0])} alt="Hotel Photo" />
          <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

            <button className="text-sm">Add to cart</button>
          </div>
        </div>

        <div className="mt-1 p-2">
          <h2 className="text-slate-700">{item.name}</h2>
          <p className="mt-1 text-sm text-slate-400">{item.brand}</p>

          <div className="mt-3 flex items-end justify-between">
              <p className="text-lg font-bold text-blue-500">{item.price}DT</p>

            <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>

              <button className="text-sm">Add to cart</button>
            </div>
          </div>
        </div>
      </a>
    </article>
</section>
)

})}
          </div>
</> }
 




<Footer/>
</>
  );
}
