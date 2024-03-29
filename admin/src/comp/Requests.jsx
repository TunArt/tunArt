import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Allrequests from './requests/Allrequests.jsx';
import "../App.css"
  
function Requests() {
  const [render,setRender]=useState(false)
  const [artWorks, setartWorks] = useState([])
    useEffect(()=>{
     axios.get("http://localhost:3000/api/artworks/notVArtWorks").then((res)=>{
      console.log("from admin",res.data)
        setartWorks(res?.data)
      });
      
    },[render])
  return (
    <div className='grid-container'>
      
        {artWorks?.map((e,i)=>{
            return <Allrequests key={i} e={e} setRender={setRender} render={render} />
        })}
    </div>
  )
}

export default Requests