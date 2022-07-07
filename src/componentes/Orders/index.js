import React from "react";
import { Link } from 'react-router-dom';
import Footer from "../Footer";
import Topo from "../Topo";
import Main from '../Main';
import iconeFood from '../assets/imagens/icones/food.svg'
import iconeArtigo from '../assets/imagens/icones/artigo.svg'
import iconePerfil from '../assets/imagens/icones/perfil.svg'
import './style.css';

function Orders() {
  return (
  <>
    <Main topoIconeClass = 'iconeNaoVisivel'>
      <section className="body-orders">
        <div className="box-geral box-orders">
          <h1>My Orders</h1>
        </div>
        <div className="box-lista-orders">
          <ul>
            <li>No List Items</li>
          </ul>
        </div>
      </section>
    </Main>
    <Footer>
      <button>
        <Link to="/pagina-produtos">
            <img src={iconeFood} />
            <p>Food</p>
        </Link>
      </button>
      <button>
          <Link to="/pagina-order">
              <img src={iconeArtigo} />
              <p>Orders</p>
          </Link>
      </button>
  
      <button>
          <Link to="/pagina-profile">
            <img src={iconePerfil} />
              <p>Profile</p>
          </Link>
      </button>
    </Footer>
  </>
  );
};

export default Orders;