import React, { useState } from 'react'
import style from '../Checkbox/Checkbox.module.css'

const Checkbox = ({label}) => {
  const [vision, setVision] = useState(false);
  const rootClasses = [style.label]
  if(vision){
    rootClasses.push(style.active)
  }

  return (
    <div className={style.conteiner}>
        <div className={style.checkbox} onClick={()=>setVision(!vision)}>
          <div className={rootClasses.join(" ")}></div>
        </div>
        <div className={style.checkbox_text}>{label}</div>
    </div>
  )
}

export default Checkbox