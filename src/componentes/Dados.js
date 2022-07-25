import React from 'react';

function Dados(props) {
  let n1 = 5;
  let n2 = 6;
  return (
    <section>
      <p>Sistema 1:{props.sistema1}</p>
      <p>Sistema 2:{props.sistema2}</p>
      <p>
        {'A soma entre ' + n1 + ' e ' + n2 + ' é igual a ' + props.soma(n1, n2)}
      </p>
    </section>
  );
}

export default Dados;
