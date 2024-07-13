import React from 'react'

function Spinner() {
  return (
    <div className=' h-screen flex flex-col justify-center items-center gap-6'>
      <div className="spinner">
        <div></div>   
        <div></div>    
        <div></div>    
        <div></div>    
      </div>
      <h1 className='text-3xl font-bold'>Loading</h1>
    </div>
    
  )
}

export default Spinner