import { Link } from "react-router-dom";

import './MovieCard.css';

const imagesURL = 'https://image.tmdb.org/t/p/w500/';

const MovieCard = ({ movie, filme, showLink = true }) => {
  return (
    <div className="movieRow">            
      <div className="movieRow--listarea">

      <div className="movieRow--item">
        <table className="tabelamovie">
          <tbody>
            <tr>
          
              <td> 
               {showLink && <Link to= {`/movie/${movie.id}/${filme}`}> <img src={imagesURL + movie.poster_path} alt={movie.title} /> </Link>}
              </td>

              <td> 
              {showLink && <Link to= {`/movie/${movie.id}/${filme}`}> <h1> <div> {movie.original_name} </div> <div> {movie.original_title} </div> </h1> </Link>}
                <br/> <div data-expandable> <h2 data-expand-text> {movie.overview.substring(0, 300)}... </h2>   </div>
              </td>

            </tr>
          </tbody>
        </table>
        </div>

      </div>
      </div>
  );
};

export default MovieCard;
