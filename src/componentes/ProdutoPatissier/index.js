import React, { useRef } from "react";
import PaginaLateral from "../PaginaLateral";
import ItensProdutos from "../ItensProdutos";
import imgDocePatissier from '../assets/imagens/produto-doces.jpg';
import OrderPatissier from "../PaginaOrderPatissier";

function ProdutoPattisier(props) {
  const boxOrderPatissier = useRef()

  function paginaOrderPatissier() {
    boxOrderPatissier.current.style.left = '0%'
  }

  
  function voltarProdutoPatissier() {
    props.elemento.current.style.left = '100%'
  };

  return(
    <PaginaLateral
      titulo = 'Patissier' 
      function = { voltarProdutoPatissier } 
      imagemProduto = {imgDocePatissier} 
      txtBotao = 'Start Order'
      classFooter = 'footer-itens-produtos'
      classContainer = 'container-box-itens-produto-patissier'
      caminhoLink = 'order-patissier'
      classBoxImg = 'box-produto-img'
      classBoxMeio = 'box-itens-produtos'
      functionBTN = {paginaOrderPatissier}
    >
      <ItensProdutos 
         tituloItem = 'Prontos para Entrega'
         tipoProduto = 'Bolo' 
         descTipoProduto = 'Sabor Chocolate'
         precoProduto = 'R$ 10,00'
      />

      <ItensProdutos 
         tituloItem = 'Entregamos em 24h'
         tipoProduto = 'Bolo' 
         descTipoProduto = 'Sabor Baunilha'
         precoProduto = 'R$ 10,00'
      />

      <section className="box-produto-pattisier-curso" ref={boxOrderPatissier}>
        <OrderPatissier  elemento = {boxOrderPatissier}/>
      </section>
    </PaginaLateral> 
  );
}

export default ProdutoPattisier;