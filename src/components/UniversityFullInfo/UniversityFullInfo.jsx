import React from 'react'
import style from "../UniversityFullInfo/UniversityFullInfo.module.css"

const UniversityFullInfo = ({info}) => {

  const rootClasses = [style.InfoBox]
  const rootClasses3 = [style.span_rating]
  let name = "0" 

  if(info.magistracy.name ==  0){
    rootClasses.push(style.disable)
  } else name = info.magistracy.name[0].toUpperCase() + info.magistracy.name.slice(1)

  if(info.universityInfo.ratingChange >= 0){
    rootClasses3.push(style.positive)
  }

  return (
    <div className={style.Box}>
        <div className={style.InfoBox}>
          <div className={style.name}>{info.universityName}</div>
        </div>
        <div className={style.InfoBox}>
          <div className={style.rate}>Изменение рейтинга за год: <span className={rootClasses3.join(" ")}>{info.universityInfo.ratingChange}</span></div>
          <div className={style.text}>Адрес: <span className={style.span}>{info.universityAdress}</span></div>
          <div className={style.text}> <a href={info.linkPlaces}>Актуальное количество мест</a></div>
        </div>
        <div className={style.InfoBox}>
          <div className={style.text}>Средний балл поступивших: <span className={style.span}>{info.universityInfo.gradePointAverage!=0 ? info.universityInfo.gradePointAverage :"Не найдено"}</span></div>
          <div className={style.text}>Количество студентов на бюджете: <span className={style.span}>{info.universityInfo.budgetPlaces!=0 ? info.universityInfo.budgetPlaces :"Не найдено"}</span></div>
          <div className={style.text}>Военная кафедра: <span className={style.span}>{info.universityInfo.hasMilitaryDepartment ==true ? "Есть" :"Нет"}</span></div>
          <div className={style.text}>Отсрочка от армии: <span className={style.span}>{info.universityInfo.hasArmyRespite ==true ? "Есть" :"Нет"}</span></div>

        </div>
        <div className={style.InfoBox}>
            <div className={style.text_name}>{info.bachelor.name[0].toUpperCase() + info.bachelor.name.slice(1)}</div>
            <div className={style.text}>Количество бюджетных мест: <span className={style.span}>{info.bachelor.budgetPlaces!=0 && info.bachelor.budgetPlaces!=null ? info.bachelor.budgetPlaces :"Не найдено"}</span></div>
            <div className={style.text}>Средний проходной балл: <span className={style.span}>{info.bachelor.gradePointAverage!=0 && info.bachelor.gradePointAverage!=null ? info.bachelor.gradePointAverage :"Не найдено"}</span></div>
            <div className={style.text}>Стоимость обучения: <span className={style.span}>{info.bachelor.educationCost!=0 && info.bachelor.educationCost!=null ? info.bachelor.educationCost :"Не найдено"}</span></div>
        </div>

        <div className={rootClasses.join(" ")}>
            <div className={style.text_name}>{name}</div>
            <div className={style.text}>Количество бюджетных мест: <span className={style.span}>{info.magistracy.budgetPlaces!=0 && info.magistracy.budgetPlaces!=null ? info.magistracy.budgetPlaces :"Не найдено"}</span></div>
            <div className={style.text}>Средний проходной балл: <span className={style.span}>{info.magistracy.gradePointAverage!=0 && info.magistracy.gradePointAverage!=null ? info.magistracy.gradePointAverage :"Не найдено"}</span></div>
            <div className={style.text}>Стоимость обучения: <span className={style.span}>{info.magistracy.educationCost!=0 && info.magistracy.educationCost!=null ? info.magistracy.educationCost :"Не найдено"}</span></div>
        </div>

    </div>
  )
}

export default UniversityFullInfo