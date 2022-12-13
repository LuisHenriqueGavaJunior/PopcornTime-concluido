import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import HeaderLogin from '../../headerlogin/Header_login';
import Menu from '../../menu/Menu';
import { FaStar } from "react-icons/fa";
import Modal from "react-modal";

import "./Movie.css";

const API_KEY  = 'api_key=7d3f51149d5de366981e065d4f1e64ee';
const API_BASE = 'https://api.themoviedb.org/3/movie/'; 
const API_TV = 'https://api.themoviedb.org/3/tv/'; 
const API_IMAGE = 'https://image.tmdb.org/t/p/w500/'

const Movie = () => {
  const { id } = useParams(); 
  const { filme } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    setMovie(data);
  };

  Modal.setAppElement("#root");

  useEffect(() => {
    let movieUrl;
    if (filme == 'true') {
      movieUrl = `${API_BASE}${id}?language=pt-BR&${API_KEY}`;
    } else {
      movieUrl = `${API_TV}${id}?language=pt-BR&${API_KEY}`;
    }    
    getMovie(movieUrl);
  }, []);

  //Modal resenha
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
     <HeaderLogin/>
     <div className="menu"> <Menu/> </div>
     <Link to="/"> <img src="https://i.imgur.com/pC5Et3d.png" className="setavoltar"/> </Link>

      <div className="conteudofilme">
         {movie && (
           <>
           <div className="areazul">

           <img src="https://i.imgur.com/ekOHYcX.png" className="iconedosfavoritos"/> 

            <div className="nome">
              <h2 className="nomefilme"> {movie.title} {movie.name} </h2>    
            </div>
             
              <div className="ftcatalogo">
              <img className='imgtitulo' src={API_IMAGE + movie.poster_path} alt={movie.title} movie={movie} />
              </div>

              <div className="dados">
                
                <h2 className="generosenota"> {
                movie.genres && movie.genres.slice(0, 4).map((genre, i) => (
                <span key={i}> {genre.name + ' | '}</span>
                ))}
                   <FaStar className="estrela" /> Avaliação: {movie.vote_average}
                </h2>                

                <div className="descricao"> {movie.overview} </div>

              <p className="adicione"> Adicione à sua lista </p>
                <div className="divbotoesfilmeetiqueta">
                 <button className="botaofilmeetiqueta">Assistido</button>
                 <button className="botaofilmeetiqueta">Assistindo</button>
                 <button className="botaofilmeetiqueta">Quero Assistir</button>
                 <button className="botaofilmeetiqueta">Reassistindo</button>
              </div>

              <div>
              <img src="https://i.imgur.com/Q9IKuUe.png" className="iconedaresenha" onClick={openModal}/>

               <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName="modal-overlay"
                className="modal-content"
                >

              {/* conteúdo do modal */}
                  <form>
                    <textarea
                     type= 'text'
                     className="inputresenha"
                     placeholder="Escrever resenha..." 
                     cols="40"
                     rows="5"
                     maxlength="1000"
                    />
              <div className="botoesresenhadiv">
               <button className="botoesresenha" onClick={closeModal}>Cancelar</button>
               <button className="botoesresenha" onClick={closeModal}>Salvar</button>
              </div> 
              </form>
              </Modal>
              </div>

              </div>
              </div>
           </>
    )}

  </div>
  </div>
  );
};

export default Movie;