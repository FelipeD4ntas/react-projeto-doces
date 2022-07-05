import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaProdutos from '../componentes/PaginaProdutos';
import PaginaPrincipal from '../componentes/PaginaPrincipal';
import Orders from '../componentes/Orders';
import Profile from '../componentes/Profile';

function Rotas()  {
return (<BrowserRouter>
    <Routes>
      <Route exact path='/' element={<PaginaPrincipal />} />
      <Route exact path='/pagina-produtos' element={<PaginaProdutos />} />
      <Route exact path='/pagina-order' element={<Orders />} />
      <Route exact path='/pagina-profile' element={<Profile />} />
    </Routes>
 </BrowserRouter>)
 
};

export default Rotas;