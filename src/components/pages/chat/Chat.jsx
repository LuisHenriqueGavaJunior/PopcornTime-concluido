import React from 'react';
import './Chat.css';
import { Link } from 'react-router-dom'
 
function Chat () {
  return (
    <div>
      <div className="header"> 
        <Link to="/"> <img src="https://i.imgur.com/0XdoBhg.png" className="voltar"/> </Link>
        <img src="https://i.imgur.com/FVj2MKo.png" className="foto_usu"/>
        <h1 className="usu">Usuário</h1>   
        <h3 className="online">online</h3>
        <a href="#" className="pontos"> <img src="https://i.imgur.com/hSTiRsm.png"/> </a>
        <img src="https://i.imgur.com/fepGYLQ.png" className="phone"/>
    </div>

      <div className="caixa_data"> <h1 className="txt_data">ontem</h1> </div>

      <div className="mensagem_azul1">
        <h3 className="msn1">Oii! Não sabia que vc estava usando o PopCorn tbm.</h3>
        <h5 className="hora1">14:35</h5>
      </div>

      <div className="mensagem_verm1">
        <h3 className="msn2">Oee! baixei faz poucos dias kkkk estou me adaptando ainda.</h3>
        <h5 className="hora2">14:50</h5>
      </div>

      <div className="mensagem_azul2">
        <h3 className="msn3">Oq vc está achando dele?</h3>
        <h5 className="hora3">15:20</h5>
      </div>

      <div className="mensagem_verm2">
        <h3 className="msn4">No começo achei que seria complexo, mas ele é um app simples de entender e bastante completo. Estou gostando muito!!</h3>
        <h5 className="hora4">15:30</h5>
      </div>

      <div className="foother">
        <form>
        <input classNameName='digite' type="text" name="" className="digite"/> 
        <div>
          <a href="#"> <img src="https://i.imgur.com/KaunIEy.png" className="emoji"/> </a>
          <a href="#"> <img src="https://i.imgur.com/NuCk363.png" className="anexo"/> </a>
          <a href="#"> <img src="https://i.imgur.com/ARXdGEe.png" className="camera"/> </a>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Chat