/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Lucas Rodrigues Chaves
DATA: 30/03/2023
*/ 
import React from 'react';

import './CadastroPaciente.css';

function CadastroPaciente() {
  return (
    <div className="container">
      <h1>Cadastro de Paciente</h1>

      <form>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />
        </div>
        <div className="form-group">
          <label htmlFor="data-nascimento">Data de Nascimento:</label>
          <input type="date" id="data-nascimento" name="data-nascimento" required />
        </div>
        <div className="form-group">
          <label htmlFor="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" maxLength={11} required />
        </div>
        <div className="form-group">
          <label htmlFor="endereco">Endereço:</label>
          <input type="text" id="endereco" name="endereco" required />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone:</label>
          <input type="text" id="telefone" name="telefone" required />
        </div>
        <div className="form-group">
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

export default CadastroPaciente;