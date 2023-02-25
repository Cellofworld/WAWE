import React from 'react';
import waweIcon from '../img/icons/wawe.svg'

function WaweIcon(props) {

    const {percent, title, widthIcon} = props.data;
    
  return (
    <div className='wawe-icon-cont'>
        <div className="wawe-desc-cont">
            <img 
                className='wawe-icon' 
                src={waweIcon} 
                alt='waweIcon'
                style={{
                    width: widthIcon 
                }}
                />
                <div className="wawe-desc">{title}</div>
        </div>
            <div className="wawe-percent">{percent}%</div>
    </div>
  )
}

export default WaweIcon