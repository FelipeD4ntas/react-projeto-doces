import React, { useRef, useState } from 'react';
import Main from '../Main';
import { initializeApp} from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js';
import { getAuth, updateProfile} from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js';

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
const auth = getAuth();


function ConfigPerfil(props) {
  const inputNomeUsuario = useRef()
  const inputFotoUsuario = useRef();
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [fotoUsuario, setFotoUsuario] = useState('');
  console.log(inputFotoUsuario)
  
  function obterValoresInput(event) {
    event.preventDefault()
    setNomeUsuario(inputNomeUsuario.current.value)
  }
  
  console.log(nomeUsuario)

  updateProfile(auth.currentUser, {
    displayName: nomeUsuario
  }).then(() => {
    // Profile updated!
    // ...
  }).catch((error) => {
    // An error occurred
    // ...
  });

  return (
    <Main functionTopo = {props.function} img = {props.iconeVoltar} classMain = 'main-pagina-config-perfil'>
      <form className="form-profile" onSubmit={obterValoresInput}>
        <label htmlFor="nome-usuario">
          Full Name
          <input id="nome-usuario" name="nome-usuario" type="text" ref={inputNomeUsuario} />
        </label>
      
        <label htmlFor="img-perfil-user">
          Profile Picture
          <div className="max-width">
            <div className="imageContainer">
              <img src={props.photoURL} alt="Selecione uma imagem" id="imgPhoto" />
            </div>
            </div>
            <input type="file" id="img-perfil-user" name="img-perfil-user" accept="image/*" ref={inputFotoUsuario}/>
            <p className="p-mudar-foto">Mudar Foto</p>
          </label>

          <label htmlFor="telefone-usuario">
            Phone Number
            <input id="telefone-usuario" name="telefone-usuario" type="text" />
          </label>

          <label htmlFor="email-usuario">
            Email
            <input id="email-usuario" name="email-usuario" type="email" />
          </label>

          <button className="btn btn-salvar-perfil" type="submit" onClick={obterValoresInput}>
            Save
          </button>

          <button className="btn btn-logout">
            <img src={props.iconeLogout} alt="icone logout" className="icone-logout"/>
            <a href="#">Log Out</a>
          </button>
        </form>
    </Main>
  );
}

export default ConfigPerfil;