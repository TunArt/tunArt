import React from 'react'
import { useRouter } from 'next/router'
import ImageZoom from './ImageZoom';
import styles from "src/styles/bid.module.css"
import { url } from 'inspector';
interface DetailProps {
  name: string,
  startDate: Date,
  endDate: Date,
  creationDate: Date,
  price: number,
  rating: number,
  description: string,
  auction: boolean,
  image: string,
}

const Detail :React.FC<DetailProps>= (props:any) => {
  // console.log('props',props)
    const router=useRouter()
    // console.log(router.query.img,"test");
    
  return (
    <div className={styles.div}>
    <div className={styles.detail}>
        {/* <img className={styles.img1} src={props.img}  /> */}
        <div  className={styles.img1}> 
          <ImageZoom
        src={JSON.parse (props.image)[0].length===1 ? JSON.parse (props.image) :JSON.parse (props.image)[0]}
        alt="img"
      /></div>
       
        {/* <div className={styles.info}>
          <div className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100">{props.title}</div>
        </div> */}
       </div>
       </div>
  )
}

export default Detail;