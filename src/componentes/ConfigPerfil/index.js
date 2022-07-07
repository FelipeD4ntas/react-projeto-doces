import React from 'react';
import Main from '../Main'

function ConfigPerfil(props) {
  return (
    <Main functionTopo = {props.function} img = {props.iconeVoltar}>
      <form className="form-profile">
        <label htmlFor="nome-usuario">
          Full Name
          <input id="nome-usuario" name="nome-usuario" type="text" />
        </label>
      
        <label htmlFor="img-perfil-user">
          Profile Picture
          <div className="max-width">
            <div className="imageContainer">
              <img src={props.photoURL} alt="Selecione uma imagem" id="imgPhoto" />
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
            <img src={props.iconeLogout} alt="icone logout" className="icone-logout"/>
            <a href="#">Log Out</a>
          </button>
        </form>
    </Main>
  );
}

export default ConfigPerfil;