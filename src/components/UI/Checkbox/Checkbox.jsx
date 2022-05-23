import React, { useEffect, useLayoutEffect, useState } from 'react'
import style from '../Checkbox/Checkbox.module.css'

const Checkbox = ({label, createInfo, find}) => {
  const [vision, setVision] = useState(false);
  const rootClasses = [style.label]
  if(vision){
    rootClasses.push(style.active)
  }

  useLayoutEffect(() => {
    try {
      createInfo(vision)
    } catch (error) {
      console.log(error)
    }
  }, [vision])
  

  const change = (visible) =>{
    setVision(!vision);
    createInfo(vision)
  }
  

  return (
    <div className={style.conteiner}>
        <div className={style.checkbox} onClick={()=>{change(vision)}}>
          <div className={rootClasses.join(" ")}></div>
        </div>
        <div className={style.checkbox_text}>{label}</div>
    </div>
  )
}

export default Checkbox