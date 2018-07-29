import React from 'react'
import Cascade from '../Cascade'

import './Cascades.css'

export default class Cascades extends React.Component {
  render() {
    return (
      <div className='Cascades'>
        <Cascade />
        <Cascade />
        <Cascade />
        <Cascade />
        <Cascade />
        <Cascade />
        <Cascade />
      </div>
    )
  }
}