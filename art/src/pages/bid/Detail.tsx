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
    <div className={styles.detail}>
        <img className={styles.img1} src={props.img}  />
      
       </div>
  )
}

export default Detail;