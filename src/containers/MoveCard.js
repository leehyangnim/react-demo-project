import { connect } from 'react-redux'
import ArrowButton from '../components/ArrowButton'
import { moveFirstCard } from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(moveFirstCard(ownProps.type))
    }
  }
}

const MoveCard = connect(
  null,
  mapDispatchToProps
)(ArrowButton)

export default MoveCard
