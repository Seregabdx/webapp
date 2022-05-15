import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import UniversityInfoList from '../UniversityInfoList/UniversityInfoList'
import style from "./Content.module.css"

const Content = () => {
  const x = useParams()
  console.log(x)
  return (
    <div className={style.Content_block}>
      <div>
        <UniversityInfoList/>
      </div>
    </div>
  )
}

export default Content