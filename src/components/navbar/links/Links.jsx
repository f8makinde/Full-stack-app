"use client"
import Image from "next/image"
import { useState } from "react"
import styles from "./links.module.css"
import NavLink from "./navLink/navLink"
const links = [
    {
        title: "Homepage",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    },
]
const Links = () => {
    const [open, setOpen] = useState();
   
    //Temporary
    const session = true
    const isAdmin = true
  return (
    <div className={styles.container}>
    <div className={styles.links}>
      {links.map((link) => {
       return <NavLink  key={link.title} item={link} />
      })}{
        session ? (
            <>
            {isAdmin && (
                    <NavLink item={{title: "Admin", path: "/admin"}} />
                )
            }
            <button className={styles.logout}>Logout</button>
            </>
        ) : (
            <NavLink item={{title: "Login", path: "/login"}} />
        )
      }
    </div>
    
    <Image  className={styles.menuButton}  src="/menu.png" alt="menu" width={30} height={30} onClick={() => setOpen((prev) => !prev)}/>
    {
        open && <div className={styles.mobileLinks}>
            {links.map((link) => (
                <NavLink  key={link.title} item={link} />
            ))}
            </div>
    }
    </div>
  )
}

export default Links
