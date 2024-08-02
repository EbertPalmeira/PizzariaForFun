import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCarrinho } from '../context';

const CarrinhoIcon = () => {
  const { carrinho } = useCarrinho();

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <FaShoppingCart size={24} />
      {carrinho.length > 0 && (
        <span style={{
          position: 'absolute',
          top: '-10px',
          right: '-10px',
          background: 'blue',
          color: 'white',
          borderRadius: '50%',
          padding: '5px 10px',
          fontSize: '12px'
        }}>
          {carrinho.length}
        </span>
      )}
    </div>
  );
};

export default CarrinhoIcon;
