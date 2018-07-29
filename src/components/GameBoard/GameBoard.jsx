import React from 'react'
import PropTypes from 'prop-types'
import './GameBoard.css'

export default class GameBoard extends React.Component {
  render() {
    return (
      <div className='GameBoard'>
        {this.props.title}
      </div>
    )
  }
}

GameBoard.propTypes = {
  title: PropTypes.string.isRequired
}