import React, { useEffect, useState } from 'react'
import style from "./UniversityInfo.module.css"
import UniversityFullInfo from '../UniversityFullInfo/UniversityFullInfo';

const UniversityInfo = ({info}) => {
  const [vision, setVision] = useState(false)
  const [arrow, setArrow] = useState("▼")

  const rootClasses = [style.UniversityFullInfo]
  const rootClasses2 = [style.InfoBox]
  const rootClasses3 = [style.span]

  useEffect(() => {
    try {
      console.log(info)
    } catch (error) {
      console.log(error)
    }
  })
  

  if(vision){
    rootClasses.push(style.active)
    rootClasses2.push(style.disable)
  }

  if(info.universityInfo.ratingChange >= 0){
    rootClasses3.push(style.positive)
  }

  return (
    <div className={style.UniversityInfo}>
      <div className={style.img_block}>
        <img className={style.Icon} src={`https://xn----7sbbi4acsqbibbdojqr6o.xn--p1ai/file-service/storage/download/${info.universityLogo}`} alt='' />
        <div className={style.arrow} onClick={() => {setVision(!vision); console.log(123); arrow == "▼" ? setArrow("▲") : setArrow("▼")}}>{arrow}</div>
      </div>
      <div className={rootClasses2.join(" ")}>
        <div className={style.text_box}>
          <div className={style.name}>{info.universityName}</div>
          <div className={style.rate}>Изменение рейтинга за год:  <span className={rootClasses3.join(" ")}>{info.universityInfo.ratingChange}</span></div>
          <div className={style.city}>Адрес: {info.universityAdress}</div>
        </div>
      </div>
      <div className={rootClasses.join(" ")}><UniversityFullInfo info={info} /></div>
    </div>
  )
}

export default UniversityInfo