import React from 'react'

function Testing(props) {
  return (props.trigger) ? (
    <>
    <button className='close-btn' style={{backgroundColor: 'white'}}>Close</button>
        {props.children}
    <div className='popup' style={{backgroundColor: 'red', display: 'flex', justifyContent: 'center', marginBlock: '2em', paddingBlock: '3em', WebkitFilter: 'blur(8px)'}}>
        <div className='popup-inner'>
        
        </div>
    </div>
    </>
  ): "";
}

export default Testing
