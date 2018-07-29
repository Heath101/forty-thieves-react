import React from 'react'
import PropTypes from 'prop-types'

import Foundations from '../Foundations'
import PlayArea from '../PlayArea'
import Cascades from '../Cascades'

import './GameBoard.css'

export default class GameBoard extends React.Component {
  render() {
    return (
      <div className='GameBoard'>
        <Foundations />
        <PlayArea />
        <Cascades />
      </div>
    )
  }
}