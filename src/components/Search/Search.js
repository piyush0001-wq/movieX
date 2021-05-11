import axios from 'axios';
import React from 'react'
import Card from './Card';
import './Search.css'
import CustomPagination from '../pagination/customPagination'

function Search() {

  const [searchInput, setSearchInput] = React.useState('');
  const [page, setPage] = React.useState(1)
  const [searchResult, setSearchResult] = React.useState([])
  const [showPagination, setshowPagination] = React.useState(false)

  const fetchSearches = async () => {


    const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=21f176f25df157c836a68afa9a117781&language=en-US&query=${searchInput}&page=${page}&include_adult=false`);

    setSearchResult(data.results)
    setshowPagination(true)
  }

  React.useEffect(() => {
    fetchSearches();
  }, [page])

  return (
    <div>
      <div className="input">
        <input type="text" className="searchInput" placeholder="search..." onChange={(e) => setSearchInput(e.target.value)} />
        <p onClick={fetchSearches}><i class="fas fa-search"></i></p>
      </div>

      <div className="search">
        {
          searchResult && searchResult.map((item) =>
            <Card key={item.id} id={item.id} poster={item.poster_path} title={item.title} date={item.release_date} vote_average={item.vote_average} description={item.overview} />
          )
        }
      </div>
      {
        showPagination ? <CustomPagination setPage={setPage} /> : null
      }

    </div>
  )
}

export default Search
