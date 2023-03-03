import React from 'react'
import styles from "../../styles/Allreq.module.css"
import Image from 'next/image'
import { Button } from 'antd'
import axios from 'axios'
interface Props {
  image: string;
  artistId: number;
  createdAt: string;
  description: string;
  id: number;
  name: string;
  price: number;
}
interface AllRequestsProps {
  e: Props;
  setRender: React.Dispatch<React.SetStateAction<boolean>>;
  render: boolean;
}

function Allrequests({ e, setRender, render }: AllRequestsProps) {
  const accept = () => {
    try {
      console.log('yo');
      const res =  axios.put(`http://localhost:3000/api/artworks/acceptsTheArtWork/${e.id}`, {
        verified: true 
      });
      console.log("hi");
      console.log(res);
      setRender(!render);

    } catch (error) {
      console.log(error);
    }
  }
  
  
  return (
    <div className={styles.allRcontainer}>
      <div className={styles.allR}>
        <div className={styles.image}>
          <img src={e.image} alt="failed" />
        </div>
        <div className={styles.name}>

          <h1>{e.name}</h1>
        </div>
        <div className={styles.price}>
          <h3>{e.price} </h3>
        </div>
        <div className={styles.buttons}>
          <Button type="primary" onClick={()=>{
            accept()
          }}>Accept</Button>
          <Button danger>Refuse</Button>
        </div>
      </div>
    </div>
  )
}

export default Allrequests

