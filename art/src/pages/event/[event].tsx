import React from 'react'
import { useRouter } from 'next/router';
import {Button} from "antd"
import QRCode from 'qrcode.react';

function MyQRCode(props:any) {
  const { value } = props;

  return (
    <QRCode value={value} />
  );
}
interface contextType {
  [key: string]: string
}

function Event() {
  const router = useRouter()

  function getProps() {
    const {
      query: { countryCode, date, fixed, global, localName, name, type }
    } = router

    const test = {
      countryCode,
      date,
      fixed, 
      global,
      localName,
      name,
      type
    }

    return test
  }

  const { countryCode,
    date,
    fixed, 
    global,
    localName,
    name,
    type } = getProps()
    const value= { countryCode:countryCode,
      date:date,
      fixed:fixed, 
      global:global,
      localName:localName,
      name:name,
      type:type }
const qrValue='https://example.com'
  return (
    <div>
      <h1>{name}</h1>
      <h2>in {date}</h2>
      <MyQRCode value={MyQRCode(value)}/>
      <Button>Apply</Button>

    </div>
  )
}

export default Event
