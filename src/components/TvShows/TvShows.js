import React from 'react'
import axios from 'axios'
import Card from './Card'
import CustomPagination from '../pagination/customPagination'
import './TvShows.css'


function TvShows() {

  const [page, setPage] = React.useState(1)
  const [tvShows, settvShows] = React.useState([])

  const fetchTvShows = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=21f176f25df157c836a68afa9a117781&language=en-US&page=${page}
`);
    settvShows(data.results)
  }

  React.useEffect(() => {
    fetchTvShows();
  }, [page])

  return (
    <div>

      <h2>Tv Shows</h2>
      <div className="TvShows" >
        {
          tvShows && tvShows.map((item) =>
            <Card key={item.id} id={item.id} poster={item.poster_path} name={item.name} date={item.first_air_date} vote_average={item.vote_average} description={item.overview} />
          )
        }
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  )
}

export default TvShows
