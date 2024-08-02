import React from 'react';
import Produto from '../Produto';
import produtos from '../../produtos';
import "./styles.css"
const PaginaProduto = () => {
    return (
      <div className='container'>
        {produtos.map(produto => (
            <Produto key={produto.id} produto={produto} />
        ))}
      </div>
    );
  };

export default PaginaProduto;
