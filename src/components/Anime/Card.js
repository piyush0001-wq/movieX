import React from 'react'

import './Card.css'


function Card({ title, image_url, rank, score, start_date, type, end_date, url }) {
  return (
    <div >
      <div className="anime_card">
        <img src={image_url} alt={title} />
        <p className="rating">{score}</p>
        <h3>{title}</h3>
        <div className="description">
          <p><span>Rank : </span>{rank}</p>
          <p>{type}</p>
        </div>
        <div className="dates">
          <p>{start_date}</p>
          -
          <p>{end_date}</p>
        </div>
      </div>

    </div>
  )
}

export default Card
