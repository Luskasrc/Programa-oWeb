/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Lucas Rodrigues Chaves
DATA: 30/03/2023
*/ 
import React, { useState } from 'react';

function ConsultaPacientes() {
const [nomePesquisado, setNomePesquisado] = useState('');
const [cpfPesquisado, setCpfPesquisado] = useState('');
const [pacientes] = useState([
{
id: 1,
nome: 'Maria',
dataNascimento: '01/01/1990',
cpf: '111.111.111-11',
endereco: 'Rua A, 123',
telefone: '(00) 0000-0000'
},
{
id: 2,
nome: 'João',
dataNascimento: '02/02/1995',
cpf: '222.222.222-22',
endereco: 'Rua B, 456',
telefone: '(00) 0000-0001'
},
{
id: 3,
nome: 'Pedro',
dataNascimento: '03/03/2000',
cpf: '333.333.333-33',
endereco: 'Rua C, 789',
telefone: '(00) 0000-0002'
}
]);

const handleNomePesquisado = (e) => {
setNomePesquisado(e.target.value);
}

const handleCpfPesquisado = (e) => {
setCpfPesquisado(e.target.value);
}

const filteredPacientes = pacientes.filter((paciente) => {
return paciente.nome.toLowerCase().includes(nomePesquisado.toLowerCase()) &&
paciente.cpf.includes(cpfPesquisado);
});

return (
<div>
<h2>Consulta de Pacientes</h2>
<label>
Nome:
<input type="text" value={nomePesquisado} onChange={handleNomePesquisado} />
</label>
<br />
<label>
CPF:
<input type="text" value={cpfPesquisado} onChange={handleCpfPesquisado} />
</label>
<br />
<table>
<thead>
<tr>
<th>Nome</th>
<th>Data de Nascimento</th>
<th>CPF</th>
<th>Endereço</th>
<th>Telefone</th>
      </tr>
    </thead>
    <tbody>
      {filteredPacientes.map((paciente) => (
        <tr key={paciente.id}>
          <td>{paciente.nome}</td>
          <td>{paciente.dataNascimento}</td>
          <td>{paciente.cpf}</td>
          <td>{paciente.endereco}</td>
          <td>{paciente.telefone}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
);
}

export default ConsultaPacientes;