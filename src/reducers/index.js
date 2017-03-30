import { combineReducers } from 'redux'
import update from 'react/lib/update'

const INITIAL_STATE = {
  left: [
    { id: 1, content: "hello"},
    { id: 2, content: "aaaaa"},
    { id: 3, content: "hi"},
    { id: 4, content: "wwww"}
  ],
  right: [
  ]
}

const reducer = (state = INITIAL_STATE, action) => {
  console.log("reducer")
  const actionContainerId = (action.containerId === 1) ? 'left' : 'right';
  const movedContainerId = (action.containerId === 1) ? 'right' : 'left'
  const containerCards = state[actionContainerId]

  switch (action.type) {
    case 'PUSH_CARD' :
      console.log('push card reducer')
      const newCard = action.card;
      console.log(newCard)
      return { ...state, [movedContainerId]: [...state[movedContainerId], newCard]};
    case 'MOVE_CARD' :
      const dragIndex =  action.dragIndex;
      const hoverIndex = action.hoverIndex;
      const dragCard = state[actionContainerId][dragIndex];
      // console.log(dragCard)
      return { ...state, [actionContainerId]:
        update(containerCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard]
          ]
        })
      };
    case 'REMOVE_CARD' :
      console.log("remove card reducer")
      const removeIndex = action.index

      return { ...state, [actionContainerId]:
        update(containerCards, {
          $splice: [
            [removeIndex, 1]
          ]
        })

    }
    default:
      return state;
  }
}

const demoApp = combineReducers({
  reducer
})

export default demoApp
