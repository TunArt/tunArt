import React from 'react'
import { useRouter } from 'next/router';
import { Button } from "antd"
import QRCode from 'qrcode.react';
import axios from 'axios';


interface EventProps {
  title: string;
  image: string;
  description: string;
  prix: string;
}

function Event() {
  const router = useRouter()
  console.log(router)
  
  const seller = async (prix: string) => {
    let x=parseInt(prix)*1000
    console.log(x);
    
    try {
      const res = await axios.post('http://localhost:3000/api/payments/pay', {
        url: "http://localhost:3002/event/qrGen",
        amount:x,
      })
      router.push({ pathname: res.data.result.link })
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }
  function getProps(): EventProps {
    const {
      query: { title, image, description, prix }
    } = router

    return {
      title: typeof title === "string" ? title : "",
      image: typeof image === "string" ? image : "",
      description: typeof description === "string" ? description : "",
      prix: typeof prix === "string" ? prix : ""
    }
  }

  const { title, image, description, prix } = getProps()
  const value = { title, image, description, prix }
console.log(router.query)
  return (
    <div className="flex flex-row items-center justify-center">
      <img className="w-2/3 mr-8 rounded-md shadow-md" src={image} alt={title} />
      <div>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-lg leading-relaxed mb-8">{description}</p>
        <p className="text-lg leading-relaxed mb-8">price :  {prix} DT</p>
        <button onClick={() => {
          seller(prix)
        }}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md shadow-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Apply Now
        </button>
      </div>
    </div>
  )
}

export default Event
