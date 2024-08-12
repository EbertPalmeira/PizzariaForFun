import React, { useState } from 'react';
import { useCarrinho } from '../../context';
import './styles.css'
import { CiCreditCard2 ,CiMoneyBill, CiBank} from "react-icons/ci";

const Carrinho = () => {
  const { carrinho, removerDoCarrinho } = useCarrinho();

    const[escolhido,setEscolhido]= useState('');

  return (
    <>
    <h2 style={{textAlign:'center'}}>Carrinho</h2>
    <div className='carrinho'>

    <div className='pagamento'>
        <div className='text'>
            <h2>Informe o metodo de pagamento</h2>
            <span>O pagamento é feito na entrega . Escolha abaixo a forma que deseja pagar</span>
        </div>

        <div className='btn'> 
            <button className={escolhido ==="credito"? 'selected':''} value="credito">
                <CiCreditCard2 
                style={{background:'none'}}  size={20}/>
                Cartão de credito
            </button>

            <button  className={escolhido ==="debito"? 'selected':''} value="debito">
                <CiBank  size={20}
                style={{background:'none'}}
                />
                Cartão de debito
            </button>

            <button>
                <CiMoneyBill 
                style={{background:'none'}}
                size={20}/>
                Dinheiro
            </button>
        </div>
    </div>
       
      
      {carrinho.map((produto, index) => (
        <div className='car' key={index}>
          <h3>{produto.nome}</h3>
          <img src={produto.img} alt={produto.nome}  />
          <p>{produto.preco.toFixed(2).replace('.',',')}</p>
          <button onClick={() => removerDoCarrinho(produto.id)}>Remover</button>
        </div>
      ))}
    </div>
    </>
  );
};

export default Carrinho;
