import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import api from '../../services/api'; 

function Login() {

  let navigate = useNavigate(); 
  const [email_usuario, setEmail_usuario] = useState('');
  const [senha_usuario, setSenha_usuario] = useState('');

  function handleSubmit(event) { 
    event.preventDefault();
    logar();        
  } 
  async function logar() {         

   try {
      const dados = {
        email_usuario, 
        senha_usuario
      }
      const response = await api.post('/usuarios/login', dados); 
      // console.log(response.data);
      if (response.data.confirma == "Sucesso") {
          const objLogado = {
              "id_usuario": response.data.id_usuario, 
              "nome_usuario": response.data.nome_usuario, 
              "apelido_usuario": response.data.apelido_usuario, 
          };
          localStorage.clear();
          localStorage.setItem('user', JSON.stringify(objLogado));
          navigate('/'); 

      } else {
          alert('Erro: ' + response.data.message[0])
      }
      
  } catch (error) { 
      if (error.response) {
          alert(error.response.data.message);
      } else {
          alert(error);
      }  
   }               
  }

  return (
    <body style={{
            backgroundImage: `url("https://i.imgur.com/T0z0DfQ.png")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '104vh',
            marginTop: '-5vh',
            display: 'flex'
        }}>   

           <div className='login'>
            <form class="form" onSubmit={handleSubmit}>   

                  <div className="emaillog"> 
                    <input
                        type="text"
                        placeholder="E-mail" 
                        onChange={v => setEmail_usuario(v.target.value)} 
                        value={email_usuario}
                    />     
                  </div>

                  <div className="senhalog"> 
                    <input
                        type="password"
                        placeholder="Senha" 
                        onChange={v => setSenha_usuario(v.target.value)} 
                        value={senha_usuario}
                    />           
                  </div>

                   <div class="naotemumaconta">
                    <Link to='/usuarios'><h2 className='naotemumacontalink'>Não tem uma conta?</h2></Link>
                   </div>

                   <button type="submit" className='botaoentrarlog'>Entrar</button>
             </form>
             
            </div>
    </body>
  )
}

export default Login