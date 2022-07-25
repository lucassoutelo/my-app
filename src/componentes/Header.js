import React from 'react';
import logotjap from './imgs/logo-tjap.png';
import '../App.css';
import Relogio from './Relogio';

function Header() {
  return (
    <header className='cabecalho'>
      <img src={logotjap} />
      <Relogio />
      <h1>Tribunal de Justiça do Estado do Amapá</h1>
    </header>
  );
}

export default Header;
