import React from 'react';
import { useCarrinho } from '../context/index';
import './Produto.css'

const Produto = ({ produto }) => {
    const { adicionarAoCarrinho } = useCarrinho();
  
    
  
    return (
      <div>
            <h2>{produto.nome}</h2>
            <img src={produto.img} alt={produto.nome}  />
            <p>R$ {produto.preco}</p>
            <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao Carrinho</button>
        
      </div>
    );
  };
  
  export default Produto;
