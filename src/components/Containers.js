import React from 'react';
import Container from './Container'

const Containers = ({state}) => (
  <div style={{display: 'flex', width:'100%'}}>
    <Container cards={state.left}></Container>
    <Container cards={state.right}></Container>
  </div>
)

export default Containers
