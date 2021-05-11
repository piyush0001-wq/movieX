import { Switch, Route, Router } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Anime from './components/Anime/Anime';
import Header from './components/header/Header'
import Trending from './components/Movies/Trending'
import OnlyMovies from './components/OnlyMovies/OnlyMovies'
import Search from './components/Search/Search';
import TvShows from './components/TvShows/TvShows';

function App() {


  return (


    <BrowserRouter>
      <div className="App">
        <h1 className="title">
          <Link className="title_link" to='/'>movieX </Link>
        </h1>
        <Header />
        <div className="search">

          <p >
            <Link className="link" to='/search'>Search more <i class="fas fa-search"></i></Link>
          </p>

          <div className="searchType">
            <p >
              <Link className="link" to='/anime'>Anime</Link>
            </p>
            <p >
              <Link className="link" to='/movies'>Movies</Link>
            </p>
            <p >
              <Link className="link" to='/tvshows'>Tv Shows</Link>
            </p>

          </div>
        </div>

        <Switch>



          <Route path='/' component={Trending} exact />
          <Route path='/anime' component={Anime} exact />
          <Route path='/search' component={Search} exact />
          <Route path='/movies' component={OnlyMovies} exact />
          <Route path='/tvshows' component={TvShows} exact />

        </Switch>



      </div>
    </BrowserRouter>
  );
}

export default App;
