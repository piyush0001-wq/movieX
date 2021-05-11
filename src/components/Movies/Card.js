import React from 'react'
import { img_300, unavailable } from '../../config'
import DisplayContent from '../Modal/DisplayContent'
import './cards.css'

function Card({ id, media_type, poster, name, date, vote_average }) {
  return (
    <DisplayContent className="cards" id={id} media_type={media_type}>

      <img src={poster ? `${img_300}/${poster}` : unavailable} alt={name} />
      <div className="title">
        <p>{vote_average}</p>
        <h4>{name}</h4>
        {/* <i class="fas fa-sort-up"></i> */}
      </div>

    </DisplayContent>
  )
}

export default Card
