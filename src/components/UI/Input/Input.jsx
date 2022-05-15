import React from 'react'
import style from "./Input.module.css"
import path from "../../UI/Input/search.svg"

const Input = ({placeholder}) => {
  return (
    <div className={style.main_input_block}>
        <img className={style.icon} src={path} alt="" />
        <input className={style.input} type="text" placeholder={placeholder ?? "abc"}/>
    </div>
  )
}

export default Input