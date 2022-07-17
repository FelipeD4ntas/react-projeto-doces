import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Main from '../Main'
import ProdutoPattisier from '../ProdutoPatissier';
import ProdutoCursoOnline from '../ProdutoCursoOnline';
import imgDoces from '../assets/imagens/doces.jpg';
import imgCurso from '../assets/imagens/cursos.jpg';
import iconePin from '../assets/imagens/icones/pin.svg';
import iconeFood from '../assets/imagens/icones/food.svg'
import iconeArtigo from '../assets/imagens/icones/artigo.svg'
import iconePerfil from '../assets/imagens/icones/perfil.svg'

import './style.css';


function PaginaProdutos() {
    const inputBuscar = useRef();
    const cardProduto = useRef();
    const cardProdutoCurso = useRef();
    const boxProdutoPatissier = useRef();
    const boxProdutoCurso = useRef();

    function mostrarProduto(produtoNaoEncontrado, add, remove) {
      produtoNaoEncontrado.forEach((produtoNaoEncontrado) => {
        produtoNaoEncontrado.classList.remove(remove);
        produtoNaoEncontrado.classList.add(add);
      });
    };

    function ocultarProduto(produtoEncontrado, add, remove) {
      produtoEncontrado.forEach((produtoEncontrado) => {
        produtoEncontrado.classList.remove(remove);
        produtoEncontrado.classList.add(add);
      });
    };

    function filtrandoProduto(produtos, valorInput, encontrando) {
      return produtos.filter((produto) => {
        
        const combinou = produto.textContent.toLowerCase().includes(valorInput.toLowerCase())
        return encontrando ? combinou : !combinou;
      });
    };

    function procurandoProduto(produtos, valorInput) {
      const produtoNaoEncontrado = filtrandoProduto(produtos, valorInput, false);
      const produtoEncontrado = filtrandoProduto(produtos, valorInput, true);

      mostrarProduto(produtoNaoEncontrado, 'hidden', 'block');
      ocultarProduto(produtoEncontrado, 'block', 'hidden');
    };
    
    function buscarProduto() {
      const produtos = [cardProduto.current, cardProdutoCurso.current];
      const valorInput = inputBuscar.current.value
      procurandoProduto(produtos, valorInput);
    }
    
    function clicouBtnProdutoPatissier() {
      boxProdutoPatissier.current.style.left = '0%';
    }

    function clicouBntProdutoCurso() {
      boxProdutoCurso.current.style.left = '0%';
    }

    return (
    <>
      <Main topoIconeClass = {'iconeNaoVisivel'}>
        <section className="box-buscar">
            <input type="text" placeholder="Search..." id="inputBuscar" ref={inputBuscar} onInput={buscarProduto}/>
        </section>

        <section className="box-produtos">
            <div className="card-produto" ref={cardProduto}>
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
                      <button className="btn btn-ver-produtos" onClick={clicouBtnProdutoPatissier}>Ver Produtos</button>
                  </div>
              </div>
            </div>

            <div className="card-produto" ref={cardProdutoCurso}>
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
                        <button className="btn btn-ver-produtos" onClick={clicouBntProdutoCurso}>Ver Produtos</button>
                    </div>
                </div>
            </div>
        </section>

        <section className='box-produto-pattisier-curso' ref={boxProdutoPatissier}>
            <ProdutoPattisier elemento = {boxProdutoPatissier}/>
        </section>

        <section className='box-produto-pattisier-curso' ref={boxProdutoCurso}>
            <ProdutoCursoOnline elemento = {boxProdutoCurso}/>
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
}

export default PaginaProdutos;