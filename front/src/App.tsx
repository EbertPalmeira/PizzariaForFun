import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CarrinhoProvider } from './context';
import Carrinho from './components/Cart';
import PaginaProduto from './components/PaginaProduto/PaginaProduto';
import './App.css'
import Header from './components/Header/Header';

const App = () => {
  return (
    <CarrinhoProvider>
      <Router>
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
          <Link to="/">Loja Online</Link>
          <div>
            <p>FORFUN PIZZARIA</p>
          </div>
          <Link to="/carrinho"><Carrinho /></Link>
        </header>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<PaginaProduto />} />
          </Routes>
        </main>
      </Router>
    </CarrinhoProvider>
  );
};

export default App;
