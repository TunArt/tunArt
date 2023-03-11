import React from 'react'
import { useRouter } from 'next/router'

import styles from "src/styles/bid.module.css"
import { url } from 'inspector';
interface DetailProps {
  id: number,
  title: string,
  href: string,
  img: string,
  date: string,
  datetime: string,
  category: any,
  author:any
}

const Detail :React.FC<DetailProps>= (props:any) => {
  console.log('props',props)
    const router=useRouter()
    console.log(router.query.img,"test");
    
  return (
    <div className={styles.div}>
    <div className={styles.detail}>
        <img className={styles.img1} src={props.img}  />
        <div className={styles.info}>
          <div className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100">{props.title}</div>
        </div>
       </div>
       </div>
  )
}

export default Detail;