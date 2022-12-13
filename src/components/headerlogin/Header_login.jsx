import React from 'react'
import './Header_login.css';
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav>
    <div className="Cabecalho">
    <Link to="/"> <img className='Pipoca' src="https://i.imgur.com/WiKnqrX.png"/> </Link>
    <Link to="/"> <h1 className="Popcorntime">POPCORN TIME</h1> </Link>

       <div className='Busca'>
        <form onSubmit={handleSubmit}> 
        <input className='Pesquisa' 
           type="text" 
           placeholder="Pesquisar... " 
           onChange={(e) => setSearch(e.target.value)} 
           value={search}
           />
           <button className='Pesquisabotao' type="submit"> <img id='lupa' src='https://icones.pro/wp-content/uploads/2021/06/icone-loupe-noir.png'/> </button>
           </form>
       </div>

       <div>
       <Link to="/meuperfil"><h1 className='user_header'>{user ? user.apelido_usuario : 'usuário'}</h1></Link>
       <Link to='/meuperfil'><img src="https://i.imgur.com/ywLhj3f.png" className='ft_header'/></Link>
       </div>
   </div>
   </nav>
   
  )
}

export default Header


