import React from 'react'
import Cascade from '../Cascade'

import './Cascades.css'

export default class Cascades extends React.Component {

  // componentDidMount() {
  //   this.cascades = 
  // }

  render() {
    const cascades = Array(10).fill().map((_, i) => (<Cascade key={i} /> ))
    return (
      <div className='Cascades'>
        { cascades }
      </div>
    )
  }
}