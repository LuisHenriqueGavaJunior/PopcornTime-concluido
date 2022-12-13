import React from 'react'
import './Seguindo.css';
import HeaderLogin from '../../headerlogin/Header_login';
import { Link } from 'react-router-dom';


export const Seguindo = () => {
  return (
    <div>
    <HeaderLogin/>

    <div className='conteudo'>

    <Link to="/meuperfil"><img src="https://i.imgur.com/0XdoBhg.png" className="flexavoltar"/></Link>
        
    <div className="caixa1">
      <h1 className="seg3"><Link to="/seguidores" className="link_seguindo">500 Seguidores</Link></h1>
      <h1 className="seg4">800 Seguindo</h1>
    </div>

    <div> 
      <div className='seguidor1'>
        <img src="https://i.imgur.com/cRXXdYy.png" className="seg_icon"/>
        <h6 className="seg_nome">Nome do usuário 1</h6>
        <h6 className="seg_usu">usuário</h6>
        <button className="botao_seguindo">Seguindo</button>
      </div>

      <div className='seguidor2'>
        <img src="https://i.imgur.com/cRXXdYy.png" className="seg_icon"/>
        <h6 className="seg_nome">Nome do usuário 2</h6>
        <h6 className="seg_usu">usuário</h6>
        <button className="botao_seguindo">Seguindo</button>
      </div>

      <div className='seguidor3'>
        <img src="https://i.imgur.com/cRXXdYy.png" className="seg_icon"/>
        <h6 className="seg_nome">Nome do usuário 3</h6>
        <h6 className="seg_usu">usuário</h6>
        <button className="botao_seguindo">Seguindo</button>
      </div>

      <div className='seguidor4'>
        <img src="https://i.imgur.com/cRXXdYy.png" className="seg_icon"/>
        <h6 className="seg_nome">Nome do usuário 4</h6>
        <h6 className="seg_usu">usuário</h6>
        <button className="botao_seguindo">Seguindo</button>
      </div>

      <div className='seguidor5'>
        <img src="https://i.imgur.com/cRXXdYy.png" className="seg_icon"/>
        <h6 className="seg_nome">Nome do usuário 5</h6>
        <h6 className="seg_usu">usuário</h6>
        <button className="botao_seguindo">Seguindo</button>
      </div>
    </div>
    </div>
  </div>
  )  
}

export default Seguindo