import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Allrequests from './requests/Allrequests.jsx';

  
function Requests() {
  const [render,setRender]=useState(false)
  const [artWorks, setartWorks] = useState([])
    useEffect(()=>{
     axios.get("http://localhost:3000/api/artworks/notVArtWorks").then((res)=>{
        setartWorks(res?.data)
      });
      
    },[render])
  return (
    <div>
        {artWorks?.map((e,i)=>{
            return <Allrequests key={i} e={e} setRender={setRender} render={render} />
        })}
    </div>
  )
}

export default Requests