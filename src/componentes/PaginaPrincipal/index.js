import React, { useRef, useLayoutEffect} from 'react';
import imgLogo from '../assets/imagens/logo.png';
import imgIconeRestaurante from '../assets/imagens/icones/icone-restaurante.svg'
import './style.css'

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCLRw6P1217lxAUOSx79SUKQZ3REyXdg_w',
  authDomain: 'doces-patissier.firebaseapp.com',
  projectId: 'doces-patissier',
  storageBucket: 'doces-patissier.appspot.com',
  messagingSenderId: '725465980940',
  appId: '1:725465980940:web:c6be38fa9e004da2714e29',
  measurementId: 'G-3F4Y9PQX4M'
};

const app = initializeApp(firebaseConfig);


function PaginaPrincipal() {
  const boxFormSeInscrever = useRef();
  const boxFormLogin = useRef()
  const boxPrincipal = useRef()
  const boxRecuperarSenha = useRef()
  const formInscricao = useRef()
  const formLogin = useRef()
  const formRecuperarSenha = useRef()
  const linkLogin = useRef()
  const emailInscricao = useRef()
  const senhaInscricao = useRef()

  let index = 1;

  function clicouBtnInscricao() {
    index = 1
    ++index
    
    setTimeout(() => {
      switch (index) {
        case 1: 
          boxPrincipal.current.style.right = '0%';
          break
        case 2: 
          boxFormLogin.current.style.left = '100%';
          boxFormSeInscrever.current.style.right = '0%';
          break
        case 3: 
          boxFormLogin.current.style.left = '0%';
          boxFormSeInscrever.current.style.right = '100%';
          break
      }
    }, 500);
  };

  function clicouBtnLogin() {
    index = 1
    index += 2
  
    setTimeout(() => {
      switch (index) {
        case 1: 
          boxPrincipal.current.style.right = '0%';
          break
        case 2: 
          boxFormLogin.current.style.left = '100%';
          boxFormSeInscrever.current.style.right = '0%';
          break
        case 3: 
          boxFormLogin.current.style.left = '0%';
          boxFormSeInscrever.current.style.right = '100%';
          break
      }
    }, 500);
  };

  function clicouRecuperarSenha() {
    index = 1
    index += 3
  
    setTimeout(() => {
      switch (index) {
        case 4: 
          boxRecuperarSenha.current.style.top = '0%';
      }
    }, 500);
  };

  function clicouBtnCancelar() {
    index = 1
  
    setTimeout(() => {
      switch (index) {
        case 1: 
        boxRecuperarSenha.current.style.top = '100%';
      }
    }, 500);
  }

  function seIncrever(event) {
    event.preventDefault();

    const email = emailInscricao.value;
    const pattern =  /^[a-zA-Z0-9]{6,}$/;
    const senhaValida = pattern.test(senhaInscricao.value);

    if (senhaValida) {
      const password = senhaInscricao.value;

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert(`Conta criada com sucesso.`);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
      
      return
    }
    
    alert('A senha deve ter no mínimo 6 caracteres.')
  };

  function logar(event) {
    event.preventDefault();
    const email = emailLogin.value;
    const password = senhaLogin.value;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            
          } else {
            console.log('Usuario deslogado')
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        if (errorMessage === 'Firebase: Error (auth/user-not-found).') {
          alert('Usuário não encontrado.');
        };
        if (errorMessage === 'Firebase: Error (auth/wrong-password).') {
          alert('Senha errada!');
        };
        if (errorMessage === 'Firebase: Error (auth/invalid-email).') {
          alert('Email inválido');
        };
        if (errorMessage === 'Firebase: Error (auth/internal-error).') {
          alert('Senha em branco.')
        }
      });
  }

  function recuperSenha(event) {
    event.preventDefault();
    
    const auth = getAuth();
    const email = emailRecuperarSenha.value;
    
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Email de redefinição de senha enviado. (verifique a caixa de spam).');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
          alert(errorMessage)
      });
  };

  return (
    <section className='body'>
      <div className="box-telas">
        <div className="box-geral box-principal" ref={boxPrincipal}>
          <section className="box-logo">
            <img src={imgLogo} alt="Logo Doces Pâtissier"/>
          </section>
          <section className="box-btn">
            <button className="btn btn-login" data-js="botao-se-inscrever" onClick={clicouBtnInscricao}>
              <div className="signup" data-js="cont-signup">
                <img src={imgIconeRestaurante} alt="icone Menu Restaurante"/>
                <a href="#" target="_self">Sign up</a>
              </div>
            </button>
            <button className="btn btn-criar-conta" data-js="botao-login" onClick={clicouBtnLogin}>
              <a href="#" target="_self" data-js="cont-login">Log in</a>
            </button>
          </section>
        </div>

        <div className="box-geral box-form-inscricao" ref={boxFormSeInscrever}>
          <div className="box-titulo-sign-up">
            <div className="bolinha"></div>
            <div className="bolinha"></div>
            <div className="bolinha"></div>
            <h1>Sign up</h1>
            <div className="bolinha"></div>
            <div className="bolinha"></div>
            <div className="bolinha"></div>
          </div>
        
          <div className="box-form">
            <form className="form-se-inscrever" ref={formInscricao}>
              <label htmlFor="emailInscricao">
                Email
                <input type="email" id="emailInscricao" ref={emailInscricao} name="user-email" placeholder="Enter email..."/>
              </label>
        
              <label htmlFor="senhaInscricao">
                Password
                <input type="password" id="senhaInscricao" ref={senhaInscricao} name="user-password" placeholder="Enter password..."/>
              </label>
        
              <button type="submit" className="btn btn-signup" data-js="cont-signup" onClick={clicouBtnInscricao}>
                <a href="#">Sign up</a>
              </button>
            </form>
          </div>
          <div className="box-btn btn-possui-conta">
            <button className="btn btn-criar-conta" data-js="botao-login" onClick={clicouBtnLogin}>
              <a href="#" target="_self" data-js="cont-login">Already have an account?</a>
            </button>
          </div>
        </div>
        
        <div className="box-geral box-form-login" ref={boxFormLogin}>
          <div className="box-titulo-sign-up">
            <div className="bolinha"></div>
            <div className="bolinha"></div>
            <div className="bolinha"></div>
            <h1>Login</h1>
            <div className="bolinha"></div>
            <div className="bolinha"></div>
            <div className="bolinha"></div>
          </div>
        
          <div className="box-form">
            <form className="form-se-inscrever" ref={formLogin} onSubmit={seIncrever}>
              <label htmlFor="emailLogin">
                Email
                <input type="email" id="emailLogin" name="user-email" placeholder="Enter email..."/>
              </label>
        
              <label htmlFor="senhaLogin">
                Password
                <input type="password" id="senhaLogin" name="user-password" placeholder="Enter password..."/>
              </label>
        
              <a href="#" ref={linkLogin} targe="_self" className="btn btn-login">
                <button type="submit" className="btn-logar">
                  Login
                </button>
              </a>
              <a href="#" className="recuperar-senha" data-js="btn-esqueceu-senha" onClick={clicouRecuperarSenha}>Forgot Password?</a>
            </form>
        
          </div>
          <div className="box-btn btn-possui-conta">
            <button className="btn btn-criar-conta" data-js="botao-se-inscrever" onClick={clicouBtnInscricao}>
              <a href="#" target="_self" data-js="cont-signup">Sign Up</a>
            </button>
          </div>
        </div>

        <div className="box-geral box-recuperar-senha" ref={boxRecuperarSenha}>
          <div className="descricao-recuperar-senha">
            <h1>Password Reset</h1>
            <p>Enter your email address and we'll send you instructions on how to reset your password.</p>
          </div>
          <div className="box-form box-form-recuperar-senha">
            <form className="form-recuperar-senha" ref={formRecuperarSenha}>
              <label htmlFor="emailRecuperarSenha">
                Email
                <input type="email" id="emailRecuperarSenha" name="user-email" placeholder="Enter email..." />
              </label>
              <button className="btn btn-recuperar-senha" data-js="botao-recuperar-senha" type="submit">
                  submit
              </button> 
            </form>
            <button className="btn btn-cancelar" data-js="botato-cancelar" onClick={clicouBtnCancelar}>cancel</button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default PaginaPrincipal;

formLogin.addEventListener('submit', logar)
formRecuperarSenha.addEventListener('submit', recuperSenha);