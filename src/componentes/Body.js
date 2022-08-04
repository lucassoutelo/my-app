import React, { useState } from 'react';
import Dados from './Dados';
import Numero from './Numero';

function Body() {
  let somar = (v1, v2) => {
    return v1 + v2;
  };

  const nome = 'Lucas Soutelo';
  const [num, setNum] = useState(10);

  return (
    <section className='corpo'>
      <h2>Departamento de Sistemas</h2>
      <Dados sistema1=' Tucujuris' sistema2=' SIG' soma={somar} />
      <Numero num={num} setNum={setNum} />
      <p>{'Estagiário: ' + nome}</p>
    </section>
  );
}

export default Body;
