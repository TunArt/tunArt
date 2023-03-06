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
  }
const Bid: React.FC <DetailProps>= (props) => {
    const router=useRouter()
    console.log(router.query.img,"test");
    return (
        <div>
       
            <div >
                <ChatRoom />
            </div>
            
           
            
            <div>
            <Detail post={router.query}/>

            </div>
        </div>
    )
}

export default Bid