import React, { useLayoutEffect } from 'react'
import Input from '../UI/Input/Input'
import style from "../Filter/Filter.module.css"
import Switch from '../UI/Switch/Switch'
import Select from '../UI/Select/Select'
import Checkbox from '../UI/Checkbox/Checkbox'
import axios from 'axios'
import { useState, useEffect } from "react"
import Button from '../UI/Button/Button'
import Slider from '../UI/Slider/Slider'

const Filter = ({changeFilter, isFind, infoData}) => {
  const [data, setData] = useState("")
  const [filterInfo1, setFilterInfo1] = useState("123")
  const [filterInfo2, setFilterInfo2] = useState("бакалавриат")
  const [filterInfo3, setFilterInfo3] = useState("123")
  const [filterInfo4, setFilterInfo4] = useState([0, 10])
  const [filterInfo5, setFilterInfo5] = useState("null")
  const [filterInfo6, setFilterInfo6] = useState("null")
  const [filterInfo7, setFilterInfo7] = useState("null")
  const [filterInfo8, setFilterInfo8] = useState("null")
  const [filterInfo9, setFilterInfo9] = useState("null")
  const [filterInfo10, setFilterInfo10] = useState(["null"])
  const [filterInfo11, setFilterInfo11] = useState(["null"])
  const [filterInfo12, setFilterInfo12] = useState(["null"])

  const [find, setFind] = useState(false)
  

  useLayoutEffect(() => {
      // console.log(filterInfo1, "---------")
      // console.log(filterInfo2, "---------")
      // console.log(filterInfo3, "---------")
      // console.log(filterInfo4, "---------")
      // console.log(filterInfo5, "---------")
      // console.log(filterInfo6, "---------")
      // console.log(filterInfo7, "---------")
      // console.log(filterInfo8, "---------")
      // console.log(filterInfo9, "---------")
      // console.log(filterInfo10, "---------")
      // console.log(filterInfo11, "---------")
      // console.log(filterInfo12, "---------")
      isFind(find)
      if(find){
        setFilterInfo12("filterInfo12")
        setFilterInfo12(filterInfo12)
        changeFilter([filterInfo1, filterInfo2, filterInfo3, filterInfo4, filterInfo5, filterInfo6, filterInfo7, filterInfo8, filterInfo9, filterInfo10, filterInfo11, filterInfo12])
        setData([filterInfo1, filterInfo2, filterInfo3, filterInfo4, filterInfo5, filterInfo6, filterInfo7, filterInfo8, filterInfo9, filterInfo10, filterInfo11, filterInfo12])
        setFind(false)
      }
      
  })
   

  return (
    <div className={style.Filter_block}>
        <Input createInfo={setFilterInfo1}/>
        <Switch createInfo={setFilterInfo2}/>
        <Slider title={"Изменение рейтинга за год"} col={"#A655D6"} createInfo={setFilterInfo4} multiplier={0.1}/>
        <Slider title={"Стоимость обучения"} col={"#B461C8"} createInfo={setFilterInfo5} multiplier={4000}/>
        <Slider title={"Проходной балл"} col={"#C26DBC"} createInfo={setFilterInfo6} multiplier={3}/>
        <Slider title={"Средний балл поступивших"} col={"#CF78AF"} createInfo={setFilterInfo7} multiplier={3}/>
        <Slider title={"Количество бюджетных мест"} col={"#DC83A3"} createInfo={setFilterInfo8} multiplier={2}/>
        <Slider title={"Количество студентов на бюджете"} col={"#EB9194"} createInfo={setFilterInfo9} multiplier={50}/>
        <Checkbox label={"Магистратура"} createInfo={setFilterInfo10}/>
        <Checkbox label={"Военная кафедра"} createInfo={setFilterInfo11}/>
        <Checkbox label={"Отсрочка от армии"} createInfo={setFilterInfo12}/>
        <div onClick={()=>{setFind(true)}}><Button/></div>
    </div>
  )
}

export default Filter