import React from 'react';
import ReactPlayer from 'react-player/youtube'
import DescriptionVideo from './DescriptionVideo';

function Video() {
  return (
    <div className='video'>
      <div className="video-cont">
        <ReactPlayer 
            url='https://www.youtube.com/watch?v=ma67yOdMQfs'
            width={900}
            height={500}
            />
      </div>
            <DescriptionVideo />
    </div>
  )
}

export default Video