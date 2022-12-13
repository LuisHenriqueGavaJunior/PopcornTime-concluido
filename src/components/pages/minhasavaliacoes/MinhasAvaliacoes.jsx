import React from 'react'
import './minhasavaliacoes.css';
import HeaderLogin from '../../headerlogin/Header_login';
import Menu from '../../menu/Menu';
import { Link } from 'react-router-dom';

export const Minhasavaliacoes = () => {
  return (
    <div>
        <HeaderLogin/>
        <Menu/>
        
        <div className='conteudo'>
        <div>
        <Link to="/"> <img className="seta_voltar" src="https://i.imgur.com/0XdoBhg.png"/> </Link>
            <h1 className="titulo">Minhas Avaliações</h1>
        </div>
          
        <div>
            <img className="icon_amei" src="https://i.imgur.com/h2wwIZS.png"/>
            <h2 className="amei">Favoritos</h2>
              
            <img className="icon_review" src="https://i.imgur.com/RcLeXr3.png"/>
            <h2 className="review">Resenhas</h2>
        </div>

        <div className="caixa_favs">
            <div className="filme">
                <a href="#"><img className="cartaz1" src="https://i.imgur.com/VYy3TI0.jpg"/></a>
                <a href="#"><h1 className="titulo_filme">Doutor Estranho no Multiverso da Loucura</h1></a>
                <h3 className="sinopse_movie">Doutor Estranho, com a ajuda de aliados místicos antigos e novos, atravessa as perigosas realidades alternativas e alucinantes do Multiverso para enfrentar um novo adversário misterioso.</h3>
            </div>   
            
            <div className="filme2">
                <a href="#"><img className="cartaz2" src="https://i.imgur.com/w7snZoN.jpg"/></a>
                <h1 className="titulo_filme">Morte no Nilo</h1>
                <h3 className="sinopse_movie">Durante suas férias no Egito, Hercule Poirot precisa investigar o misterioso assassinato de uma jovem herdeira a bordo de uma embarcação no rio Nilo.</h3>
            </div>

            <div className="filme3">
                <a href="#"><img className="cartaz3" src="https://i.imgur.com/AsW5uFy.jpg"/></a>
                <h1 className="titulo_filme">O Batman</h1>
                <h3 className="sinopse_movie">Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.</h3>
            </div> 

            <div className="filme4">
                <a href="#"><img className="cartaz4" src="https://i.imgur.com/ryCl0QY.jpg"/></a>
                <h1 className="titulo_filme">Coraline e o Mundo Secreto</h1>
                <h3 className="sinopse_movie">Entediada em sua nova casa, a pequena Coraline descobre uma porta secreta que contém um mundo parecido com o dela, porém melhor em muitas maneiras. Coraline se encanta com a descoberta, mas logo descobre que há algo de ...</h3>
            </div>
        </div>

        <div className="caixa_resen">
            <div className="resenha1">
                <a href="#" className="link"><h1 className="titulo_resenha">Encanto</h1></a>
                <h2 className="texto_resenha">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur perferendis necessitatibus consectetur earum repudiandae et libero. Voluptatum fuga quas qui quo minus. Saepe illo quisquam similique voluptatum animi quo.</h2>
            </div>

            <div className="resenha2">
                <a href="#" className="link"><h1 className="titulo_resenha">Titanic</h1></a>
                <h2 className="texto_resenha">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur perferendis necessitatibus consectetur earum repudiandae et libero. Voluptatum fuga quas qui quo minus. Saepe illo quisquam similique voluptatum animi quo.</h2>
            </div>

            <div className="resenha3">
                <a href="#" className="link"><h1 className="titulo_resenha">Cavaleiro da Lua</h1></a>
                <h2 className="texto_resenha">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur perferendis necessitatibus consectetur earum repudiandae et libero. Voluptatum fuga quas qui quo minus. Saepe illo quisquam similique voluptatum animi quo.</h2>
            </div>

            <div className="resenha4">
                <a href="#" className="link"><h1 className="titulo_resenha">Stranger Things</h1></a>
                <h2 className="texto_resenha">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur perferendis necessitatibus consectetur earum repudiandae et libero. Voluptatum fuga quas qui quo minus. Saepe illo quisquam similique voluptatum animi quo.</h2>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Minhasavaliacoes