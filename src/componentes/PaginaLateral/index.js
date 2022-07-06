import React from "react";
import Topo from "../Topo";
import iconeVoltar from '../assets/imagens/icones/voltar.svg';
import './style.css'

function PaginaLateral(props) {
  return (
    <div className="box-detalhes-produtos">
      <Topo>
        <div className="box-icone-voltar">
          <img src={iconeVoltar} alt="icone config" className="icone-config" onClick={props.function}/>
          <h1 className="nome-produto">{props.titulo}</h1>
        </div>
      </Topo>
      {props.children}
    </div>
  );
};

export default PaginaLateral;