import React from "react";
import { Link } from 'react-router-dom';
import Topo from "../Topo";
import Footer from "../Footer";
import Main from '../Main';
import iconeVoltar from '../assets/imagens/icones/voltar.svg';
import './style.css'

function PaginaLateral(props) {
  return (
  <>
    <Main titulo = {props.titulo} topoIconeClass = {props.class} img = {iconeVoltar} functionTopo = {props.function}>
      <div className={props.classBoxImg}>
        <img src={props.imagemProduto} alt="Produto" />
      </div>

      <div className={props.classContainer}>
        <div className={props.classBoxMeio}>
          <h1 className={props.classTitulo}>{props.titulo}</h1>
          {props.children}
        </div>
      </div>
    </Main>
    <Footer classFooter = {props.classFooter}>
      <button className="btn btn-pagina-lateral" onClick={props.functionBTN}>
        {props.txtBotao}
      </button>
    </Footer>
  </>
  );
};

export default PaginaLateral;