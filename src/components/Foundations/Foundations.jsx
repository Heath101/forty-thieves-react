import React from 'react'
import Foundation from '../Foundation'

import './Foundations.css'

export default class Foundations extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className='Foundations'>
        {
          Array(8).fill().map((_, i) => {
            return <Foundation key={i} />
          })
        }
      </div>
    )
  }
}