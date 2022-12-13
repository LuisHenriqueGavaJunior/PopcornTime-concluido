import { useState } from 'react'
import './comunidade.css';
import HeaderLogin from '../../headerlogin/Header_login';
import Menu from '../../menu/Menu';
import { Link } from 'react-router-dom';
import api from '../../services/api'; 


function Comunidade () {

  const user = JSON.parse(localStorage.getItem('user'));
  const date = new Date().toLocaleDateString();
  const usupost = user ? user.id_usuario : '0';

  const [id_usuario, setId_usuario] = useState(''); 
  const [data_post, setData_post] = useState(''); 
  const [texto_post, setTexto_post] = useState(''); 
  console.log(texto_post)

  async function post() {
    try {
      const dados = {
        id_usuario, data_post, texto_post
      }
      const response = await api.post('post', dados);
    } catch (err) {        
        console.log('Erro: ' + err); 
    }    
  }


return (
  <div>
    <HeaderLogin/>
    <Menu/>

    <div className='conteudo'>
      <div>
      <div>
        <form>
          <textarea 
          type='text' 
          className='inputpostagem' 
          placeholder='Escreva uma mensagem...' 
          onChange={v => setTexto_post(v.target.value)} 
          maxLength={425}
          />

          <div className='botoespostnovo'>
            <button className="botaosave">Salvar</button>
            <button className="botaocancel">Cancelar</button>
          </div> 
          </form>
      </div>

      <div className="post1">
        <Link to="/meuperfil"><img class="user_foto" src="https://i.imgur.com/ywLhj3f.png" /></Link>
        <Link to="/meuperfil"><h1 className="user_post">@user</h1></Link>
        
        <div className='novopost'>
          <img className="icon_novopost" src='https://i.imgur.com/qN4TI8w.png'/>
          <h1 className="alt_text">fez uma nova atualização há 10 minutos</h1>
        </div>
        
        <img src="https://i.imgur.com/na2r649.jpg" className="cartaz"/>

        <div className="status">
          <img src="https://i.imgur.com/cphliPX.png" className="view" />
          <h3 className="view_txt">Assistiu: Brooklyn Nine-Nine</h3>
        </div>

        <div className="avaliacao">
          <h3 className="txt_avaliacao">Minha comédia favotita no momento. Essa mistura de comédia com policial é demais! Não consigo não rir com as falas do Jake e do Boyle, além do Capitão Holt sendo sério é tão engraçado. Muito bom!</h3>
        </div>
        
        <div className='icones'>
          <img src="https://i.imgur.com/Tuylq42.png" className="coment"/>
          <img src="https://i.imgur.com/lSc4532.png" className="like"/>
        </div>
      </div>

      <div className="post2">
        <Link to="/meuperfil"><img class="user_foto" src="https://i.imgur.com/ywLhj3f.png" /></Link>
        <Link to="/meuperfil"><h1 className="user_post">@user</h1></Link>
        
        <div className='novopost'>
          <img className="icon_novopost" src='https://i.imgur.com/qN4TI8w.png'/>
          <h1 className="alt_text">fez uma nova atualização há 24 minutos</h1>
        </div>
        
        <img src="https://i.imgur.com/oSXwzKE.png" className="cartaz"/>

        <div className="status">
          <img src="https://i.imgur.com/cphliPX.png" className="view" />
          <h3 className="view_txt">Está assistindo: Wednesday</h3>
        </div>

        <div className="avaliacao">
          <h3 className="txt_avaliacao">A Jenna Ortega está incrível nesse papel!</h3>
        </div>
        
        <div className='icones'>
          <img src="https://i.imgur.com/Tuylq42.png" className="coment" />
          <img src="https://i.imgur.com/lSc4532.png" className="like" />
        </div>

        <div class="resposta">
          <Link to="/meuperfil"><img src="https://i.imgur.com/ywLhj3f.png" class="usu_coment"/></Link>
          <Link to="/meuperfil"><h1 class="user_coment">@user</h1></Link>
          <h3 class="respt_txt">Um dos filmes mais emocionantes que já assisti, meu favoritooo!</h3>
        </div>
      </div>

      <div className="post3">
        <Link to="/meuperfil"><img class="user_foto" src="https://i.imgur.com/ywLhj3f.png" /></Link>
        <Link to="/meuperfil"><h1 className="user_post">@user</h1></Link>
        
        <div className='novopost'>
          <img className="icon_novopost" src='https://i.imgur.com/qN4TI8w.png'/>
          <h1 className="alt_text">fez uma nova atualização há 1 hora</h1>
        </div>
        
        <img src="https://i.imgur.com/FlqQH8l.png" className="cartaz"/>

        <div className="status">
          <img src="https://i.imgur.com/cphliPX.png" className="view" />
          <h3 className="view_txt">Quer assistir: Annabelle</h3>
        </div>

        <div className="sinopse">
          <h3 className="txt_sinopse2">Um casal se prepara para a chegada de sua primeira filha e compra para ela uma boneca. Quando sua casa é invadida por membros de uma seita, o casal é violentamente atacado e a boneca, Annabelle, se torna recipiente de uma entidade do mal.</h3>
        </div>
        
        <div className='icones'>
          <img src="https://i.imgur.com/Tuylq42.png" className="coment" />
          <img src="https://i.imgur.com/lSc4532.png" className="like" />
        </div>
      </div>
      </div>
    </div>
  </div>


)}

export default Comunidade