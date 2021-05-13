import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from '../Movies/Card'
import CustomPagination from '../pagination/customPagination'
import './trending.css'

function Trending() {
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([])

  const fetchMovies = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=yourAPI&page=${page}
`);
    setMovies(data.results)
  }

  useEffect(() => {
    fetchMovies();
  }, [page])


  return (
    <div>

      <h2>TRENDING</h2>
      <div className="trending">
        {
          movies && movies.map((item) =>
            <Card key={item.id} id={item.id} media_type={item.media_type} poster={item.poster_path} name={item.name || item.title} date={item.release_date || item.first_air_date} media_type={item.media_type} vote_average={item.vote_average} />
          )
        }
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  )
}

export default Trending
