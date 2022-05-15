import React, { useEffect, useState } from 'react'
import style from "../Select/Select.module.css"

const Select = ({title}) => {
  const [value, setValue] = useState("Выберите город")
  const [placeholder, setPlaceholder] = useState(["placeholder1", "placeholder2", "placeholder3", "placeholder4", "placeholder5", "placeholder6", "placeholder7", "placeholder8", "placeholder9", "placeholder10", "placeholder11", "placeholder12", "placeholder13", "placeholder14", "placeholder15"])
  const [visible, setVisible] = useState(true)
  const [arrow, setArrow] = useState("▼")
  const [def, setDef] = useState(false)
  
  const rootClasses = [style.selector_container_selector_body]
  if(!visible){
    rootClasses.push(style.active)
  }

  const rootClasses2 = [style.selector_container_selector__header__text]
  if(!def){
    rootClasses2.push(style.usual)
  }


  return (
    <div class={style.selector_container}>
      <div className={style.title}>{title}</div>
      <div class={style.selector_container_selector}>
          <div class={style.selector_container_selector__header} onClick={() => {setVisible(!visible); if(arrow == "▼"){setArrow("▲")} else {setArrow("▼")} }}>
              <div class={rootClasses2.join(" ")}>{value} </div> 
              <div class={style.selector_container_selector__header__icon}>{arrow}</div>
          </div>
          <div class={rootClasses.join(" ")}>
          <div onClick={() => {setValue("Не выбран"); setVisible(!visible); if(arrow == "▼"){setArrow("▲")} else {setArrow("▼")}; setDef(false)}} class={style.selector_container_selector_body__value}>Не выбран</div>
              {
                placeholder.map((val) => 
                  <div onClick={() => {setValue(val); setVisible(!visible); if(arrow == "▼"){setArrow("▲")} else {setArrow("▼")}; setDef(true)}} class={style.selector_container_selector_body__value}>{val}</div>
              )}
          </div>
      </div>
    </div>
  )
}
export default Select