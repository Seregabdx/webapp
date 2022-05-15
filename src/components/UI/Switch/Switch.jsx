import React from 'react'
import style from "../Switch/Switch.module.css"

const Switch = () => {
  return (
    <div class={style.switch_button}>
        <input class={style.switch_button_checkbox} type="checkbox"/>
        <label class={style.switch_button_label} for="">
            <span class={style.switch_button_label_span}>Бакалавриат</span>
        </label>
    </div>
  )
}

export default Switch