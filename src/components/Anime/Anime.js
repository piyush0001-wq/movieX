import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from './Card'
import './Anime.css'

function Anime() {

  const [animeData, setAnimeData] = useState([])




  const fetchAnime = async () => {
    const { data } = await axios.get(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
      ;

    setAnimeData(data.top)
  }

  useEffect(() => {
    fetchAnime();
  }, [])

  return (
    <div>
      <h1 className="heading">TOP ANIME</h1>
      <div className="anime">
        {
          animeData && animeData.map((anme) => <Card
            title={anme.title}
            image_url={anme.image_url}
            rank={anme.rank}
            score={anme.score}
            start_date={anme.start_date}
            type={anme.type}
            end_date={anme.end_date}
            url={anme.url}
          />)
        }

      </div>
    </div>
  )
}

export default Anime
