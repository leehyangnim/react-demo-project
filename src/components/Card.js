import React from 'react';

const cardStyle = {
  height: 100,
  width: '80%',
  borderRadius: 5,
  border: '1px solid black',
  margin: '20px',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column'
}

const Card = ({content}) => (
   <div style={ (content !== null) ? cardStyle : {display: 'none'}}>{content}</div>
)

export default Card
