import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Allrequests from '../../components/requests/Allrequests';
interface EventData {
    localName: string;
    date: string;
    // add other properties as needed
  }
  interface EventProps {
    events: EventData[];
  }
  
function Requests() {
  const [render,setRender]=useState(false)
  const [artWorks, setartWorks] = useState([])
    useEffect(()=>{
     axios.get("http://localhost:3000/api/artworks/notVArtWorks").then((res)=>{
        setartWorks(res?.data as [])
      });
      
    },[render])
  return (
    <div>
        {artWorks?.map((e:any,i:number)=>{
            return <Allrequests key={i} e={e} setRender={setRender} render={render} />
        })}
    </div>
  )
}

export default Requests