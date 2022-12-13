import React from 'react'
import './MeuPerfil.css'
import { Link, useNavigate } from "react-router-dom";


export const Meuperfil = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>     
        <body>
        <div id="cabeçalho"></div>

        <div id="menucontainer">
    <ul id="menu-h">

        <li>
        <Link to="/"><h1 className='menutop'> Página inicial</h1></Link>
        </li>

        <li>
        <Link to="/comunidade"><h1 className='menutop'> Comunidade</h1></Link>
        </li>

        <li>
        <Link to="/chathistorico"><h1 className='menutop'>Chat</h1></Link>
        </li>

        <li>
        <Link to="/meustitulos"><h1 className='menutop'> Meus titulos</h1></Link>
        </li>

        <li>
          <Link to="/minhasavaliacoes"> <h1 className='menutop'>Minhas avaliações</h1></Link>
          
          </li>
        
          <li>
          <Link to="/ranking"><h1 className='menutop'> Ranking</h1></Link>
          
          </li>
        
    </ul>
</div>

        <h1 className="Userperfil">{user ? user.apelido_usuario : 'usuário'}</h1>

            <div id="pagcontainer">
              <div id="pefilcontainer">
                <div className="Perfil">
                  <img src="https://i.imgur.com/0qEvbYn.png"></img>
                </div>
                </div>
                <div id="edi">
                <Link to=""> <h1 className="editarperfil">Editar perfil</h1> </Link>
                </div>
                <div id="seguid">
                <Link to="/seguidores"><h1 className="seguidoresn">500</h1></Link>
                  <Link to="/seguidores"><h1 className="seguidores">Seguidores</h1></Link>
                </div>
                <div id="seguind">
                <Link to="/seguidores"><h1 className="seguindn">800</h1></Link>
                  <Link to="/seguidores"><h1 className="seguind">Seguindo</h1></Link>
                </div>
                <div id="biografia">
                <h1 className="biogra">@{user ? user.apelido_usuario : 'usuário'}</h1>
                  <h1 className="biogra">Gosto de filmes de terror</h1>
                  <h1 className="biogra">Novo no site</h1>
                  <h1 className="biogra">Procurando algumas recomendações</h1>
                  </div>
                  <div id="infosperf">
                  <h1 className="nasc">Nascido(a) em 24 de abril </h1>
                  <h1 className="nasc">Ingressou em 22 de agosto de 2023 </h1>
                </div>
                <div className="post1perf">
                  <div id="iconperf">
          <Link to="/meuperfil"><img class="user_fotoperf" src="https://i.imgur.com/ywLhj3f.png" /></Link>
          <Link to="/meuperfil"><h1 className="user_postperf">@user</h1></Link>
          </div>
        
          <div className='novopost'>
            <img className="icon_novopostperf" src='https://i.imgur.com/qN4TI8w.png'/>
            <h1 className="alt_textperf">fez uma nova atualização há 10 minutos</h1>
          </div>
        
          <img src="https://i.imgur.com/na2r649.jpg" className="cartazperf"/>

          <div className="statusperf">
            <img src="https://i.imgur.com/cphliPX.png" className="view" />
            <h3 className="view_txt">Assistiu: Brooklyn Nine-Nine</h3>
          </div>

        <div className="avaliacaoperf">
          <h3 className="txt_avaliacaoperf">Minha comédia favotita no momento. Essa mistura de comédia com policial é demais! Não consigo não rir com as falas do Jake e do Boyle, além do Capitão Holt sendo sério é tão engraçado. Muito bom!</h3>
        </div>
        
        <div className='iconesperf'>
          <img src="https://i.imgur.com/Tuylq42.png" className="coment"/>

        </div>

        <div className='iconesperfl'>
          <img src="https://i.imgur.com/lSc4532.png" className="coment"/>

        </div>

        <div className="post2perf">
                  <div id="iconperf">
          <Link to="/meuperfil"><img class="user_fotoperf" src="https://i.imgur.com/ywLhj3f.png" /></Link>
          <Link to="/meuperfil"><h1 className="user_postperf">@user</h1></Link>
          </div>
        
          <div className='novopost'>
            <img className="icon_novopostperf" src='https://i.imgur.com/qN4TI8w.png'/>
            <h1 className="alt_textperf">fez uma nova atualização há 10 minutos</h1>
          </div>
        
          <img src="https://i.imgur.com/oSXwzKE.png" className="cartazperf"/>

          <div className="statusperf">
            <img src="https://i.imgur.com/cphliPX.png" className="view" />
            <h3 className="view_txt">Está assistindo: Wednesday</h3>
          </div>

        <div className="avaliacaoperf">
          <h3 className="txt_avaliacaoperf">A Jenna Ortega está incrível nesse papel!</h3>
        </div>
        
        <div className='iconesperf'>
          <img src="https://i.imgur.com/Tuylq42.png" className="coment" onClick=""/>

        </div>

        <div className='iconesperfl'>
          <img src="https://i.imgur.com/lSc4532.png" className="coment"/>

        </div>
        </div>

        
      </div>
            </div>
        </body>

</div>
 )
}

export default Meuperfil