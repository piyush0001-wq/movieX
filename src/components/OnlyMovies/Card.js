import React from 'react'
import { img_300, unavailable } from '../../config'
import DisplayContent from '../Modal/DisplayContent'


function Card({ id, poster, title, date, description, vote_average }) {
  return (
    <DisplayContent className="cards" id={id} media_type={"movie"}>

      <img src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
      <div className="title">
        <p>{vote_average}</p>
        <h4>{title}</h4>
        {/* <i class="fas fa-sort-up"></i> */}
      </div>

    </DisplayContent>
  )
}

export default Card
