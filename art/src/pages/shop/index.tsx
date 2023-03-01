import React from 'react'
import axios from 'axios';
export async function getServerSideProps(){
    const options = {
        method: 'GET',
        url: 'https://community-etsy.p.rapidapi.com/listings/active',
        params: {api_key: 'undefined'},
        headers: {
          'X-RapidAPI-Key': 'afc281dbdemsh0b409a71d0c331cp1688c6jsnb45ac18297a0',
          'X-RapidAPI-Host': 'community-etsy.p.rapidapi.com'
        }
      };
      
const res = await axios.request(options);
  const events = res.data ;
  console.log(events)

  return {
    props:{
      events
    }
  }
}

function Shop() {
    
  return (
    <div></div>
  )
}

export default Shop