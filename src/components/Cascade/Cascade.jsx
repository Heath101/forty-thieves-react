import React from 'react'
import Card from '../Card'

import './Cascade.css'

export default class Cascade extends React.Component {
  render() {
    return (
    <div className='Cascade'>
      <Card value='3' suit='hearts'/>
    </div>
    )
  }
}