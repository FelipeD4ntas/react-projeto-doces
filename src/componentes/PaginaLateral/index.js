import React from "react";
import Topo from "../Topo";
import Footer from "../Footer";
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
      <div className="box-produto-img">
        <img src={props.imagemProduto} alt="Doces" />
      </div>
      <div className="container-box-itens-produtos">
        <div className="box-itens-produtos">
          <h1>{props.titulo}</h1>
          {props.children}
        </div>
      </div>
      <div className="footer-pagina-lateral">
        <Footer>
          <button className="btn btn-pagina-lateral">{props.txtBotao}</button>
        </Footer>
      </div>
    </div>
  );
};

export default PaginaLateral;