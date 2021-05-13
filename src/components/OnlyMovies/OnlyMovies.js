import axios from 'axios';
import React from 'react'
import CustomPagination from '../pagination/customPagination'
import Card from './Card'
import './OnlyMpvies.css'

function OnlyMovies() {
  const [page, setPage] = React.useState(1)
  const [onlymovies, setonlyMovies] = React.useState([])

  const fetchOnlyMovies = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=yourAPI&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}
`);
    setonlyMovies(data.results)
  }

  React.useEffect(() => {
    fetchOnlyMovies();
  }, [page])

  return (
    <div>

      <h2>Movies</h2>
      <div className="OnlyMovies" >
        {
          onlymovies && onlymovies.map((item) =>
            <Card key={item.id} id={item.id} poster={item.poster_path} title={item.title} date={item.release_date} vote_average={item.vote_average} description={item.overview} />
          )
        }
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  )
}

export default OnlyMovies
