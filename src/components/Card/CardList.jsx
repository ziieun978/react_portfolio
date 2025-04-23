import React from 'react'
import CardItem from './CardItem'

const CardList = ({carditem}) => {
  return (
    <div className='cardList'>
        {carditem.map((p) => (
            <CardItem
            key={p.id}
            src={p.src}
            title={p.title}
            content={p.content}
            />

        ))}

    </div>
  )
}
export default CardList;
