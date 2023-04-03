/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Lucas Rodrigues Chaves
DATA: 30/03/2023
*/ 
import React from 'react';
import './ConsultaConsultas.css';

function ConsultaConsultas() {
return (
<div className="container">
<h1>Consulta de Consultas</h1>
<div className="search-box">
<input type="text" placeholder="Pesquisar por paciente ou médico" />
<button type="submit">Buscar</button>
</div>
<table>
<thead>
<tr>
<th>Paciente</th>
<th>Médico</th>
<th>Data</th>
<th>Horário</th>
<th>Ações</th>
</tr>
</thead>
<tbody>
<tr>
<td>João Silva</td>
<td>Dr. José da Silva</td>
<td>01/04/2023</td>
<td>14:00</td>
<td>
<button>Editar</button>
<button>Excluir</button>
</td>
</tr>
<tr>
<td>Maria Souza</td>
<td>Dra. Ana Santos</td>
<td>03/04/2023</td>
<td>10:00</td>
<td>
<button>Editar</button>
<button>Excluir</button>
</td>
</tr>
      <tr>
        <td>Lucas Oliveira</td>
        <td>Dr. Felipe Rodrigues</td>
        <td>05/04/2023</td>
        <td>16:30</td>
        <td>
          <button>Editar</button>
          <button>Excluir</button>
        </td>
      </tr>
      <tr>
        <td>Julia Pereira</td>
        <td>Dra. Mariana Alves</td>
        <td>06/04/2023</td>
        <td>09:00</td>
        <td>
          <button>Editar</button>
          <button>Excluir</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
);
}

export default ConsultaConsultas;