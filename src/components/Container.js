import React from 'react'
import Card from './Card'

const style = {
  height: 500,
  width: '100%',
  borderRadius: 5,
	border: '1px solid gray',
	margin: '50px 10px 0px 10px',
	backgroundColor: 'lightgray',
  display: 'flex',
	flexDirection: 'column'
}

const Container = ({cards}) => (
  <div style={style}>
      {cards.map( (card, index) => {
      return (
        <Card content={card.content} key={index} />
      )
    })}
  </div>
)

export default Container
