import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
const PaymentSuccess: React.FC = () => {
   const [show,Setshow]= useState(false)
    const route=useRouter() 
    const {payment_id}=route.query
    const [user, setuser] = useState(false)
    const [data,setdata]=useState([])
  useEffect(() => {
    axios.get(`/api/users/getUser/${localStorage.email}`)
      .then((res) => {
        setuser(true)

      }).catch((err) => {
        setuser(false)
      })
    user ?
      axios.get(`http://localhost:3000/api/route/getAll/${localStorage.id}`)
        .then((res) => {
          console.log("from payment user", res.data)
          setdata(res.data.products)
        })
        .catch((err) => {
          route.push({ pathname: '/404' })
        }) :
      axios.get(`http://localhost:3000/api/artistb/artistBought/${localStorage.id}`)
        .then((res) => {
          console.log("from payment artist", res.data.products)
          setdata(res.data.products)
        })
  }, [])

    useEffect(()=>{
      console.log(payment_id)
        axios.post(`http://localhost:3000/api/payments/verif/${payment_id}`)
        .then((res)=>{
            console.log(res.data)
            if(res.data.result.status === "SUCCESS") {
              data.map((e,i)=>{
                axios.put(`http://localhost:3000/api/artistb/productUpDate/${e.id}`,{
                  state:"succes"
                }).then((res)=>{
                  console.log(res)
                })
              })
              Setshow(true) 
            }
            else  {
              data.map((e,i)=>{
                axios.put(`http://localhost:3000/api/artistb/productUpDate/${e.id}`,{
                  state:"failed"
                }).then((res)=>{
                  console.log(res)
                })
              })
              Setshow(false)
            }
        })
    },[payment_id])
  return (
    <>
    { show && <div className="bg-gray-100 h-screen">
        <div className="bg-white p-6  md:mx-auto">
          <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path>
          </svg>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
            <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
            <p> Have a great day! </p>
            <div className="py-10 text-center">
              <a href="/shop" className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                GO BACK
              </a>
            </div>
          </div>
        </div>
      </div>
    }
    {!show && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong className="font-bold">Payment failed!</strong>
  <span className="block sm:inline">There was an error processing your payment. Please try again later.</span>
  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <title>Close</title>
      <path d="M14.348 5.652a.999.999 0 1 0-1.414 1.414L11.414 9l-1.293 1.293a.999.999 0 1 0 1.414 1.414L12.414 10l1.293 1.293a.999.999 0 1 0 1.414-1.414L13.414 9l1.293-1.293a.999.999 0 0 0 0-1.414z"/>
    </svg>
  </span>
</div>
}
  </>
  );
};

export default PaymentSuccess;
