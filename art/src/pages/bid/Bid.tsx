import React from 'react'
import ChatRoom from './ChatRoom'
import Room from './room'
import style from "src/styles/bid.module.css"
import Detail from './Detail';
import { useRouter } from 'next/router'
import Navbar from '../../components/navBar'
import Bidding from './Biddinig';
import Detailimg from './detailimg';

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
    // console.log(router.query.img,"test");
    const detailProps =  { ...router.query, ...props };
    // console.log("propsss",props);
    
    return (
        <div>
       <Navbar/>
            <div className={style.div1}>
                <div className={style.div2}>
            <Detail  {...detailProps} />
             <Bidding/>

                </div>
                <div className={style.div3}>
                    <Detailimg  {...detailProps} />
                </div>
                <ChatRoom item={props}/>
            </div>
            
        </div>
    )
}

export default Bid