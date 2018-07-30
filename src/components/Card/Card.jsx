import React from 'react'
import './Card.css'
import back from '../../images/back-default.png'

class Card extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showing: false
    }
  }

  onClick() {
    this.setState({showing: !this.state.showing})
  }

  render() {
    const { value, suit } = this.props
    const { showing } = this.state

    const src = showing ? `images/cards/default/${value}_of_${suit}.png` : back

    return (
      <div className='Card' onClick={(e) => this.onClick()}>
        <img src={src} />
      </div>
    )
  }
}

export default Card