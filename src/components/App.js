import React, { Component } from 'react';
import './Index.css';
import { Button } from '@btag/bt-ui-library/';


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
const cardStyle = {
  height: 100,
  width: '80%',
  borderRadius: 5,
  border: '1px solid black',
  margin: '50px 10px 0px 10px',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column'
}

class Card extends Component {
  render() {
    const { content } = this.props;
    return (
      <div style={ (content !== null) ? cardStyle : {display: 'none'}}>{content}</div>
    )
  }
}

class Container extends Component {
  render() {
    const { cards } = this.props
    const propCards = cards.map( (card, index) => {
      return (
         <Card content={card.content} key={index} />
      )
    })

    return (
      <div style={style}>
        {propCards}
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      left: [{
        content: "hello",
        position: "left"
      }, {
        content: "aaaaa",
        position: "left"
      }],
      right: [{
        content: "hi",
        position: "right"
      }, {
        content: "wwww",
        position: "right"
      }]
    }
  }
  positionToLeft() {
    const rightContainerCards = this.state.right
    const leftContainerCards = this.state.left
    if (rightContainerCards.length > 0) {
      rightContainerCards[0].position = "left"
      this.setState({
        left: [...leftContainerCards, rightContainerCards[0]],
        right: [...rightContainerCards.slice(1)]
      })
    }
  }
  positionToRight() {
    const rightContainerCards = this.state.right
    const leftContainerCards = this.state.left
    if (leftContainerCards.length > 0) {
      leftContainerCards[0].position = "right"
      this.setState({
        left: [...leftContainerCards.slice(1)],
        right: [...rightContainerCards, leftContainerCards[0]]
      })
    }
  }
  render() {

    return (
    <div>
      <div className="row-flex vcenter hcenter" >
        <div className="desktop-1-of-2" style={{display: 'flex', textAlign: "center"}}>
          <Container cards={this.state.left}></Container>
          <Container cards={this.state.right}></Container>
        </div>
      </div>
      <div style={{textAlign:"center", margin: 10}}>
        <Button type="solid" onClick={ () => this.positionToLeft() }>&lt;</Button>
        <Button type="solid" onClick={ () => this.positionToRight() }>&gt;</Button>
      </div>

    </div>
    );
  }
}

export default App;
