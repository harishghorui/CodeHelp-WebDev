import React from 'react'

function Spinner() {
    return (
        <div className='min-h-[80vh] flex flex-col justify-center items-center space-y-24'>
            <div className="spinner">
                <div></div>   
                <div></div>    
                <div></div>    
                <div></div>    
                <div></div>    
                <div></div>    
                <div></div>    
                <div></div>    
                <div></div>    
                <div></div>    
            </div>
            
            <h1>Loading...</h1>
        </div>
        
    )
}

export default Spinner