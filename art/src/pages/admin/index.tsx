import React,{useState} from "react";
import  'material-icons/iconfont/material-icons.css';
import styles from "src/styles/SideBar.module.css";
import Link from "next/link";
import ChartBar from "./chartBar";
import Image from "next/Image";
const SideBar :React.FC=()=>{
  const drawerWidth=240
const[view,setView]=useState("")
  const changeView=(option:string)=>{
    setView(option)
  }
  const renderView=()=>{
    if(view==="chart"){
      return <ChartBar/>
    }
    
  }
  return(
    <div className={styles.sideBar}>
  <div className={styles.container}>
    <aside className={styles.aside}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <Image src="/logo.png" width={500} height={500} alt='/logo.png'/>
        </div>
        <div className={styles.close} id="close-btn">
          <span  className="material-icons-sharp">close</span>
        </div>
      </div>

      <div className={styles.Bar}>
        <Link href="/admin/chartBar" className={styles.link}> 
        <span className="material-icons-sharp">grid_view</span>
      <h3 className={styles.h3} onClick={()=>changeView("chart")}>Dashboard</h3>
        </Link>
        <Link href="/" className={styles.link}> 
        <span className="material-icons-sharp">person_outline</span>
      <h3>Customers</h3>
        </Link>
        <Link href="/" className={styles.link}> 
        <span className="material-icons-sharp">receipt_long</span>
      <h3>orders</h3>
        </Link>
        <Link href="/" className={styles.link}> 
        <span className="material-icons-sharp">insights</span>
      <h3>Analytics</h3>
        </Link>
        <Link href="/admin/Requests" className={styles.link}> 
        <span className="material-icons-sharp">mail_outline</span>
      <h3>Requests</h3>
      <span className={styles.message_count}>26</span>
        </Link>
        <Link href="/" className={styles.link}> 
        <span className="material-icons-sharp">inventory</span>
      <h3>Products</h3>
        </Link>
        <Link href="/" className={styles.link}> 
        <span className="material-icons-sharp">report_gmailerrorred</span>
      <h3>Reports</h3>
        </Link>
        <Link href="/" className={styles.link}> 
        <span className="material-icons-sharp">settings</span>
      <h3>Settings</h3>
        </Link>
        <Link href="/" className={styles.link}> 
        <span className="material-icons-sharp">add</span>
      <h3>Add Product</h3>
        </Link>
        <Link href="/" className={styles.link}> 
        <span className="material-icons-sharp">logout</span>
      <h3>Logout</h3>
        </Link>
      </div>
    </aside>
  </div>
    </div>
  )
}

export default SideBar