import React from 'react'

function DescriptionVideo() {

    const DescriptionVideoContent = [
        {
            title: '450',
            subtitle: 'туристов'
        },
        {
            title: '2500',
            subtitle: 'часов катания'
        },{
            title: '10',
            subtitle: 'проф. тренеров'
        },{
            title: '365',
            subtitle: 'дней в году'
        },

    ]

  return (
    <div className='description-video'>
        {
            DescriptionVideoContent.map((el) => (
                <div className="description-video-items" key={el.subtitle}>
                    <div className="description-video-item-title">{el.title}</div>
                    <div className="description-video-item-subtitle">{el.subtitle}</div>
                </div>
            ))
        }
    </div>
  )
}

export default DescriptionVideo