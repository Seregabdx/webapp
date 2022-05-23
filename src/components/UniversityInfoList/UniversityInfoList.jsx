import React, { useEffect, useState } from 'react'
import UniversityInfo from '../UniversityInfo/UniversityInfo'
import style from '../UniversityInfoList/UniversityInfoList.module.css'

const UniversityInfoList = ({info, filter, isFind}) => {
  const [find, setFind] = useState(false)

  useEffect(() => {
    console.log(isFind, "--------")
    if(isFind){
      setFind(true)
    }
    try {
      console.log(filter[3][0])
    } catch (error) {
      
    }
    
  })
  

  const withFilter = () => {
    info.filter((universityInfo1)=>{
      console.log(isFind)
      return (universityInfo1.universityInfo.ratingChange < filter[3][1]) && (universityInfo1.universityInfo.ratingChange > filter[3][0])
      })
  }

  const withoutFilter = () => {
    console.log(isFind)
    info.map((universityInfo)=>(
      <UniversityInfo info={universityInfo}/>
    ))
  }

  return (
    <div className={style.UniversityInfoList}>
      {
      info.map((universityInfo1)=>{
        console.log(universityInfo1)
        if (!find) {
          try {
            return <UniversityInfo info={universityInfo1}/>
          } catch (error) {
            
          }
        } else {
          try {
            const varible0 = ~universityInfo1.universityName.indexOf(filter[0] == 123 ? "" : filter[0])
            console.log(~universityInfo1.universityName.indexOf(filter[0] == 123 ? "" : filter[0]) && 1)
            const varible3 = (Math.abs(universityInfo1.universityInfo.ratingChange) <= filter[3][1]) && (Math.abs(universityInfo1.universityInfo.ratingChange) >= filter[3][0])
            const varible4 = (universityInfo1.bachelor.educationCost <= filter[4][1]) && (universityInfo1.bachelor.educationCost >= filter[4][0])
            const varible5 = (universityInfo1.bachelor.gradePointAverage <= filter[5][1]) && (universityInfo1.bachelor.gradePointAverage >= filter[5][0])
            const varible6 = (universityInfo1.universityInfo.gradePointAverage <= filter[6][1]) && (universityInfo1.universityInfo.gradePointAverage >= filter[6][0])
            const varible7 = (universityInfo1.bachelor.budgetPlaces <= filter[7][1]) && (universityInfo1.bachelor.budgetPlaces >= filter[7][0])
            const varible8 = (universityInfo1.universityInfo.budgetPlaces <= filter[8][1]) && (universityInfo1.universityInfo.budgetPlaces >= filter[8][0])
            const varible9 = !!(universityInfo1.magistracy.name) == filter[9]
            const varible10 = universityInfo1.universityInfo.hasMilitaryDepartment == filter[10]
            const varible11 = universityInfo1.universityInfo.hasArmyRespite == filter[11]
            console.log([Boolean(varible0), varible3, varible4, varible5, varible6, varible7, varible8, varible9, varible10, varible11])
            console.log(universityInfo1.bachelor.gradePointAverage, "-999")
            console.log(filter[5][0], "-999")
            console.log(filter[5][1], "-999")
            
            //varible0 && varible9 && varible10 && varible11
            if(Boolean(varible0) && varible3 && varible4 && varible5 && varible6 && varible7 && varible8 && varible9 && varible10 && varible11){ return <UniversityInfo info={universityInfo1}/>}
          } catch (error) {
            console.log(error)
          }
        }
      }       
    )}

    </div>
  )
}

export default UniversityInfoList