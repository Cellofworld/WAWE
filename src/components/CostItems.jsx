import React from 'react'

function CostItems() {

    const costData = [
        {
            id: 1,
            name: 'Стандарт',
            items: ['Проживание на вилле 6 ночей ', 'Номер категории стандарт', 'Экипировка для обучения', 'Обучение серфингу 5 тренировок по 2 часа', 'Страховка', 'Вечеринка с угощениями и дискотекой'],
            price: '450'
        },
        {
            id: 2,
            name: 'Все включено',
            items: ['Проживание на вилле 6 ночей ', 'Номер категории люкс', 'Экипировка для обучения', 'Обучение серфингу 8 тренировок по 2 часа', 'Страховка', 'Вечеринка с угощениями и дискотекой', 'Авиа перелет Тенерифе -Лансароте - Тенерифе ', 'Завтраки на вилле'],
            price: '950'
        },
        {
            id: 3,
            name: 'Профи',
            items: ['Проживание на вилле 8 ночей ', 'Номер категории люкс', 'Экипировка для обучения', 'Обучение серфингу 16 тренировок по 2 часа', 'Страховка', 'Вечеринка с угощениями и дискотекой', 'Авиа перелет Тенерифе -Лансароте - Тенерифе ', 'Завтраки и ужины на вилле'],
            price: '1450'
        },
    ]

  return (
    <div className='cost-items'>
        {
            costData.map((el) => (
                <div className="cost-item-cont" key={el.id}>
                    <div className="cost-item-title">{el.name}</div>
                    <div className="cost-item-points-cont">
                        {
                            el.items.map((e,i) => (
                                <div className="point" key={i}>{e}</div>
                            ))
                        }
                    </div>
                    <div className="cost-item-price">{el.price}$</div>
                </div>
            ))
        }
    </div>
  )
}

export default CostItems