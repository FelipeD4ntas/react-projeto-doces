import React from "react";
import PaginaLateral from "../PaginaLateral";

function ProdutoPattisier(props) {
  function voltarProdutoPatissier() {
    props.elemento.current.style.left = '100%'
  }
  return(
    <PaginaLateral titulo = 'Patissier' function = { voltarProdutoPatissier }>
     
    </PaginaLateral>
  );
}

export default ProdutoPattisier;