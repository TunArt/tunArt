import Footer from "../MainPage/footer/footer";
import styles from "../../styles/principale.module.css";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/navBar";
import axios from "axios";
import Image from "next/image";
import Bucket from "src/components/backet/backet";
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
  const [firstPic, setFirstPic] = useState<string>("[]");
  const handleProductClick = (item: Product) => {
    router.push({
      pathname: `shop/${item.id}`,
      query: { items: JSON.stringify(item) },
    });
  };
useEffect(()=>{
  setCurrentUserId(window.localStorage.id)
},[])

  console.log(firstPic)
  return (
    <>

     <div className="sticky top-0 z-50">
<Navbar id={currentUsrId} showCart={showCart} setShowcart={setShowcart} />
{showCart && <Bucket id={currentUsrId} setShowcart={setShowcart} />}
</div>
<div className="bg-black">
  <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 className="sr-only">Products</h2>


    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {items.map((item) => {
        console.log(item.picture)
        console.log('item',item);
        
        return (
          <div key={item.id} className="bg-black">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              {item.quantity && <img
                width={500}
                height={500}
                onClick={() => handleProductClick(item)}
                src={JSON.parse(item.picture)[0]} 
                {console.warn(xhr.responseText)}
                alt={item.name}
                className="h-full w-full object-cover object-center transition duration-500 ease-in-out transform hover:scale-105 group-hover:opacity-75"
              />}
{!item.quantity &&  <div>
            <div className={styles.product}>
            <img
                width={500}
                height={500}
                onClick={() => handleProductClick(item)}
                src={JSON.parse(item.picture)[0]}
                alt={item.name}
                className="h-full w-full object-cover object-center transition duration-500 ease-in-out transform hover:scale-105 group-hover:opacity-75"
              />
  <div className={styles.productoverlay}>
    <div className={styles.outofstock}>Out of stock</div>
  </div>
</div>

              
            </div>}
            
             
            </div>
      
            <h3 className="mt-4 text-sm text-gray-700 text-orange-500">{item.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900 text-orange-500">{item.price}</p>
          </div>
          

        )
      })}
    </div>
  </div>
</div>
<Footer/>
</>
  );
}
