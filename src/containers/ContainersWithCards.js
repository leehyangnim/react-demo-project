import { connect } from 'react-redux'
import Containers from '../components/Containers'

const mapStateToProps = (state) => {
  return {
    state: state.reducer
  }
}

const ContainersWithCards = connect(
  mapStateToProps
)(Containers)

export default ContainersWithCards
