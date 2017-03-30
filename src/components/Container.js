import React from 'react'
import Card from './Card'
import { pushCard } from '../actions'
import { DropTarget } from 'react-dnd';
import { connect } from 'react-redux'

const style = {
  height: 500,
  width: '100%',
  borderRadius: 5,
	border: '1px solid gray',
	margin: '50px 10px 0px 10px',
	backgroundColor: 'lightgray',
  display: 'flex',
	flexDirection: 'column'
}

const containerTarget = {
  drop(props, monitor, component ) {
		const { containerId } = props;
		const sourceObj = monitor.getItem();
		if ( containerId !== sourceObj.containerId ){
			props.dispatch(pushCard(sourceObj));
		}
		return {
			containerId: containerId
		};

	}
}

const Container = ({cards, containerId, connectDropTarget}) => (
    connectDropTarget(
    <div style={style}>
        {cards.map( (card, index) => {
        return (
          <Card content={card.content} key={card.id} index={index} containerId={containerId} card={card}/>
        )
      })}
    </div>
  )
)

function mapStateToProps(state) {
  // console.log(state); // state
  return {
    state: state
  }
}

Container = DropTarget("CARD", containerTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop()
}))(Container);
export default connect(mapStateToProps)(Container);
