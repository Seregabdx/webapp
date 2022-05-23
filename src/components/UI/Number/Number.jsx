import React from 'react'
import style from "../Number/Number.module.css"

const Number = ({createInfo}) => {

  return (
    <div className={style.number_block}>
        <input className={style.number} type="number" id="tentacles" name="tentacles" onChange={(e)=> createInfo(e.target.value)}/>
    </div>
  )
}

export default Number