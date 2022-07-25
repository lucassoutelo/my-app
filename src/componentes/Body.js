import React from 'react';
import Dados from './Dados';

function Body() {
  let somar = (v1, v2) => {
    return v1 + v2;
  };

  const nome = 'Lucas Soutelo';

  return (
    <section className='corpo'>
      <h2>Departamento de Sistemas</h2>
      <Dados sistema1=' Tucujuris' sistema2=' SIG' soma={somar} />
      <p>{'Estagiário: ' + nome}</p>
    </section>
  );
}

export default Body;
