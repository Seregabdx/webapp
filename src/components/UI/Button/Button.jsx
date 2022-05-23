import React from 'react'
import style from "../Button/Button.module.css"

const Button = () => {
  return (
    <div className={style.button_block}>
        <button className={style.Button}>Найти</button>
    </div>
  )
}

export default Button