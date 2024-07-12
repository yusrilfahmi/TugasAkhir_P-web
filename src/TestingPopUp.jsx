import Popup from './testing'
import React from 'react'

function TestingPopUp() {
  return (
    <div className='Wrapper' style={{color: 'white', padding: '5em', backgroundColor: 'gray'}}>
        <h1>Testing</h1>
        <button>Open Pop Up</button>
        
        <Popup trigger={true}>
        <h3>My PopUp</h3>
        </Popup>
    </div>

    
  )
}

export default TestingPopUp