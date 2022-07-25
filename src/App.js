import React, { useState } from 'react';
import Header from './componentes/Header';
import Body from './componentes/Body';

function App() {
  const [num, setNum] = useState();

  return (
    <>
      <Header />
      <Body />
      <p>num: {num}</p>
      <button onClick={setNum()=>num+10}></button>
    </>
  );
}

export default App;
