import React from 'react';
import './Menu.css'
import { Link } from 'react-router-dom';


function Menu() {
    return (
<nav className="dp-menu">
<ul>
    <li> <a href="#"> Menu <img className="barras" src="https://i.imgur.com/fmknZ4S.png"/> </a>
        <ul>
            <li> <Link to="/"> <img className="seta" src="https://i.imgur.com/IG0chkd.png"/> Página inicial </Link> </li>
            <li> <Link to="/comunidade"> <img className="seta" src="https://i.imgur.com/IG0chkd.png"/> Comunidade </Link> </li>
            <li> <Link to="/meuperfil">  <img className="seta" src="https://i.imgur.com/IG0chkd.png"/> Meu perfil </Link> </li>
            <li> <Link to="/chathistorico"> <img className="seta" src="https://i.imgur.com/IG0chkd.png"/> Chat </Link> </li>
            <li> <Link to="/meustitulos"> <img className="seta" src="https://i.imgur.com/IG0chkd.png"/> Meus títulos </Link> </li>
            <li> <Link to="/minhasavaliacoes"> <img className="seta" src="https://i.imgur.com/IG0chkd.png"/> Minhas avaliações </Link> </li>
            <li> <Link to="/ranking"> <img className="seta" src="https://i.imgur.com/IG0chkd.png"/> Ranking </Link> </li>
        </ul>
    </li>
</ul>
</nav>
    )
}

export default Menu




