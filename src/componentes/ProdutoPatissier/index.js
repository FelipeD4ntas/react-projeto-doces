import React from "react";
import PaginaLateral from "../PaginaLateral";
import ItensProdutos from "../ItensProdutos";
import imgDocePatissier from '../assets/imagens/produto-doces.jpg';

function ProdutoPattisier(props) {
  function voltarProdutoPatissier() {
    props.elemento.current.style.left = '100%'
  }
  return(
    <PaginaLateral
      titulo = 'Patissier' 
      function = { voltarProdutoPatissier } 
      imagemProduto = {imgDocePatissier} 
      txtBotao = 'Start Order'
      
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
    </PaginaLateral>
     
  );
}

export default ProdutoPattisier;