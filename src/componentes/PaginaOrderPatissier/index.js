import React, { useState, useRef }  from "react";
import DateTimePicker from 'react-datetime-picker'
import PaginaLateral from "../PaginaLateral";
import 'react-calendar/dist/Calendar.css';
import './style.css';

function OrderPatissier(props) {
  function voltarParaPaginaProdutoPatissier() {
    props.elemento.current.style.left = '100%'
  };
  
  const options = {
    timeStyle: 'short',
    dateStyle: 'full'
  }

  const dataAtual = new Date();
  const data = dataAtual.toLocaleString('pt-BR', options)
  let valorInputData = useRef();
  const [dataOrder, setData] = useState();
  
  function obterValorInput() {
   
  }
  

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
          <input type="datetime-local" ref={valorInputData} onChange={obterValorInput} />
        </div>
      </section>
    </PaginaLateral> 
  );
}

export default OrderPatissier;