import React from 'react'
import './Cadastro.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api'; 

const Cadastro = () => {

    let navigate = useNavigate(); 

    const [email_usuario, setEmail_usuario] = useState(''); 
    const [nome_usuario, setNome_usuario] = useState(''); 
    const [senha_usuario, setSenha_usuario] = useState(''); 
    const [apelido_usuario, setApelido_usuario] = useState('');
    const [data_nasc_usuario, setData_nasc_usuario] = useState(''); 

    const [confSenha, setConfSenha] = useState('');
    
    // validações
    const [valEmail, setValEmail] = useState('form-control');
    const [errEmail, setErrEmail] = useState(''); 
    const [valNome, setValNome] = useState('form-control');
    const [errNome, setErrNome] = useState(''); 
    const [valSenha, setValSenha] = useState('form-control');
    const [errSenha, setErrSenha] = useState(''); 
    const [valApelido, setValApelido] = useState('form-control');
    const [errApelido, setErrApelido] = useState(''); 
    const [valNascimento, setValNascimento] = useState('form-control');
    const [errNascimento, setErrNascimento] = useState(''); 
    const [valConfSenha, setValConfSenha] = useState('form-control');
    const [errConfSenha, setErrConfSenha] = useState('');
    
    function handleSubmit(event) { 
      const validado = valida();
      if(validado === true){
        CadastraUsu();
        navigate('/');
      }
      event.preventDefault();
  }

    function valida() {
     let validado = true;
  
    if (email_usuario === '') {
        setValEmail('form-control error');
        setErrEmail('O e-mail do usuário é obrigatório');
        validado = false; 
    } else if (!checkEmail(email_usuario)) {
        setValEmail('form-control error');
        setErrEmail('Insira um e-mail válido');
        validado = false; 
    } else {
        setValEmail('form-control success');
    }

    if (nome_usuario === '') {
      setValNome('form-control error'); 
      setErrNome('O nome do usuário é obrigatório');
      validado = false;
    } else if (nome_usuario.length < 5) {
      setValNome('form-control error'); 
      setErrNome('Insira o nome completo do usuário');
      validado = false;            
    } else {
      setValNome('form-control success')
    }

    if (senha_usuario === '') {
        setValSenha('form-control error'); 
        setErrSenha('O preenchimento da senha é obrigatório');
        validado = false;
    } else if (senha_usuario.length < 8) {
        setValSenha('form-control error'); 
        setErrSenha('A senha deve ter pelo menos 8 caracteres');
        validado = false;            
    } else {
        setValSenha('form-control success')
    }

    if (confSenha === '') {
        setValConfSenha('form-control error'); 
        setErrConfSenha('A confirmação da senha é obrigatória');
        validado = false;
    } else if (confSenha !== senha_usuario) {
        setValConfSenha('form-control error'); 
        setErrConfSenha('A senha e a confirmação devem ser iguais');
        validado = false;            
    } else {
        setValConfSenha('form-control success')
    }        

    if (apelido_usuario === '') {
      setValApelido('form-control error'); 
      setErrApelido('O apelido do usuário é obrigatório');
      validado = false;      
    } else {
      setValApelido('form-control success')
    }

    if (data_nasc_usuario === '') {
      setValNascimento('form-control error'); 
      setErrNascimento('A data de nascimento do usuário é obrigatório');
      validado = false;      
    } else {
      setValNascimento('form-control success')
    }

    return validado;
  
}

    function checkEmail(email) {
     return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

   async function CadastraUsu() {
    try {
      const dados = {
        email_usuario, nome_usuario, senha_usuario, apelido_usuario, data_nasc_usuario
      }
      const response = await api.post('usuarios', dados);
    } catch (err) {        
        console.log('Erro: ' + err); 
    }    
  }

  return (
    <body style={{
        backgroundImage: `url("https://i.imgur.com/Oux2nBt.png")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '104vh',
        marginTop: '-5vh',
        }}>     
        
        <div className='cadastro'>
         <h1>Cadastro</h1>
        </div>

        <img src="https://i.imgur.com/hbgLZIq.png" class="foto"/>
        <h1 className='fotoperfil'>Adicionar foto de perfil</h1>

    {/* Primeira coluna */}

        <div className="formcadastro">
         <form onSubmit={handleSubmit}>

         <div className= {valEmail}>
          <div className="primeiracoluna">           
           <input type="email" 
           name="email" 
           placeholder="E-mail" 
           onChange={v => setEmail_usuario(v.target.value)} 
           value={email_usuario}
           />
          </div>
          <small className='smallcoluna1'>{errEmail}</small>
         </div> 

        <div className= {valNome}> 
         <div className="primeiracoluna">           
           <input 
            name="nomeusuario" 
            placeholder="Nome do usuário" 
            onChange={v => setNome_usuario(v.target.value)} 
            value={nome_usuario}
            />
         </div>
         <small className='smallcoluna1'>{errNome}</small>
        </div>

        <div className= {valSenha}> 
         <div className="primeiracoluna">           
           <input 
            name="senha" 
            placeholder="Senha" 
            onChange={v => setSenha_usuario(v.target.value)} 
            value={senha_usuario}
            />
         </div>
         <small className='smallcoluna1'>{errSenha}</small>
        </div>
    {/* Segunda coluna */}

        <div className='coluna2'>

        <div className= {valApelido}> 
         <div className="segundacoluna">           
           <input 
            name="apelido" 
            placeholder="Apelido" 
            onChange={v => setApelido_usuario(v.target.value)} 
            value={apelido_usuario}
            />
          </div>
          <small className='smallcoluna2'>{errApelido}</small>
          </div>

        <div className= {valNascimento}> 
         <div className="data">
          <input 
           type="date" 
           name="data"
           min="1999-01-01" 
           max="2009-12-31"
           onChange={v => setData_nasc_usuario(v.target.value)} 
           value={data_nasc_usuario}/>
         </div>
         <small className='smallnascimento'>{errNascimento}</small>
        </div>

        <div className= {valConfSenha}> 
         <div className='confirmarsenha' >       
          <input 
           name="confirmarsenha" 
           placeholder="Confirmar senha" 
           onChange={v => setConfSenha(v.target.value)} 
           value={confSenha}
           />
         </div>
         <small className='smallcoluna2'>{errConfSenha}</small>
        </div> 
        </div>

        <button type="submit" className="botaoentrar">Cadastrar</button>
          
            <div class="jatenholog">
            <Link to='/usuarios/login'><h2 className='jatenhologlink'>Já tem uma conta?</h2></Link>
              <p/>
            </div>
        
         </form>
        </div>
    </body>
  )}

export default Cadastro