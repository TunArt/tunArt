import { useState,useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import NavBar from '../../components/navBar'
import Link from 'next/link'
import Room from './room'
import Footer from '../MainPage/footer/footer'
import styles from "../../styles/principale.module.css"
import { useRouter } from 'next/router';

export async function getServerSideProps() {
  const res=await fetch("http://localhost:3000/api/artworks/getAllVerified")
 const data=await res.json()
 console
  return {
    props: {data}, 
  }
};

const Bids: React.FC = (props) => {
  const route=useRouter() 
  
  useEffect(() => {
    const h1 = document.querySelector("h1");
    if (h1) {
      h1.classList.add("animate-pulse", "text-4xl", "font-bold", "text-yellow-600");
    }
  }, []);

    // your posts data here
console.log('pg',props.data)
console.log(typeof(props));

  return (
    // <div className="bg-black">
    //   <NavBar />
    //   <h1 className=" text-center py-10">Welcome to the bid room</h1>
    //   <div className=" mx-auto max-w-7xl grid grid-cols-1 gap-y-7 gap-x-10 py-10 sm:mt-0 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    //     {props.data.map((post, index) => (
    //       <Room key={post.id} post={post} index={index} />
    //     ))}
    //   </div>
    //   <Footer/>
    // </div>
    <>
    <NavBar/>
    <div className="min-h-screen bg-black-100 py-8">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
    {/* <h1 className="text-4xl font-bold text-orange-600 mb-8 mt-10 text-center transition duration-500 ease-in-out transform hover:text-blue-600">
  Welcome to Our Events
</h1> */}


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {props.data.map((post) => (
                <div key={post.title} className="bg-white shadow overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    <img
                        className="w-full h-48 object-cover"
                        src={post.image}    
                        alt={post.title}
                    />

                    <div className="px-6 py-4">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            {post.price}dt
                        </h3>
                        {/* <p className="text-gray-700 text-base" >{trimText(post.description, 100)} <a href="#" className="text-blue-600 hover:underline" onClick={()=>{
                            route.push({
                                pathname:`event/${post.id}`,
                                query:post
                            })
                        }}>Read More</a></p> */}
                        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"  onClick={()=>{
       ;route.push({ query: post,pathname:"/bid/Bid"})}}>
       Join Room
     </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>
</>
  );
};

export default Bids;