import React, { useState, useRef } from "react";
import Footer from "../Footer";
import Topo from "../Topo";
import PaginaLateral from "../PaginaLateral";
import placeholderPerfil from '../assets/imagens/placeholderPerfil.webp';
import iconeConfig from '../assets/imagens/icones/config.svg';
import iconeVoltar from '../assets/imagens/icones/voltar.svg';
import iconeLogout from '../assets/imagens/icones/logout.svg';
import './style.css';

function Profile(user) {
  const boxConfigPerfil = useRef()

  let displayName = 'Nome Usuario'
  let email = 'felipeicedantas@gmail.com'
  let photoURL = placeholderPerfil
  let telefone= 'DDD 00000-0000';
  
  function configurarPerfil() {
    boxConfigPerfil.current.style.left = '0%';
  }

  function volarPerfil() {
    boxConfigPerfil.current.style.left = '100%';
  }
  
  return (
    <>
      <section className="body-profile">
        <div className="box-perfil">
          <Topo>
            <div className="box-icone-config">
              <img src={iconeConfig} alt="icone config" className="icone-config" onClick={configurarPerfil}/>
            </div>
          </Topo>
          <div className="box-geral box-profile">
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
          </div>
          <Footer />
        </div>
        
        <div className="box-config-perfil" ref={boxConfigPerfil}>
          <Topo>
            <div className="box-icone-voltar">
              <img src={iconeVoltar} alt="icone config" className="icone-config" onClick={volarPerfil}/>
              <h1>My Profile</h1>
            </div>
          </Topo>
            <form className="form-profile">
              <div className="box-geral box-profile config-profile">
                <label htmlFor="nome-usuario">
                  Full Name
                  <input id="nome-usuario" name="nome-usuario" type="text" />
                </label>
              
                <label htmlFor="img-perfil-user">
                  Profile Picture
                  <div className="max-width">
                    <div className="imageContainer">
                      <img src={photoURL} alt="Selecione uma imagem" id="imgPhoto" />
                    </div>
                  </div>
                  <input type="file" id="img-perfil-user" name="img-perfil-user" accept="image/*" />
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
                 <button className="btn btn-salvar-perfil" type="submit">
                  Save
                </button>
                <button className="btn btn-logout">
                  <img src={iconeLogout} alt="icone logout" className="icone-logout"/>
                  <a href="#">Log Out</a>
                </button>
              </div>
            </form>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Profile;