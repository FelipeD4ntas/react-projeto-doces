import React from "react";
import Topo from "../Topo";
import Footer from "../Footer";
import Main from '../Main';
import iconeVoltar from '../assets/imagens/icones/voltar.svg';
import './style.css'

function PaginaLateral(props) {
  return (
  <>
    <Main titulo = {props.titulo} topoIconeClass = {props.class} img = {iconeVoltar} functionTopo = {props.function}>
      <div className="box-produto-img">
        <img src={props.imagemProduto} alt="Doces" />
      </div>

      <div className="container-box-itens-produtos">
        <div className="box-itens-produtos">
          <h1>{props.titulo}</h1>
          {props.children}
        </div>
      </div>
    </Main>
    <Footer classFooter = {props.classFooter}>
      <button className="btn btn-pagina-lateral">{props.txtBotao}</button>
    </Footer>
  </>
  );
};

export default PaginaLateral;