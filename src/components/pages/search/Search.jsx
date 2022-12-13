import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import MovieCard from '../../moviecard/MovieCard';
import HeaderLogin from '../../headerlogin/Header_login';
import Menu from '../../menu/Menu';
import "./Search.css"

const searchURLMovie = 'https://api.themoviedb.org/3/search/movie/';
const searchURLTV = 'https://api.themoviedb.org/3/search/tv/';
const apiKey = 'api_key=7d3f51149d5de366981e065d4f1e64ee';

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  const query = searchParams.get("q");

   const getSearchedMovies = async (url, tipo) => {
    const res = await fetch(url);
    const data = await res.json();
    if (tipo === 'filme') {
      setMovies(data.results);
    } else {
      setSeries(data.results);
    }

  };

  useEffect(() => {
    const searchMovieWithQueryURL = `${searchURLMovie}?${apiKey}&query=${query}`;
    getSearchedMovies(searchMovieWithQueryURL, 'filme');

    const searchTVWithQueryURL = `${searchURLTV}?${apiKey}&query=${query}`;
    getSearchedMovies(searchTVWithQueryURL, 'serie');
  }, [query]);

  return (
    <div>
      <HeaderLogin/>
      <Menu/>
      <div className='Resultado'>
       <h1>Resultados obtidos para: <span className="query-text">{query}</span></h1>
      </div>

      <div className="titulospesquisa">
        {movies.length > 0 &&
          movies.map((movie, n) => n <= 10 ? <MovieCard key={movie.id} movie={movie} filme={true} /> : '')}

        {series.length > 0 &&
          series.map((movie, n) => n <= 10 ? <MovieCard key={movie.id} movie={movie} filme={false} /> : '')}
      </div>
    </div>
  );
};

export default Search;
