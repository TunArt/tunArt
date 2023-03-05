import { useState} from "react";
import axios from 'axios';
import Image from "next/image";
interface EventData {
  localName: string;
  date: string;
  // add other properties as needed
}
interface EventProps {
  events: EventData[];
}
import {useNavigate } from 'react-router-dom'
import styles from "../../styles/Event.module.css";
import { Button } from 'antd';
import { useRouter } from 'next/router';
import Link from "next/link";
import { query } from "express";


export async function getServerSideProps(){
  const options = {
    method: 'GET',
    url: 'https://public-holiday.p.rapidapi.com/2019/US',
    headers: {
      'X-RapidAPI-Key': 'afc281dbdemsh0b409a71d0c331cp1688c6jsnb45ac18297a0',
      'X-RapidAPI-Host': 'public-holiday.p.rapidapi.com'
    }
  };
  
  const res = await axios.request(options);
  const events = res.data as [];

  return {
    props:{
      events
    }
  };
}


function Event({ events }:any) {
  const router = useRouter();
  const handleClick = async (i: number, data:any) => {

    router.push({
      pathname:`/event/${i}`,
      query:data,
    })
  }

  return (
    <div className={styles.bg}>
    <section className={styles.section}>
      <div className={styles.leftBox}>

        {events?.map((data:any, i: number) => (

          <div key={i} className={styles.content}>
            <h1>{data.localName}</h1>
            <h3>{data.date}</h3>
            <Button onClick={() => handleClick(i, data)}>more details...</Button>
          </div>
        ))}
      </div>
    </section>
      </div>
  );
}

export default Event;
