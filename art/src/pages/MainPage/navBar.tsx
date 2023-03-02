import React from "react";
import { navLinks } from "./link";
import Link from "next/link";
import Search from "./search";
import styles from "../../styles/principale.module.css"

const NavBar=()=>{
    return(
        <div>
    <header>
      <nav className={styles.mainNavBar}>
        {navLinks.map((e, index) => {
          return (
            <ul>
              <Link href={e.path}>
                <li key={index}><a>{e.name}</a></li>
              </Link>
            </ul>
          );
        })}
        <Search/>
      </nav>
    </header>
    
        </div>
    )
}
export default NavBar;