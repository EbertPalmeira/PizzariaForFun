import React from 'react'
import sobre from '../../imgs/sobre.png'
import './styles.css'

const Header = () => {
  return (
    <div className='sobre'>
        <div>
            <p>Sobre nós</p>
            <h2>Fazemos pizzas incríveis E sem glúten, é claro! para que nossos clientes fiquem com a sensação de “quero mais”.</h2>
            <button>Venha nos conhecer</button>
        </div>
        
        <div>
        <img src={sobre} alt="" />
        </div>
    </div>
  )
}

export default Header