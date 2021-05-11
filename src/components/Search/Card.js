import React from 'react'
import { img_300, unavailable } from '../../config'
import './Card.css'


function Card({ er, title, poster, date, description, vote_average }) {
  return (
    <div>
      <div className="cards">

        <img src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
        <div className="title">
          <p>{vote_average}</p>
          <h4>{title}</h4>
          {/* <i class="fas fa-sort-up"></i> */}
        </div>

      </div>
    </div>
  )
}

export default Card
