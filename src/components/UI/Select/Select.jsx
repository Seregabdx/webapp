import axios from 'axios'
import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import style from "../Select/Select.module.css"

const Select = ({title, placeholder_text, createInfo, find}) => {

  
  const [value, setValue] = useState(placeholder_text)
  const [placeholder, setPlaceholder] = useState(["placeholder1", "placeholder2", "placeholder3", "placeholder4", "placeholder5", "placeholder6", "placeholder7", "placeholder8", "placeholder9", "placeholder10", "placeholder11", "placeholder12", "placeholder13", "placeholder14", "placeholder15"])
  const [visible, setVisible] = useState(true)
  const [arrow, setArrow] = useState("▼")
  const [def, setDef] = useState(false)
  

  useEffect(() => {
    return async () => {
      await axios
        .get("http://localhost:5000/specialties")
        .then((res) => setPlaceholder(res.data))
        .catch((err) => console.log(err));
    };
  }, []);
  
  let abc = true

  const rootClasses = [style.selector_container_selector_body]
  if(!visible){
    rootClasses.push(style.active)
  }

  const rootClasses2 = [style.selector_container_selector__header__text]
  if(!def){
    rootClasses2.push(style.usual)
  }
  
  function change(val) {
    setValue(val.replace("!", "  "));
  }

  useLayoutEffect(()=>{
    change(value)
  }, [find])

  useLayoutEffect(() => {
    console.log(value, "--")
    try {
      createInfo(value)
    } catch (error) {
      console.log(error)
    }
  }, [value])
  
  

  return (
    <div class={style.selector_container}>
      {title && <div className={style.title}>{title}</div>}
      <div class={style.selector_container_selector}>
          <div class={style.selector_container_selector__header} onClick={() => {setVisible(!visible); createInfo(value); if(arrow == "▼"){setArrow("▲")} else {setArrow("▼")}}}>
              <div class={rootClasses2.join(" ")}>{value} </div> 
              <div class={style.selector_container_selector__header__icon}>{arrow}</div>
          </div>
          <div class={rootClasses.join(" ")}>
          <div onClick={() => {setValue("Не выбран"); setVisible(!visible); if(arrow == "▼"){setArrow("▲")} else {setArrow("▼")}; setDef(false)}} class={style.selector_container_selector_body__value}>Не выбран</div>
              {
                placeholder.map((val) => 
                  <div onClick={() => {setVisible(!visible); if(arrow == "▼"){setArrow("▲")}else{setArrow("▼")}; setDef(true); change(val)}} class={style.selector_container_selector_body__value}>{val.replace("!", "  ")}</div>
                  )}
          </div>
      </div>
    </div>
  )
}
export default Select