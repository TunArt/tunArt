import React from 'react'
import ChatRoom from './ChatRoom'
import Room from './room'
import styles from "src/styles/SideBar.module.css";
import style from "src/styles/bid.module.css"
import Detail from './Detail';
import { useRouter } from 'next/router'

interface DetailProps {
    id: number,
    title: string,
    href: string,
    img: string,
    date: string,
    datetime: string,
    category: any,
    author:any
    post?:any
  }
const Bid: React.FC <DetailProps>= (props:DetailProps) => {
    const router=useRouter()
    console.log(router.query.img,"test");
    const detailProps =  { ...router.query, ...props };
    return (
        <div>
       
            <div >
                <ChatRoom />
            </div>
            
           
            
            <div>
            <Detail  {...detailProps} />

            </div>
        </div>
    )
}

export default Bid