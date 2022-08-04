import React from 'react';
import logotjap from './imgs/logo-tjap.png';
import '../App.css';
import Relogio from './Relogio';
import Body from './Body';
import Pagina from './Pagina';
import Formulario from './Formulario';
// import Pagina from './Pagina';

function Header(props) {
  return (
    <header className='cabecalho'>
      <img src={logotjap} alt='logo TJAP' />
      <Relogio />
      <h1>Tribunal de Justiça do Estado do Amapá</h1>

      <nav>
        <button onClick={() => props.setPagina(<Body />)}> Home </button>
        <button onClick={() => props.setPagina(<Pagina />)}> Página </button>
        <button onClick={() => props.setPagina(<Formulario />)}>
          {' '}
          Formulário{' '}
        </button>
      </nav>
    </header>
  );
}

export default Header;
