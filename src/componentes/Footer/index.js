import React from "react";
import { Link } from 'react-router-dom';
import iconeFood from '../assets/imagens/icones/food.svg'
import iconeArtigo from '../assets/imagens/icones/artigo.svg'
import iconePerfil from '../assets/imagens/icones/perfil.svg'

function Footer() {
  return(
    <footer>
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
    </footer>
  );
};

export default Footer;