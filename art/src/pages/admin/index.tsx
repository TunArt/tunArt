import React,{useState} from "react";
import  'material-icons/iconfont/material-icons.css';
import styles from "src/styles/SideBar.module.css";
import Link from "next/link";
import ChartBar from "./chartBar";


import { useRouter } from "next/router";
import BubbleChart from "./BubbleChart";
import Cust from "./Cust";
import Analytic from "./Analytic";
import Image from "next/Image";
const SideBar :React.FC=()=>{
  const route=useRouter()
  console.log("mmmmmmmmmmm",route);
  
  const drawerWidth=240
const[view,setView]=useState("")
  const changeView=(option:string)=>{
    setView(option)
  }
  const renderView=()=>{
    if(view==="chart"){
      return <BubbleChart/>
    }
    else if(view==="table"){
      return <Cust/>
    }
    else if(view==="analytic"){
      return <Analytic/>
    }
    
  }





  // const userHere=()=>{
  //   if (typeof window !== 'undefined') {
  //     console.log(route.query.id)
  //   if(!route.query.id){
  //     route.push({
  //       pathname:"/404"
  //     })
  //   }
  // }
  // }
  // userHere()
  const userHere=()=>{
    if (typeof window !== 'undefined') {
      console.log(route.query.id)
    if(!route.query.id){
      route.push({
        pathname:"/404"
      })
    }
  }
  }
  userHere()
  return(
    
    <div className={styles.sideBar}>
  <div className={styles.container}>
    <aside className={styles.aside}>
      <div className={styles.top}>
        <div className={styles.logo}>


          <Image src="/admin.png" width={500} height={500} alt='/logo.png'/>
        </div>
        {/* <div className={styles.close} id="close-btn">
          <span  className="material-icons-sharp">close</span>
        </div> */}
      </div>

      <div className={styles.Bar}>
      <div  className={styles.link}> 
        <span className="material-icons-sharp">grid_view</span>
      <h3 className={styles.h3} onClick={()=>changeView("chart")}>Dashboard</h3>
        </div>
        <div  className={styles.link}> 
        <span className="material-icons-sharp" >person_outline</span>
      <h3 onClick={()=>changeView("table")}>Customers</h3>
      </div>
      <div  className={styles.link}> 
        <span className="material-icons-sharp">receipt_long</span>
      <h3>orders</h3>
      </div>
        <div  className={styles.link}> 
        <span className="material-icons-sharp">insights</span>
      <h3 onClick={()=>changeView("analytic")}>Analytics</h3>
      </div>
    <div  className={styles.link} onClick={()=>{
      route.push({
        pathname:"/admin/Requests"
      })
    }} > 
        <span className="material-icons-sharp">mail_outline</span>
      <h3 >Requests</h3>
      <span className={styles.message_count}>26</span>
      </div>
        <div  className={styles.link}> 
        <span className="material-icons-sharp">inventory</span>
      <h3>Products</h3>
      </div>
        <div  className={styles.link}> 
        <span className="material-icons-sharp">report_gmailerrorred</span>
      <h3>Reports</h3>
      </div>
        <div  className={styles.link}> 
        <span className="material-icons-sharp">settings</span>
      <h3>Settings</h3>
      </div>
        <div  className={styles.link}> 
        <span className="material-icons-sharp">add</span>
      <h3>Add Product</h3>
      </div>
        <div  className={styles.link}>  
        <span className="material-icons-sharp">logout</span>
      <h3>Logout</h3>
      </div>
      </div>
    </aside>
    <div>{renderView()}</div> 
  </div>
    </div>
  )
}

export default SideBar