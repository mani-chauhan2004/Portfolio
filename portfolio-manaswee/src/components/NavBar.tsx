import React from 'react'
import CircularText from './CircularText';
function NavBar() {
  return (
    <div className='flex items-center w-screen justify-between'>
        <CircularText
            text="MANASWEECHAUHAN"
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
        />
        <div></div>
        <div></div>
    </div>
  )
}

export default NavBar;