export const removeCard = (props) => {
  console.log('remove card action')
  return {
      type: 'REMOVE_CARD',
      containerId: props.containerId,
      index: props.index
  }
}

export const pushCard = (props) => {
  console.log('pushcard action')
  return {
    type: 'PUSH_CARD',
    containerId: props.containerId,
    index: props.index,
    card: props.card
  }
}

export const moveCard = (props, dragIndex, hoverIndex) => {
  console.log('move card action')
  return {
    type: 'MOVE_CARD',
    containerId: props.containerId,
    dragIndex,
    hoverIndex
  }
}
