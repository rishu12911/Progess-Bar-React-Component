import React from 'react'



const ProgessBar = ({percentage}) => {

   
  
  return (
    <div className='progress-bar-con'>
        
        
        <div className='progess-bar' style={{width:`${percentage}%`}}>
            {percentage==100?<span>Loading Finished </span>:<span>{percentage}%</span>}
        
        </div>

    </div>
  )
}

export default ProgessBar