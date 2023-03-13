import React from 'react'
import { useRouter } from 'next/router';
import {Button} from "antd"
import QRCode from 'qrcode.react';

function MyQRCode(props:any) {
  const { value } = props;

  return (
    <QRCode value={value} />
  );
}
interface contextType {
  [key: string]: string
}

function Event() {
  const router = useRouter()
console.log(router)
  function getProps() {
    const {
      query: { title, image, description }
    } = router
    console.log()

    const test = {
      title, image, description 
    }

    return test
  }

  const { title, image, description } = getProps()
    const value= { title, image, description  }
const qrValue='https://example.com'
  return (
    <div className="flex flex-row items-center justify-center">
    <img className="w-2/3 mr-8 rounded-md shadow-md" src={image} alt={title} />
    <div>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-lg leading-relaxed mb-8">{description}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md shadow-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Apply Now
      </button>
    </div>
  </div>
  

  )
}

export default Event
