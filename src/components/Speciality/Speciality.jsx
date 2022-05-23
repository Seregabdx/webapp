import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from "../Speciality/Speciality.module.css"

const Speciality = ({specialtiesName}) => {
  const navigate = useNavigate()
  return (
    <div className={style.speciality_container} onClick={()=>{
      navigate(`/${specialtiesName.split("!")[1]}`)
    }}>
      <div className={style.speciality_name}>{specialtiesName.replace("!", " ")}</div>
    </div>
  )
}

export default Speciality