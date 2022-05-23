import React, { useLayoutEffect, useState } from 'react'
import style from '../Slider/Slider.module.css'

const Slider = ({title, col, createInfo, multiplier}) => {
    const color = col;
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(90);
    const minGap = 0
    const [percent1, setPercent1] = useState((first/100) * 100);
    const [percent2, setPercent2] = useState((second/100) * 100);
    const [st, setSt] = useState(`linear-gradient(to right, #343B53 ${percent1}% , ${color} ${percent1}% , ${color} ${percent2}%, #343B53 ${percent2}%)`)
    
    useLayoutEffect(() => {
      createInfo([first * multiplier, second * multiplier])
    
    }, [first, second])

    return (
    <div className={style.container}>
      <div>
            <div className={style.text}>{title}</div>
            <div style={{position: 'relative', width: '100%', height: "2.5vw", margin: "auto"}}>
              <div style={{width: "100%", height: "2.5vw", margin: "auto", borderRadius: "5px", background: st, position: "absolute", bottom: "0"}}></div>
            <input type="range" min="0" max="100" value={first} id="slider-1" onInput={(e)=>{
                setFirst(e.target.value);
                if(parseInt(second)-parseInt(first) <= minGap){
                  setFirst(parseInt(second)-minGap)
                }
              
                setPercent1((first/100) * 100);
                setPercent2((second/100) * 100);
                setSt(`linear-gradient(to right, #343B53 ${percent1}% , ${color} ${percent1}% , ${color} ${percent2}%, #343B53 ${percent2}%)`)
                console.log(st)
            }}/>
            <input type="range" min="0" max="100" value={second} id="slider-2" onInput={(e)=>{
                setSecond(e.target.value);
                if(parseInt(second)-parseInt(first) <= minGap){
                  setSecond(parseInt(first)+minGap)
                }
                
                setPercent1((first/100) * 100);
                setPercent2((second/100) * 100);
                setSt(`linear-gradient(to right, #343B53 ${percent1}% , ${color} ${percent1}% , ${color} ${percent2}%, #343B53 ${percent2}%)`)
                console.log(st)
            }}/>
            </div>
      </div>
            <div className={style.text_box}>
              <input type="number" className={style.number} id="" value={first * multiplier} min="0"  max={String(second)} onChange={(e)=>{
                setFirst(e.target.value)
                setPercent1((first/100) * 100);
                setPercent2((second/100) * 100);
                setSt(`linear-gradient(to right, #343B53 ${percent1}% , ${color} ${percent1}% , ${color} ${percent2}%, #343B53 ${percent2}%)`)
              }}/>
              <input type="number"  className={style.number} id="" value={second * multiplier} min={String(first) } max="100" onChange={(e)=>{
                setSecond(e.target.value)
                setPercent1((first/100) * 100);
                setPercent2((second/100) * 100);
                setSt(`linear-gradient(to right, #343B53 ${percent1}% , ${color} ${percent1}% , ${color} ${percent2}%, #343B53 ${percent2}%)`)
              }}/>
            </div>
    </div>
  )
}

export default Slider