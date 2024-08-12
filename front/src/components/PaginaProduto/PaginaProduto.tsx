import React from 'react';
import Produto from '../Produto/Produto';
import produtos from '../../produtos';
import "./styles.css"
import Header from '../Header/Header';
const PaginaProduto = () => {
    return (
      <>
      <Header/>
      <div className='container'>
        
        {produtos.map(produto => (
            <Produto key={produto.id} produto={produto} />
        ))}
      </div>
      </>
    );
  };

export default PaginaProduto;
