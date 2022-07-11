import React from "react";
import PaginaLateral from "../PaginaLateral";
import './style.css';

function OrderPatissier(props) {
  function voltarParaPaginaProdutoPatissier() {
    props.elemento.current.style.left = '100%'
  };

  return(
    <PaginaLateral
      titulo = 'Set Pickup Time' 
      function = {voltarParaPaginaProdutoPatissier}
      txtBotao = 'Set Pickup Time'
      classFooter = 'footer-itens-produtos'
      classBoxImg = 'hidden'
      classTitulo = 'hidden'
    >
      <section className="box-barra-progresso-order">
            <div className="progresso etapa-um etapa-ativa"><p>1</p></div>

            <div className="progresso-andamento um-para-dois"></div>
            
            <div className="progresso etapa-dois"><p>2</p></div>

            <div className="progresso-andamento dois-para-tres"></div>

            <div className="progresso etapa-tres"><p>3</p></div>
      </section>
    </PaginaLateral> 
  );
}

export default OrderPatissier;