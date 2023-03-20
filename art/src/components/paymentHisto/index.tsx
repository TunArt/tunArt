import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import styles from "../../styles/paymentH.module.css"
interface props{
  id:number,
  user:string
}
function Histo({id,user}:props) {
  const route=useRouter()
 const [data,setdata] =useState([])
    console.log(id)
    console.log(user)
    useEffect(()=>{
      user ?
      axios.get(`http://localhost:3000/api/route/getAll/${id}`)
        .then((res) => {
          console.log("from backet user", res.data)
          setdata(res.data.products)
        })
        .catch((err) => {
          route.push({ pathname: '/404' })
        }) :
      axios.get(`http://localhost:3000/api/artistb/artistBought/${id}`)
        .then((res) => {
          console.log("from backet artist", res.data.products)
          setdata(res.data.products)
        })
  
    },[])
const paymentData=data.filter((e)=>{  console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',e) 
return  (e.artistproducts.state) ==="succes"})
console.log(paymentData)
  return (
    <div className={styles.paymentcontainer}>
  {paymentData.map((e,i)=>{
    return (
      <div className={styles.paymentitem} key={i}>
        <img src={(JSON.parse(e?.picture)[0])} alt="" />
        <h2>{e.brand}</h2>
        <p>{e.price}</p>
        <button className={styles.button} onClick={()=>{
          route.push({ pathname: `/shop/${e.id}`, query: e });

        }}>Review it</button>
      </div>
    )
  })}
</div>
  )
}

export default Histo