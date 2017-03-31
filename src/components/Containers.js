import React from 'react';
import Container from './Container'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const Containers = ({state}) => (
  <div style={{display: 'flex', justifyContent: "space-around", width:'100%'}}>
    <Container cards={state.left} containerId={1}></Container>
    <Container cards={state.right} containerId={2}></Container>
  </div>
)

export default DragDropContext(HTML5Backend)(Containers);
