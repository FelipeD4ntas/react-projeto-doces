import React from "react";
import PaginaLateral from "../PaginaLateral";
import './style.css';

function OrderPatissier(props) {
  function voltarParaPaginaProdutoPatissier() {
    props.elemento.current.style.left = '100%'
  };

  const dataAtual = new Date();
  const ano = dataAtual.getFullYear();
  const mes = dataAtual.getMonth() < 9 ? '0' + dataAtual.getMonth() : dataAtual.getMonth();
  const dia = dataAtual.getDate();
  const hora = dataAtual.getHours() < 9 ? '0' + dataAtual.getHours() : dataAtual.getHours();
  const minutos = dataAtual.getMinutes() < 10 ? '0' + dataAtual.getMinutes() : dataAtual.getMinutes();
  let valorCustom = `${ano}-${mes}-${dia}T${hora}:${minutos}`;


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
      
      <section className="box-info-order">
        <div className="item-info-order">
          <h2>Pick Up Location</h2>
          <p>R. Cônego Valadão, 725 - Gopouva, Guarulhos - SP, 07040-000</p>
        </div>

        <div className="item-info-order">
          <h2>Patissier Hours</h2>
          <p>Daily</p>
        </div>

        <div className="item-info-order">
          <h2>Date & Time</h2>
          <input type="datetime-local" defaultValue={valorCustom}/>
        </div>
      </section>
    </PaginaLateral> 
  );
}

export default OrderPatissier;