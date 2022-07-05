import React from 'react';
import PaginaPrincipal from './componentes/PaginaPrincipal';
import PaginaProdutos from './componentes/PaginaProdutos';
import './App.css';

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCLRw6P1217lxAUOSx79SUKQZ3REyXdg_w',
  authDomain: 'doces-patissier.firebaseapp.com',
  projectId: 'doces-patissier',
  storageBucket: 'doces-patissier.appspot.com',
  messagingSenderId: '725465980940',
  appId: '1:725465980940:web:c6be38fa9e004da2714e29',
  measurementId: 'G-3F4Y9PQX4M'
};

const app = initializeApp(firebaseConfig);

function App() {
  const auth = getAuth();
  const user = auth.currentUser;
 
  if (user) {
    return (<PaginaProdutos />)
  } else {
    console.log('deslogado')
    return (<PaginaPrincipal />)
  }

}

export default App;
