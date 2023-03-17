import React from 'react'
import NavBar from '../components/navBar'
import styles from '../styles/aboutUs.module.css'

const aboutUs = () => {
  return (
    <div>
        <NavBar/>
        <div id={styles.div6}>
        <img id = {styles.img} src={"/aboutus.jpg"}/>
            <div id={styles.h33}>
            <h3 id={styles.h3}>
            We are an online art marketplace and shop catering to both art lovers and artists.
            Our platform offers a diverse selection of original artworks for sale, as well as unique art-related items. Join us today and discover the beauty and creativity of the art world.
        </h3>
        <div id={styles.line}></div>
            </div>
           
        </div>
    </div>
  )
}

export default aboutUs;
