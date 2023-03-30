import React from 'react'
import './Mybutton.css'


function Mybutton() {

    function handleClick() {
        alert('You clicked me!');
      }


  return (
    <div className='btn'>
      <button onClick={handleClick}>click to alert</button>
    </div>
  )
}

export default Mybutton
