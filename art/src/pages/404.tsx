import React from 'react'
import styles from "../styles/404.module.css"
import Image from 'next/image'
function Notfind() {
  return (
    <>
    <h1 className={styles.error}>Oops!! This Page is Not Find 404 </h1>
  <Image  className={styles.errorImage}
  src='/404.jpg'
  alt="My image"
  width={500}
  height={500}
  />
  </>
  )
}

export default Notfind