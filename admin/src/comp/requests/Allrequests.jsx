import React from 'react'
import { Button } from 'antd'
import axios from 'axios'

function Allrequests({ e, setRender, render }) {
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
    <div >
      
      <div >
        <div >
          <img src={e.image} alt="failed" />
        </div>
        <div >

          <h1>{e.name}</h1>
        </div>
        <div>
          <h3>{e.price} </h3>
        </div>
        <div >
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

