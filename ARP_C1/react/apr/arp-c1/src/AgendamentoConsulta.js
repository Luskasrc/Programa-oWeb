/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Lucas Rodrigues Chaves
DATA: 30/03/2023
*/ 
import React from 'react';

import './AgendamentoConsulta.css';

function AgendamentoConsulta() {
  return (
    <div className="container">
      <h1>Agendamento de Consulta</h1>

      <form>
        <div className="form-group">
          <label htmlFor="data-consulta">Data da Consulta:</label>
          <input type="date" id="data-consulta" name="data-consulta" required />
        </div>
        <div className="form-group">
          <label htmlFor="hora-consulta">Hora da Consulta:</label>
          <input type="time" id="hora-consulta" name="hora-consulta" required />
        </div>
        <div className="form-group">
          <label htmlFor="medico">Médico:</label>
          <select id="medico" name="medico" required>
            <option value="">Selecione um médico</option>
            <option value="1">Dr. João</option>
            <option value="2">Dr. Maria</option>
            <option value="3">Dr. José</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="tipo-consulta">Tipo de Consulta:</label>
          <select id="tipo-consulta" name="tipo-consulta" required>
            <option value="">Selecione o tipo de consulta</option>
            <option value="1">Consulta de rotina</option>
            <option value="2">Consulta de emergência</option>
            <option value="3">Consulta de acompanhamento</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit">Agendar Consulta</button>
        </div>
      </form>
    </div>
  );
}

export default AgendamentoConsulta;