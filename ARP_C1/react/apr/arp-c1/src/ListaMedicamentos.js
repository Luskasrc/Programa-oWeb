/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Lucas Rodrigues Chaves
DATA: 30/03/2023
*/ 
import React, { useState } from 'react';
import './ListaMedicamento.css';

function ListaMedicamentos() {
  const [medicamentos, setMedicamentos] = useState([]);
  const [nomeMedicamento, setNomeMedicamento] = useState('');

  const handleNomeMedicamento = (e) => {
    setNomeMedicamento(e.target.value);
  }

  const adicionarMedicamento = () => {
    if (nomeMedicamento !== '') {
      setMedicamentos([...medicamentos, nomeMedicamento]);
      setNomeMedicamento('');
    }
  }

  const removerMedicamento = (medicamento) => {
    const novoArrayMedicamentos = medicamentos.filter((item) => item !== medicamento);
    setMedicamentos(novoArrayMedicamentos);
  }

  return (
    <div className="lista-medicamentos">
      <h2>Lista de Medicamentos</h2>
      <div className="formulario">
        <label>
          Nome do Medicamento:
          <input type="text" value={nomeMedicamento} onChange={handleNomeMedicamento} />
        </label>
        <button onClick={adicionarMedicamento}>Adicionar Medicamento</button>
      </div>
      <ul>
        {medicamentos.map((medicamento, index) => (
          <li key={index}>
            {medicamento}
            <button onClick={() => removerMedicamento(medicamento)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaMedicamentos;