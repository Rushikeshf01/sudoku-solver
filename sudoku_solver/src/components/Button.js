import React from 'react'
import InputPopup from './InputPopup'
import { useState } from 'react'

export default function Button(props) {

  const [Trigger, setTrigger] = useState({val:false})
  
  const togglePopUp = () => {
    setTrigger({
      val: !Trigger.val
    })
    
  }
  return (
    <>
       <div className="button">
       <button onClick={togglePopUp} >{props.btnName}</button>
   </div>
       {Trigger.val ? 
      <InputPopup trigger={Trigger} setButton={togglePopUp}/>
      : null
       } 
    </>
  )
}

