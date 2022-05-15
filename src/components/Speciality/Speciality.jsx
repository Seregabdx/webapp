import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from "../Speciality/Speciality.module.css"

const Speciality = () => {
  const navigate = useNavigate()
  return (
    <div className={style.speciality_container} onClick={()=>{
      navigate("/программирование")
    }}>
      <div className={style.speciality_name}>Программирование</div>
    </div>
  )
}

export default Speciality