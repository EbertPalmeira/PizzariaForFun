import React from 'react';
import { useCarrinho } from '../../context/index';
import './Produto.css'

const Produto = ({ produto }) => {
    const { adicionarAoCarrinho } = useCarrinho();
  
    
  
    return (
      <>
      
      <div className='produtos'>
        
            <span> Pizza {produto.nome}</span>
            <h2>{produto.desc}</h2>
            <img src={produto.img} alt={produto.nome}  />
            <p>R$ {produto.preco.toFixed(2).replace('.',',')}</p>
            <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao Carrinho</button>
        
      </div>
      </>
    );
  };
  
  export default Produto;
