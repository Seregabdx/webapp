import React from 'react'
import cl from '../Modal/Modal.module.css'
import Settings from '../Settings/Settings';

const Modal = ({visible, setVisible}) => {
  const rootClasses = [cl.myModal]
  if(visible){
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={()=> setVisible(false)}>
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        <Settings/>
      </div>
    </div>
  )
}

export default Modal