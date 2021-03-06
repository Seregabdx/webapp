import React, { useState } from 'react'
import style from "./Navbar.module.css"
import icon_menu from "../Navbar/icon_menu.svg"
import setting from "../Navbar/setting.svg"
import home from "../Navbar/home.svg"
import info from "../Navbar/info.svg"
import account from "../Navbar/account.svg"
import Modal from '../Modal/Modal'
import Settings from '../Settings/Settings'

const Navbar = () => {
  const [modal, setModal] = useState(false);
  
  return (
    <div className={style.Navbar}>
        <img className={style.logo} src={icon_menu}></img>
        <div className={style.menu_block}>
            <a href="/settings"><img className={style.img} src={setting}></img></a>
            <a href="/"><img className={style.img} src={home}></img></a>
            <a href=""><img className={style.img} src={info}></img></a>
        </div>
        <a href="" className={style.account}><img className={style.img} src={account} alt="" /></a>
        
    </div>
  )
}

export default Navbar