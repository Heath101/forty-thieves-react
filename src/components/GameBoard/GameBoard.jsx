import React from 'react'

import Foundations from '../Foundations'
import PlayArea from '../PlayArea'
import Cascades from '../Cascades'

import Deck from '../Deck'

import './GameBoard.css'

export default class GameBoard extends React.Component {

  constructor(props) {
    super(props)
    const deck = Deck.shuffle(Deck.generate(2))
    this.state = {
      deck,
      cascadeCards: [],
      playAreaCards: []
    }
  }

  componentDidMount() {
    const cascadeCards = this.state.deck.splice(0,40)
    const playAreaCards = this.state.deck

    this.setState({
      cascadeCards, playAreaCards
    })
  }

  render() {
    return (
      <div className='GameBoard'>
        <Foundations cards={[]} />
        <PlayArea cards={this.state.playAreaCards} />
        <Cascades cards={this.state.cascadeCards}/>
      </div>
    )
  }
}