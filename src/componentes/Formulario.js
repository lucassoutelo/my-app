import React, { useState } from "react";

function Formulario() {
  const [nomef, setNome] = useState("");
  const [carro, setCarro] = useState("");
  const [form, setForm] = useState({ nome: " " ,  curso: " " ,  ano: " " });

  const handleFormChange = (e) => {
    if (e.target.getAttribute('name') === "fnome") {
      setForm({ nome: e.target.value, curso: form.curso, ano: form.ano });
    } else if (e.target.getAttribute('name') === "fcurso") {
      setForm({ nome: form.nome, curso: e.target.value, ano: form.ano });
    } else if (e.target.getAttribute('name') === "fano") {
      setForm({ nome: form.nome, curso: form.curso, ano: e.target.value });
    }
  };
  return (
    <>
      <h2>Formulário com Strings</h2>
      <label>Insira seu nome</label>
      <input
        type='text'
        name='fname'
        value={nomef}
        onChange={(e) => setNome(e.target.value)}
      />

      <label>Selecione um carro</label>
      <select
        values={carro}
        name='fcarro'
        onChange={(e) => setCarro(e.target.value)}
      >
        <option value='Gol'>Gol</option>
        <option value='Argo'>Argo</option>
        <option value='Siena'>Siena</option>
        <option value='Palio'>Palio</option>
        <option value='Ferrari'>Ferrari</option>
      </select>
      <p>Nome Digitado: {nomef}</p>
      <p>Carro selecionado: {carro}</p>

      <h2>Formulário com Objetos</h2>
      <label>Insira seu nome</label>
      <input
        type='text'
        name='fnome'
        value={form.nome}
        onChange={(e) => handleFormChange(e)}
      />

      <label>Insira um curso</label>
      <input
        type='text'
        name='fcurso'
        value={form.curso}
        onChange={(e) => handleFormChange(e)}
      />

      <label>Insira o ano</label>
      <input
        type='date'
        name='fano'
        value={form.ano}
        onChange={(e) => handleFormChange(e)}
      />

      <p>Nome do objeto: {form.nome}</p>
      <p>Curso do objeto: {form.curso}</p>
      <p>Ano do objeto: {form.ano}</p>
    </>
  );
}

export default Formulario;
