import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import Footer from "../Footer";
import Main from '../Main';
import ConfigPerfil from "../ConfigPerfil";
import placeholderPerfil from '../assets/imagens/placeholderPerfil.webp';
import iconeConfig from '../assets/imagens/icones/config.svg';
import iconeVoltar from '../assets/imagens/icones/voltar.svg';
import iconeLogout from '../assets/imagens/icones/logout.svg';
import iconeFood from '../assets/imagens/icones/food.svg'
import iconeArtigo from '../assets/imagens/icones/artigo.svg'
import iconePerfil from '../assets/imagens/icones/perfil.svg'
import './style.css';

function Profile(user) {
  const boxConfigPerfil = useRef()
  const [classIcone, setClass] = useState('iconeVisivel icone-config')  

  let displayName = 'Nome Usuario'
  let email = 'felipeicedantas@gmail.com'
  let photoURL = placeholderPerfil
  let telefone= 'DDD 00000-0000';
 
  function configurarPerfil() {
    boxConfigPerfil.current.style.left = '0%';
    setClass('iconeNaoVisivel')
  }

  function volarPerfil() {
    boxConfigPerfil.current.style.left = '100%';
    setClass('iconeVisivel icone-config')
  }
  
  return (
  <>
    <Main
      img = {iconeConfig}
      topoIconeClass = {classIcone}
      functionTopo = {configurarPerfil}
      classMain = 'mainPaginaPerfil'
    >
      <section className="box-perfil">
        <h1>{displayName}</h1>
        <img src={photoURL} alt="Foto Perfil" />
        <div className="telefone-usuario">
          <p>Phone Number</p>
          <h2>{telefone}</h2>
        </div>
        <div className="email-usuario">
          <p>Email</p>
          <h2>{email}</h2>
        </div>
      </section>
      
      <section className="box-config-perfil" ref={boxConfigPerfil}>
       <ConfigPerfil iconeLogout = {iconeLogout} photoURL = {photoURL} function = {volarPerfil} iconeVoltar = {iconeVoltar}/>
      </section>
    </Main>

    <Footer>
      <button>
        <Link to="/pagina-produtos">
            <img src={iconeFood} />
            <p>Food</p>
        </Link>
      </button>
      <button>
          <Link to="/pagina-order">
              <img src={iconeArtigo} />
              <p>Orders</p>
          </Link>
      </button>
  
      <button>
          <Link to="/pagina-profile">
            <img src={iconePerfil} />
              <p>Profile</p>
          </Link>
      </button>
    </Footer>
  </>
  );
};

export default Profile;