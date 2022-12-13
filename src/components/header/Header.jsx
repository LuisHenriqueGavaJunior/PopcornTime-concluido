import React from 'react'
import './Header.css';
import { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const [search, setSearch] = useState("");
  const [logado, setLogado] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        setLogado(true);
    }
  }, []); 

  function sair() {
    localStorage.clear(); 
    window.location.reload(true);
    navigate('/');
}

  return (
    <nav>
    <div className="Cabecalho">
    <Link to="/"> <img className='Pipoca' src="https://i.imgur.com/WiKnqrX.png"/> </Link>
    <Link to="/"> <h1 className="Popcorntime">POPCORN TIME</h1> </Link>

       <div className='Busca'>
        <form onSubmit={handleSubmit}> 
        <input className='Pesquisahome' 
           type="text" 
           placeholder="Pesquisar... " 
           onChange={(e) => setSearch(e.target.value)} 
           value={search}
           />
           <button className='Pesquisabotao' type="submit"> <img id='lupa' src='https://icones.pro/wp-content/uploads/2021/06/icone-loupe-noir.png'/> </button>
           </form>
       </div>

       <div>
        
        {
            logado ? <span className='Sair' onClick={() => sair()}>Sair</span> : <div>
                                                                                      <Link to="/usuarios/login"><button className='Entrar'> Entrar</button></Link>
                                                                                      <Link to='/usuarios'><button className='Cadastrar'>Cadastrar-se</button></Link>
                                                                                    </div>        
          }
       </div>
   </div>
   </nav>
   
  )
}

export default Header


