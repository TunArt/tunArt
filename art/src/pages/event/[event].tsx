import React from 'react'
import { useRouter } from 'next/router';
import {Button} from "antd"
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

  return (
    <div>
      <h1>{name}</h1>
      <h2>in {date}</h2>
      <Button>Apply</Button>

    </div>
  )
}

export default Event
