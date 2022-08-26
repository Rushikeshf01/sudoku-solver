import React from 'react'
import '../styles/InputPopup.css'

function InputPopup(props) {
  const handleSubmitedData = () => {
    console.log('submited');
  }

  return ( 
    <div className="popup">
        <div className="popup-inner">
            <h2><b>Enter a Sudoku String to Board</b></h2>
            <input type="text" placeholder='e,g. 4.....5..4.2..............4...9'/>
            <div className="btn">

            <button type="submit" onClick={handleSubmitedData}>OK</button>

            <button onClick={props.setButton}>close</button>
            </div>
        </div>
    </div>
  ) 
}

export default InputPopup