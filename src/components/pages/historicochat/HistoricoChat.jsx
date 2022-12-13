import React from 'react'
import HeaderLogin from '../../headerlogin/Header_login';
import Menu from '../../menu/Menu';
import './HistoricoChat.css';
import { Link } from 'react-router-dom';

export const HistoricoChat = () => {
  return (
    <div>
      <HeaderLogin/>
      
      <div className='conteudo'>
        <Menu/>

        <Link to="/chat"><img src="https://i.imgur.com/FVj2MKo.png" className="icon_user1"/></Link>
        <Link to="/chat"><h1 className="nome_user1">Nome do usuário 1</h1></Link>
        <h1 className="status1">Online</h1>

        <Link to="/chat"><img src="https://i.imgur.com/FVj2MKo.png" className="icon_user2"/></Link>
        <Link to="/chat"><h1 className="nome_user2">Nome do usuário 2</h1></Link>
        <h1 className="status2">Última vez visto: há 2 semanas</h1>

        <Link to="/chat"><img src="https://i.imgur.com/FVj2MKo.png" className="icon_user3"/></Link>
        <Link to="/chat"><h1 className="nome_user3">Nome do usuário 3</h1></Link>
        <h1 className="status3">Online</h1>

        <Link to="/chat"><img src="https://i.imgur.com/FVj2MKo.png" className="icon_user4"/></Link>
        <Link to="/chat"><h1 className="nome_user4">Nome do usuário 4</h1></Link>
        <h1 className="status4">Última vez visto: há 3 horas</h1>
    
        <Link to="/chat"><img src="https://i.imgur.com/FVj2MKo.png" className="icon_user5"/></Link>
        <Link to="/chat"><h1 className="nome_user5">Nome do usuário 5</h1></Link>
        <h1 className="status5">Última vez visto: há 10 minutos</h1>

        <Link to="/chat"><img src="https://i.imgur.com/FVj2MKo.png" className="icon_user6"/></Link>
        <Link to="/chat"><h1 className="nome_user6">Nome do usuário 6</h1></Link>
        <h1 className="status6">Última vez visto: agora mesmo</h1>

        <Link to="/chat"><img src="https://i.imgur.com/FVj2MKo.png" className="icon_user7"/></Link>
        <Link to="/chat"><h1 className="nome_user7">Nome do usuário 7</h1></Link>
        <h1 className="status7">Última vez visto: 4 dias</h1>

        <Link to="/chat"><img src="https://i.imgur.com/FVj2MKo.png" className="icon_user8"/></Link>
        <Link to="/chat"><h1 className="nome_user8">Nome do usuário 8</h1></Link>
        <h1 className="status8">Online</h1>

        <Link to="/chat"><img src="https://i.imgur.com/FVj2MKo.png" className="icon_user9"/></Link>
        <Link to="/chat"><h1 className="nome_user9">Nome do usuário 9</h1></Link>
        <h1 className="status9">Última vez visto: há 7 horas</h1>

        <Link to="/chat"><img src="https://i.imgur.com/FVj2MKo.png" className="icon_user10"/></Link>
        <Link to="/chat"><h1 className="nome_user10">Nome do usuário 10</h1></Link>
        <h1 className="status10">Última vez visto: há 19 minutos</h1>
      </div>
      
      
      
    </div>
  )  
}

export default HistoricoChat