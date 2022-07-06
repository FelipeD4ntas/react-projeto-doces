import React, { useState } from "react";
import Footer from "../Footer";
import Topo from "../Topo";
import placeholderPerfil from '../assets/imagens/placeholderPerfil.webp'
import './style.css';

function Profile(user) {
  let displayName = 'Nome Usuario'
  let email = user.email
  let photoURL = placeholderPerfil
  let telefone= 'DDD 00000-0000';
 
  return (
    <>
      <section className="body-profile">
        <Topo />
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
      </section>
    </>
  );
};

export default Profile;