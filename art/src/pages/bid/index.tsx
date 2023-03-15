import { useState,useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import NavBar from '../../components/navBar'
import Link from 'next/link'
import Room from './room'
import Footer from '../MainPage/footer/footer'
import styles from "../../styles/principale.module.css"


export async function getServerSideProps() {
  const res=await fetch("http://localhost:3000/api/artworks/getAllVerified")
 const data=await res.json()
 console
  return {
    props: {data}, 
  }
};

const Bids: React.FC = (props) => {

  
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
    <div className="bg-black">
      <NavBar />
      <h1 className=" text-center py-10">Welcome to the bid room</h1>
      <div className=" mx-auto max-w-7xl grid grid-cols-1 gap-y-7 gap-x-10 py-10 sm:mt-0 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {props.data.map((post, index) => (
          <Room key={post.id} post={post} index={index} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Bids;