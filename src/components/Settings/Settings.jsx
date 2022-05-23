import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react'
import Select from '../UI/Select/Select'
import style from '../Settings/Settings.module.css'
import Checkbox from '../UI/Checkbox/Checkbox'
import Button from '../UI/Button/Button'
import Number from '../UI/Number/Number'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Settings = ({infoData}) => {  
  const [universityInfo1, setUniversityInfo1] = useState([])
  const [universityInfo2, setUniversityInfo2] = useState([])
  const [universityInfo3, setUniversityInfo3] = useState([])
  const [universityInfo4, setUniversityInfo4] = useState([])
  const [universityInfo5, setUniversityInfo5] = useState([])
  const [universityInfo6, setUniversityInfo6] = useState([])
  const [universityInfo7, setUniversityInfo7] = useState([])
  const [universityInfo8, setUniversityInfo8] = useState([])
  const navigate = useNavigate()



  const [find, setFind] = useState(false)

  // const createInfo = (universityInfo1) => (
  //   find ? setUniversityInfo([...universityInfo, universityInfo1]) : "123"
  // )



  const createFind = (doFind) => (
    setFind(doFind)
  )

  useLayoutEffect(() => {
    return () => {
      console.log(universityInfo1, "---------")
      console.log(universityInfo2, "---------")
      console.log(universityInfo3, "---------")
      console.log(universityInfo4, "---------")
      console.log(universityInfo5, "---------")
      console.log(universityInfo6, "---------")
      console.log(universityInfo7, "---------")
      console.log(universityInfo8, "---------")
    }
  })

  return (
    <div className={style.content_block}>
        <div className={style.title}>Магистратура</div>
        <div className={style.block}><div className={style.text}>Специальность</div><Select placeholder_text={"Выберите специальность"} createInfo={setUniversityInfo2} find={find}/></div>
        <div className={style.block}><div className={style.text}>Изменение рейтинга</div><Number createInfo={setUniversityInfo3}/></div>
        <div className={style.block}><div className={style.text}>Средний балл поступивших</div><Number createInfo={setUniversityInfo4}/></div>
        <div className={style.block}><div className={style.text}>Количество бюджетных мест</div><Number createInfo={setUniversityInfo5}/></div>
        <div className={style.block}><div className={style.text}>Количество студентов на бюджете</div><Number createInfo={setUniversityInfo6}/></div>
        <div className={style.block}><Checkbox label={"Военная кафедра"} createInfo={setUniversityInfo7} find={find}/></div>
        <div className={style.block}><Checkbox label={"Отсрочка от армии"} createInfo={setUniversityInfo8} find={find}/></div>
        <div className={style.block} onClick={()=>{setFind(true); navigate(`/${universityInfo2.split("  ")[1]}`)}}><Button/></div>
    </div>
  )
}

export default Settings