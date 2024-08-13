import React, { useState ,useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CarrinhoProvider } from './context';
import CarrinhoIcon from './components/Cart';
import PaginaProduto from './components/PaginaProduto/PaginaProduto';
import './App.css'
import Header from './components/Header/Header';
import Carrinho from './components/Carrinho/Carrinho';


const App = () => {

 const [scrool,setScrool]= useState(false);

 useEffect(() => {
  const handleScroll = () => {
    // Verifica a posição de rolagem
    if (window.scrollY > 50) {
      setScrool(true);
    } else {
      setScrool(false);
    }
  };
  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <CarrinhoProvider>
      <Router>
        <header className={scrool ? 'navbar sticky':'navbar' } style={{ display: 'flex', justifyContent: 'space-around', }}>
          <Link to="/">Loja Online</Link>
          <div>
            <p>FORFUN PIZZARIA</p>
          </div>
          <Link to="/carrinho"><CarrinhoIcon /></Link>
          
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<PaginaProduto />} />
            <Route path="/carrinho" element={<Carrinho />} />
          </Routes>
        </main>
      </Router>
    </CarrinhoProvider>
  );
};

export default App;
