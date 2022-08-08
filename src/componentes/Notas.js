import React,{useState} from "react";

function Notas() {
  const [notas, setNotas] = useState( {nota1: " " ,  nota2: " ", nota3: " ", nota4: " "});
  var resultado;
  const handleNotas = (e) =>{
    if(e.target.getAttribute('name') === 'fnota1'){
      setNotas({nota1:e.target.value, nota2: notas.nota2, nota3: notas.nota3, nota4: notas.nota4})
    }else if(e.target.getAttribute('name') === 'fnota2'){
      setNotas({nota1:notas.nota1, nota2: e.target.value, nota3: notas.nota3, nota4: notas.nota4})
    }else if(e.target.getAttribute('name') === 'fnota3'){
      setNotas({nota1:notas.nota1, nota2: notas.nota2, nota3: e.target.value, nota4: notas.nota4})
    }else if(e.target.getAttribute('name') === 'fnota4'){
      setNotas({nota1:notas.nota1, nota2: notas.nota2, nota3: notas.nota3, nota4: e.target.value})
  }
}
  return (<>
    <label>Insira uma nota</label>
    <input type="text" name="fnota1" value={notas.nota1} onChange={(e)=>handleNotas(e)}/>
    <label>Insira uma nota</label>
    <input type="text" name="fnota2" value={notas.nota2} onChange={(e)=>handleNotas(e)}/>
    <label>Insira uma nota</label>
    <input type="text" name="fnota3" value={notas.nota3} onChange={(e)=>handleNotas(e)}/>
    <label>Insira uma nota</label>
    <input type="text" name="fnota4" value={notas.nota4} onChange={(e)=>handleNotas(e)}/>

    <p>Resultado: {resultado = (parseFloat(notas.nota1)+parseFloat(notas.nota2)+parseFloat(notas.nota3)+parseFloat(notas.nota4))}</p>
    <p>{resultado > 60? "Aprovado": "Reprovado"}</p>
  </>);
}

export default Notas;
