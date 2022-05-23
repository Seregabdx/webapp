import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Speciality from '../Speciality/Speciality'
import style from '../SpecialtiesList/SpecialtiesList.module.css'

const SpecialtiesList = ({setDataInfo}) => {
  const [data, setData] = useState([])

  useEffect(() => {
    return async () => {
     await axios.get("http://localhost:5000/specialties").then(res => setData(res.data)).catch(err => console.log(err))
    }
  }, [])

  useEffect(() => {
    setDataInfo(data)
  })
  

  return (
    <div className={style.SpecialitiesList_block}>
      {console.log(data[0])}
      
      {data.map((elem)=>(
        elem != "" ? <Speciality specialtiesName={elem}/> : ""
      ))}
    </div>
  )
}

export default SpecialtiesList