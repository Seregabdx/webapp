import React from 'react'
import Speciality from '../Speciality/Speciality'
import style from '../SpecialtiesList/SpecialtiesList.module.css'

const SpecialtiesList = () => {
  return (
    <div className={style.SpecialitiesList_block}>
        <Speciality/ >
        <Speciality/>
        <Speciality/>
        <Speciality/>
        <Speciality/>
        <Speciality/>
        <Speciality/>
    </div>
  )
}

export default SpecialtiesList