import React from "react";
import PaginaLateral from "../PaginaLateral";
import ItensProdutos from "../ItensProdutos";
import imgCursoOnline from '../assets/imagens/produto-curso.webp';

function ProdutoCursoOnline(props) {
  function voltarProdutoCurso() {
    props.elemento.current.style.left = '100%'
  };

  return(
    <PaginaLateral
      titulo = 'Cursos Online' 
      function = { voltarProdutoCurso } 
      imagemProduto = {imgCursoOnline} 
      txtBotao = 'Start Order'
      classFooter = 'footer-itens-produtos'
      classContainer = 'container-box-itens-produto-curso'
    >
      <ItensProdutos 
         tituloItem = 'Curso de Gastronomia'
         tipoProduto = 'Culinaria' 
         descTipoProduto = 'Master Chef'
         precoProduto = 'R$ 50,00'
      />
    </PaginaLateral> 
  );
}

export default ProdutoCursoOnline;