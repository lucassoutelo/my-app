import React from 'react';
// import Header from './Header';

function Mudanca(props) {
  return (
    <div>
      {/* <button onClick={() => props.setPagina(<Body />)}> Home </button>
      <button onClick={() => props.setPagina(<Pagina />)}> Página </button> */}
      <div className='corpo'>{props.pagina}</div>
    </div>
  );
}

export default Mudanca;
