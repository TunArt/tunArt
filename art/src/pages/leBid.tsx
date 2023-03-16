import React, {  useEffect, useState } from 'react'
import io, { Socket } from "socket.io-client";

const socket: Socket = io("http://localhost:3001");


 const LeBid = () => {

  const [pass, setPass] = useState("")
  socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  })
  useEffect(()=> {

    
    socket.on("recieve",(res: string) => {console.log('from server',res)})
    },[])
    const send = (param: string) => {
        socket.emit("send", param)
    }
  return (
    <div>
        <input type="text" onChange={(e)=> setPass(e.target.value)} />
        <button onClick={()=> {send(pass)}} >pass</button>
    </div>
  )
}

export default LeBid