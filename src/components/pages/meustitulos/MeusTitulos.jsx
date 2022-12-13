import React from 'react';
import './MeusTitulos.css';
import Menu from '../../menu/Menu';
import HeaderLogin from '../../headerlogin/Header_login';

function Meustitulos () {

  return (
    <div>
      <HeaderLogin/>
      <Menu/>
      
      <div className='conteudo'>
        <div className='meustitulos'>
        <h1> Meus títulos </h1>
          <div className="divbotoesetiqueta">
            <button className="botaoetiqueta"> Todos </button>
            <button className="botaoetiqueta"> Assistido </button>
            <button className="botaoetiqueta"> Assistindo </button>
            <button className="botaoetiqueta"> Quero assistir </button>
            <button className="botaoetiqueta"> Reassistindo </button>
          </div>
          <div className='divtitulos'>
            <img className='titulocard' src='https://i.imgur.com/4d7TNet.png'/>
            <img className='titulocard' src='https://i.imgur.com/oSXwzKE.png'/>
            <img className='titulocard' src='https://i.imgur.com/vcsr4TA.png'/>
            <img className='titulocard' src='https://i.imgur.com/pUxXoJK.png'/>
            <img className='titulocard' src='https://i.imgur.com/8fxx9EN.png'/>
            <img className='titulocard' src='https://i.imgur.com/tTc1xDb.png'/>
          </div>
          <div className='divtitulos'>
            <img className='titulocard' src='https://i.imgur.com/LdlOEWW.png'/>
            <img className='titulocard' src='https://i.imgur.com/PMNfqD1.png'/>
            <img className='titulocard' src='https://i.imgur.com/AsW5uFy.jpg'/>
            <img className='titulocard' src='https://i.imgur.com/ryCl0QY.jpg'/>
            <img className='titulocard' src='https://i.imgur.com/Ni4P3C2.png'/>
            <img className='titulocard' src='https://i.imgur.com/shqb2P6.png'/>
          </div>
          <div className='divtitulos'>
            <img className='titulocard' src='https://i.imgur.com/B5wwuJ4.png'/>
            <img className='titulocard' src='https://i.imgur.com/QDFcRWB.png'/>
            <img className='titulocard' src='https://i.imgur.com/VYy3TI0.jpg'/>
            <img className='titulocard' src='https://i.imgur.com/FlqQH8l.png'/>
            <img className='titulocard' src='https://i.imgur.com/w7snZoN.jpg'/>
            <img className='titulocard' src='https://i.imgur.com/OTPXU9a.png'/>
          </div>
          <div className='divtitulos'>
            <img className='titulocard' src='https://i.imgur.com/Y45Tdtg.png'/>
            <img className='titulocard' src='https://i.imgur.com/x1E5U3D.png'/>
            <img className='titulocard' src='https://i.imgur.com/cB6AyqC.png'/>
            <img className='titulocard' src='https://i.imgur.com/fQfXdgL.png'/>
            <img className='titulocard' src='https://i.imgur.com/dvD1RSt.png'/>
            <img className='titulocard' src='https://i.imgur.com/wpnAJ1o.png'/>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Meustitulos