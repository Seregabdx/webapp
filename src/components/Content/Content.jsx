import axios from 'axios'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UniversityInfoList from '../UniversityInfoList/UniversityInfoList'
import style from "./Content.module.css"

const Content = ({filter, isFind, data}) => {
  const [universityInfo, setUniversityInfo] = useState([])
  const x = useParams()
  console.log(x)

  useEffect(() => {
    return async () => {
     await axios.post(`http://localhost:5000/specialties/${x}`, {name:x}).then(res => setUniversityInfo(res.data)).catch(err => console.log(err))
    }
  }, [])

  useLayoutEffect(() => {
    try {
      console.log(filter)
    } catch (error) {
      
    }
  })
  
  
  return (
    <div className={style.Content_block}>
      <div>
        <UniversityInfoList info={universityInfo} filter={filter} isFind={isFind}/>
      </div>
    </div>
  )
}

export default Content