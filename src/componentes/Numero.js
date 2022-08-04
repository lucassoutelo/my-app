import React from 'react';

function Numero(props) {
  return (
    <div>
      <p>Valor do state num em Numero: {props.num}</p>
      <button onClick={() => props.setNum(props.num + 10)}>Soma 10</button>
    </div>
  );
}

export default Numero;
