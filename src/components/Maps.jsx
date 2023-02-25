import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import React from 'react'

function Maps() {
  return (
    <div className='maps'>
        <YMaps>
            <Map 
                defaultState={
                    { 
                        center: [28.739412, -13.867402], 
                        zoom: 14 ,
                    }
                }
                width = '80%'
                height= '520px'
            >
            <Placemark geometry={[28.739412, -13.867402]} />
            </Map>
        </YMaps>
    </div>
  )
}

export default Maps