import React from 'react';
import group1 from '../img/icons/Group.svg'
import group2 from '../img/icons/Group2.svg'
import group3 from '../img/icons/Group3.svg'


function Receiving() {

    const receiving = [
        {
            icon: group1,
            title: 'ПРОЖИВАНИЕ',
            description: 'Наша школа серфинга находится в 100 м от океанского побережья. К услугам гостей открытый бассейн и бесплатный Wi-Fi. Из верхней террасы открывается вид на океан. Расстояние до центра города 15 мин. '
        },
        {
            icon: group2,
            title: 'ПЕРЕЛЕТ И СТРАХОВКУ',
            description: 'Все участники программы застрахованы страховой компанией Allianz. Перелет из Тенерифе до острова Лансароте  и обратно входит в стоимость программы'
        },
        {
            icon: group3,
            title: 'ОБУЧЕНИЕ И ЭКИПИРОВКУ',
            description: 'Все оборудование и экипировка известных производителей и предоставляется на весь курс программы. Тренировочный процесс начинается с определения вашего уровня катания '
        },
    ]


  return (
    <div className='receiving'>
        {
            receiving.map((el) => (
                <div className="receiving-item" key={el.title}>
                    <div className="receiving-cont">
                        <img className='receiving-item-img' src={el.icon} alt={el.title} />
                        <div className="receiving-item-title">{el.title}</div>
                    </div>
                    <div className="receiving-item-desc">{el.description}</div>
                </div>
            ))
        }
    </div>
  )
}

export default Receiving