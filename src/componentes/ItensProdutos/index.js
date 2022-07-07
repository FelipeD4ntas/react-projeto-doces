import React from "react";
import './style.css';

function ItensProdutos(props) {
  return (
    <div className="box-item-produto">
      <p className="titulo-item">{props.tituloItem}</p>
      <div className="item-produto">
        <p className="txt-tipo-produto">{props.tipoProduto}</p>
        <p className="txt-desc-tipo-produto">{props.descTipoProduto}</p>
        <span className="preco-produto">{props.precoProduto}</span>
      </div>
    </div>  
  );
}

export default ItensProdutos;