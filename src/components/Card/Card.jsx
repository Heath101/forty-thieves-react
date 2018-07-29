import React from 'react'
import './Card.css'
import back from '../../images/back-default.png'

export default class Card extends React.Component {

  render() {
    return (
      <div className='Card'>
        <img src={back} alt="Logo" />
      </div>
    )
  }
}