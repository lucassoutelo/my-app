import React, { useState } from 'react';
import Header from './componentes/Header';
import Body from './componentes/Body';
import Mudanca from './componentes/Mudanca';
// import Pagina from './componentes/Pagina';

function App() {
  const [pagina, setPagina] = useState(<Body />);

  return (
    <>
      <Header setPagina={setPagina} />
      <Mudanca pagina={pagina} />
      {/* <p> Valor do estate: {num}</p>
      <button onClick={() => setNum(num + 10)}>Somar 10</button> */}
    </>
  );
}

export default App;
