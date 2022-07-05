import React from 'react';
import imgDoces from '../assets/imagens/doces.jpg'
import imgCurso from '../assets/imagens/cursos.jpg'
import iconePin from '../assets/imagens/icones/pin.svg'
import iconeFood from '../assets/imagens/icones/food.svg'
import iconeArtigo from '../assets/imagens/icones/artigo.svg'
import iconePerfil from '../assets/imagens/icones/perfil.svg'
import './style.css';


function PaginaProdutos() {
    return (
        <section className="body-produtos">
          <header  className="topo"></header> 
          <div className="box-geral box-geral-pagina-produtos">
              <section className="box-buscar">
                  <input type="text" placeholder="Search..." id="inputBuscar"/>
              </section>

              <section className="box-produtos">
                  <div className="card-produto">
                      <div className="titulo-produto">
                          <h1>Patissier</h1>
                      </div>
                      <div className="img-produto">
                          <img src={imgDoces} alt="Doces"/>
                      </div>
                      <div className="descricao-produto">
                          <p className="paragrafo-localizacao">
                              <span className="material-symbols-outlined">
                                  <img src={iconePin} />
                              </span>
                              R. Cônego Valadão, 725 - Gopouva, Garulhos - SP, 0740-000 
                          </p>
                          <p className="paragrafo-descricao">Modern take on old scholl Vietnamese street food. You'll love it, we promise :)</p>
                          <div className="box-btn-ver-produtos">
                              <button className="btn btn-ver-produtos">Ver Produtos</button>
                          </div>
                      </div>
                  </div>

                  <div className="card-produto">
                      <div className="titulo-produto">
                          <h1>Cursos Online</h1>
                      </div>
                      <div className="img-produto">
                          <img src={imgCurso} alt="Cursos"/>
                      </div>
                      <div className="descricao-produto">
                          <p className="paragrafo-localizacao">
                              <span className="material-symbols-outlined">
                                <img src={iconePin} />
                              </span>
                              Online 
                          </p>
                          <p className="paragrafo-descricao">Artisan Sausage truck is a spot for bomb sausage made from ground park, beef or poultry, along with salt, special blend of spices and other flavorings and combos. Some sausages include other ingredients for flavor. Stop by, and check yourself!</p>
                          <div className="box-btn-ver-produtos">
                              <button className="btn btn-ver-produtos">Ver Produtos</button>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
          
          <footer>
              <button>
                  <a href="#">
                      <span className="material-symbols-outlined"><img src={iconeFood} /></span>
                      <p>Food</p>
                  </a>
              </button>

              <button>
                  <a href="#">
                      <span className="material-symbols-outlined"><img src={iconeArtigo} /></span>
                      <p>Orders</p>
                  </a>
              </button>
              
              <button>
                  <a href="#">
                      <span className="material-symbols-outlined"><img src={iconePerfil} /></span>
                      <p>Profile</p>
                  </a>
              </button>
          </footer>
        </section>
    );
}

export default PaginaProdutos;