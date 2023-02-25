import React from 'react';
import post1 from '../img/image/Rectangle107.png';
import post2 from '../img/image/Rectangle108.png';
import post3 from '../img/image/Rectangle109.png';


function TeamPres() {

    const dataTeam = [
        {
            id: 1,
            name: 'Mike',
            position: 'Главный инстуктор',
            img: post1,
        },
        {
            id: 2,
            name: 'Mary',
            position: 'инстуктор',
            img: post2,
        },
        {
            id: 3,
            name: 'Ольга',
            position: 'инстуктор',
            img: post3,
        },
    ]

  return (
    <div className='team-pres'>
        {
            dataTeam.map((el) => (
                <div className="team-item" key={el.id}>
                    <img className='team-item-img' src={el.img} alt='teamImg' />
                    <div className="team-item-name">{el.name}</div>
                    <div className="team-item-pos">{el.position}</div>
                </div>
            ))
        }
    </div>
  )
}

export default TeamPres