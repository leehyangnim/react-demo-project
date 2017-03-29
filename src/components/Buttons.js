import React from 'react'
import MoveCard from '../containers/MoveCard'

const Buttons = () => (
  <div>
    <MoveCard type="solid" type="MOVE_LEFT">&lt;</MoveCard>
    <MoveCard type="solid" type="MOVE_RIGHT">&gt;</MoveCard>
  </div>
)

export default Buttons
