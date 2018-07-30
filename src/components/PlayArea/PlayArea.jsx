import React from 'react'
import Card from '../Card'

import './PlayArea.css'

export default class PlayArea extends React.Component {

  render() {
    if (this.props.cards.length === 0) return null
    console.log(this.props)
    const { cards } = this.props
    const card = cards[0]
    return (
      <div className='PlayArea'>
        <Card value={card.value} suit={card.suit} />
      </div>
    )
  }
}