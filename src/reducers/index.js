import { combineReducers } from 'redux'

const cards = {
  left: [{
    content: "hello"
  }, {
    content: "aaaaa"
  }],
  right: [{
    content: "hi"
  }, {
    content: "wwww"
  }]
}

const moveCards = (state = cards, action) => {
  switch (action.type) {
    case 'MOVE_LEFT' :
      if (state.right.length !== 0) {
        return ({
            left: [
              ...state.left,
              state.right[0]
            ],
            right: [
              ...state.right.slice(1)
            ]}
        )
      }
      return state
    case 'MOVE_RIGHT' :
      if (state.left.length !== 0) {
        return ({
            left: [
              ...state.left.slice(1),
            ],
            right: [
              ...state.right,
              state.left[0]
            ]
          })
      }
      return state
    default:
      return state;
  }
}

const demoApp = combineReducers({
  moveCards
})

export default demoApp
