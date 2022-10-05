import React from 'react'
import '../css/Card.css'

const Card = props => {
  return (
    <div className="Card">
        <div className="title">{props.title}</div>
        <div className="info">{props.info}</div>
    </div>
  )
}

export default Card;