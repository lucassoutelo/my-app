import React,{useState} from "react";

function Notas() {
  const [notas, setNotas] = useState( {nota1: "0" ,  nota2: "0", nota3: "0", nota4: "0"});

  const handleNotas = (e) =>{
    if(e.taget.getAttribute('name') == 'fnota1'){
      setNotas({nota1:e.target.value, nota2: notas.nota2, nota3: notas.nota3, nota4: notas.nota4})
    }else if(e.taget.getAttribute('name') == 'fnota2'){
      setNotas({nota1:notas.nota1, nota2: e.target.value, nota3: notas.nota3, nota4: notas.nota4})
    }else if(e.taget.getAttribute('name') == 'fnota3'){
      setNotas({nota1:notas.nota1, nota2: notas.nota2, nota3: e.target.value, nota4: notas.nota4})
    }else if(e.taget.getAttribute('name') == 'fnota4'){
      setNotas({nota1:notas.nota1, nota2: notas.nota2, nota3: notas.nota3, nota4: e.target.value})
  }
}
  return (<>
    <label>Insira uma nota</label>
    <input type= "number" name="fnota1" onChange={(e)=>handleNotas(e)}/>

    <p>Resultado: {}</p>
    <p>{resultado > 60? "Aprovado": "Reprovado"}</p>
  </>);
}

export default Notas;
