import React from 'react'
import ChatRoom from './ChatRoom'
import Room from './room'
import style from "src/styles/bid.module.css"
import Detail from './Detail';
import { useRouter } from 'next/router'
import Navbar from '../../components/navBar'
import Bidding from './Bidding';
// import Detailimg from './detailimg';
import timeStyle from "../../styles/time.module.css"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Timer from '../../components/Timer.tsx';
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
const Bid: React.FC <DetailProps>= (props:DetailProps) => {
    const router=useRouter()
     console.log(router.query.img,"test");
    const detailProps =  { ...router.query, ...props };
    // console.log("propsss",props);


   
      
    
    return (
        <div>
       <Navbar/>
            <div className={style.div1}>
                <div className={style.div2}>
            {/* <Detail  {...detailProps} /> */}
             {/* <Bidding/> */}

                </div>
                <div className={style.div3}>
                  
                    
                    <div  id={timeStyle.timer}>
                    <Timer />                 </div>

             <div style={{display:"flex"}}> 

                        <div id={style.bidform}><Bidding/></div>

                        <div id={style.price}>

                        </div>
                        
             </div>
                    
                </div>
                <ChatRoom/>
            </div>
            
        </div>
    )
}

export default Bid