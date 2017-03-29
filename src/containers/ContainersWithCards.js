import { connect } from 'react-redux'
import Containers from '../components/Containers'

const mapStateToProps = (state) => {
  return {
    state: state.moveCards
  }
}

const ContainersWithCards = connect(
  mapStateToProps
)(Containers)

export default ContainersWithCards
