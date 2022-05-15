import React from 'react'
import Input from '../UI/Input/Input'
import style from "../Filter/Filter.module.css"
import Switch from '../UI/Switch/Switch'
import Select from '../UI/Select/Select'
import Checkbox from '../UI/Checkbox/Checkbox'
import axios from 'axios'
import { useState, useEffect } from "react"
import Button from '../UI/Button/Button'
import Slider from '../UI/Slider/Slider'

const Filter = () => {
  const [data, setData] = useState("")
  useEffect(() => {
    return () => {
      axios.get("http://localhost:5000/users?id=1&con=12").then(res => setData(res)).catch(err => console.log(err))
    }
  }, [])
  

  return (
    <div className={style.Filter_block}>
        <Input/>
        <Switch/>
        <Select title={"Город"}/>
        <Slider title={"Изменение рейтинга за год"} col={"#A655D6"}/>
        <Slider title={"Стоимость обучения"} col={"#B461C8"}/>
        <Slider title={"Проходной балл"} col={"#C26DBC"}/>
        <Slider title={"Средний балл поступивших"} col={"#CF78AF"}/>
        <Slider title={"Количество бюджетных мест"} col={"#DC83A3"}/>
        <Slider title={"Количество студентов на бюджете"} col={"#EB9194"}/>
        <Checkbox label={"Магистратура"}/>
        <Checkbox label={"Военная кафедра"}/>
        <Checkbox label={"Отсрочка от армии"}/>
        <Button/>
    </div>
  )
}

export default Filter