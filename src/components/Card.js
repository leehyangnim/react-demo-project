import React from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import { removeCard, moveCard } from '../actions';
import { connect } from 'react-redux'

const cardSource = {
  beginDrag(props) {
    return {
      index: props.index,
      containerId: props.containerId,
      card: props.card
    }
  },
  endDrag(props, monitor) {
    const item = monitor.getItem();
		const dropResult = monitor.getDropResult();
    if ( dropResult && dropResult.containerId !== item.containerId ) {
      props.dispatch(removeCard(props))
    }
  }
}

const cardTarget = {
  hover(props, monitor, component) {
    // original index
    const dragIndex = monitor.getItem().index;
		// moved index
		const hoverIndex = props.index;
		const containerId = monitor.getItem().containerId;

    if (dragIndex === hoverIndex) {
			return;
		}

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
		// Get vertical middle
		const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

		// Determine mouse position
		const clientOffset = monitor.getClientOffset();

		// Get pixels to the top
		const hoverClientY = clientOffset.y - hoverBoundingRect.top;
		// Only perform the move when the mouse has crossed half of the items height
		// When dragging downwards, only move when the cursor is below 50%
		// When dragging upwards, only move when the cursor is above 50%

		// Dragging upwards
		if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
			return;
		}

		// Dragging downwards
		if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
			return;
		}

		// Time to actually perform the action
		// if ( props.containerId === containerId ) {
			props.dispatch(moveCard(props, dragIndex, hoverIndex));

			// Note: we're mutating the monitor item here!
			// Generally it's better to avoid mutations,
			// but it's good here for the sake of performance
			// to avoid expensive index searches.
			monitor.getItem().index = hoverIndex;
		// }

  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const cardStyle = {
  height: 100,
  width: '80%',
  borderRadius: 5,
  border: '1px solid black',
  margin: '20px',
  cursor: 'move',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
	alignItems: 'center',
	fontFamily: 'monospace'
}

const Card = ({content, connectDragSource, isDragging, connectDropTarget }) => (
   connectDragSource(connectDropTarget(
     <div style={ (content !== null) ?
         cardStyle : {display: 'none'}}>{content}
    </div>
 ))
)

function mapStateToProps(state) {
  // console.log(state); // state
  return {
    state: state
  }
}

const Card1 = DragSource("CARD", cardSource, collect)(Card);
Card = DropTarget("CARD", cardTarget, connect => ({
		connectDropTarget: connect.dropTarget()
	}))(Card1);
export default connect(mapStateToProps)(Card);
