import React from 'react'
import style from "../UniversityFullInfo/UniversityFullInfo.module.css"

const UniversityFullInfo = () => {
  return (
    <div>
        <div className={style.InfoBox}>
          <div className={style.name}>Санкт-Петербургский государственный электротехнический университет «ЛЭТИ» им. В.И.Ульянова</div>
        </div>
        <div className={style.InfoBox}>
          <div className={style.rate}>Изменение рейтинга за год <span className={style.span}>123</span></div>
          <div className={style.text}>Санкт-Петербург</div>
        </div>
        <div className={style.InfoBox}>
            <div className={style.text}>Бакалавриат</div>
            <div className={style.text}>Стоимость обучения</div>
            <div className={style.text}>Проходной балл</div>
            <div className={style.text}>Средний балл поступивших</div>
            <div className={style.text}>Количество бюджетных мест</div>
            <div className={style.text}>Количество студентов на бюджете</div>
            <div className={style.text}>Магистратура</div>
            <div className={style.text}>Военная кафедра</div>
            <div className={style.text}>Отсрочка от армии</div>
        </div>
    </div>
  )
}

export default UniversityFullInfo