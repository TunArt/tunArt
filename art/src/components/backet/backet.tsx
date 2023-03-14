import { Fragment } from 'react'
import React,{useState,useEffect}  from  'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import styles from "../../styles/bucket.module.css"
import axios from 'axios'
interface Product {
  name: string
  price: number
  quantity: number
  picture: string
  imageAlt: string
}

interface UserProduct {
  quantityBought: number
}

interface Props {
  item: {
    name: string
  }
  setShowcart: (value: boolean) => void
  id: string
}
const  Bucket=(props:Props)=> {
  const[display,setDesipaly]=useState(false)
  const [data,setdata]=useState([])
  const [reRender,setRerender]=useState(false)
  console.log("props",props)
  const handleDelete= async(x:string,y:string)=>{
    alert("me")
    await axios.delete(`http://localhost:3000/api/route/delete/${x}/${y}`).then((res)=>{
      console.log("hala",res)
      setRerender(!reRender)
    }).catch((err)=>{
      console.log(err)
    })
  }
  let tPrice=0
  const som =(x:number)=>{
    tPrice+=x
  }
  const [open, setOpen] = useState(true)
  useEffect(()=>{
    axios.get(`http://localhost:3000/api/route/getAll/${props.id}`)
    .then((res)=>{
      console.log("from backet",res.data)
      setdata(res.data.products)
    })
  },[reRender])
  const seller = () => {
    data.map( (e, i) => {
       try {
       axios.put(`http://localhost:3000/api/products/soled/${e.id}`, {
          quantity: -(e?.userproducts.quantityBought) + e?.quantity,}).then((res)=>{
            console.log(res);
            handleDelete(e.userproducts.userId, e.userproducts.productId);
          })
      } catch (error) {
        console.error(error);
      }
    });
  };

  return (  
    <div className="z-50">
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => props.setShowcart(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {data.map((product,i) => {
                              {som (product?.price*product.userproducts?.quantityBought)}
                           return    <li key={i} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={(JSON.parse (product?.picture)[0])}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a >{product?.name}</a>
                                      </h3>
                                      <p className="ml-4">{product.price*product.userproducts.quantityBought}</p>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">QuantityBought : {product?.userproducts.quantityBought}</p>

                                    <div className="flex">
                                      <button onClick={()=>{
                                        handleDelete(props.id,product.id)
                                      }}
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
})}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{tPrice}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <button onClick={seller}
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </button>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </div>
  )
}
export default Bucket

