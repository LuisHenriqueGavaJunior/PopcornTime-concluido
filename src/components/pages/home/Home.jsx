import  React, {useEffect, useState} from 'react';
import './Home.css';
import Header from '../../header/Header'
import Menu from '../../menu/Menu';
import MovieCard from '../../moviecard/MovieCard';

const moviesURL = 'https://api.themoviedb.org/3/trending/movie/week'; 
const tvURL = 'https://api.themoviedb.org/3/trending/tv/week';
const apiKey = 'api_key=7d3f51149d5de366981e065d4f1e64ee';

export const Home = () => {

  const [topMovies, setTopMovies] = useState([]);
  const [topSeries, setTopSeries] = useState([]);

  const getTopRatedMovies = async (url, tipo) => {
    const res = await fetch(url);
    const data = await res.json(); 
    if (tipo === 'filme') {
      setTopMovies(data.results);
    } else {
      setTopSeries(data.results);
    }
    
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}?${apiKey}&language=pt-br`;
    // console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl, 'filme'); 

    const topTvUrl = `${tvURL}?${apiKey}&language=pt-br`;
    getTopRatedMovies(topTvUrl, 'serie');
    
  }, []);

  return (
    <div>
      
     <Header/>
     <Menu/>
      <div className="containerpag">
       <div className='Destaques'>
        <h1>Destaques do momento</h1>
       </div>
       <div className="movies-container">
          {
            topMovies.length > 0 &&
              topMovies.map((movie, n) => n <= 10 ? <MovieCard key={movie.id} movie={movie} filme={true} /> : '')
          }
          {
            topSeries.length > 0 &&
            topSeries.map((movie, n) => n <= 10 ? <MovieCard key={movie.id} movie={movie} filme={false} /> : '')
          }
       </div>
      </div>
    </div>
  )
}

export default Home