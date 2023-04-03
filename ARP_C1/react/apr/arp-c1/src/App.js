import React, { useState } from 'react';

import CadastroPaciente from './CadastroPaciente';
import AgendamentoConsulta from './AgendamentoConsulta';
import ConsultaPacientes from './ConsultaPacientes';
import ConsultaConsultas from './ConsultaConsultas';
import ListaMedicamentos from './ListaMedicamentos';

function App() {
  const [paginaAtual, setPaginaAtual] = useState('cadastro-paciente');

  let pagina;

  switch (paginaAtual) {
    case 'cadastro-paciente':
      pagina = <CadastroPaciente />;
      break;
    case 'agendamento-consulta':
      pagina = <AgendamentoConsulta />;
      break;
    case 'consulta-pacientes':
      pagina = <ConsultaPacientes />;
      break;
    case 'consulta-consultas':
      pagina = <ConsultaConsultas />;
      break;
    case 'lista-medicamentos':
      pagina = <ListaMedicamentos />;
      break;
    default:
      pagina = <h1>Bem-vindo ao sistema de cadastro e agendamento médico</h1>;
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={() => setPaginaAtual('cadastro-paciente')}>Cadastro de Paciente</button>
          </li>
          <li>
            <button onClick={() => setPaginaAtual('agendamento-consulta')}>Agendamento de Consulta</button>
          </li>
          <li>
            <button onClick={() => setPaginaAtual('consulta-pacientes')}>Consulta de Pacientes</button>
          </li>
          <li>
            <button onClick={() => setPaginaAtual('consulta-consultas')}>Consulta de Consultas</button>
          </li>
          <li>
            <button onClick={() => setPaginaAtual('lista-medicamentos')}>Lista de Medicamentos</button>
          </li>
        </ul>
      </nav>

      {pagina}
    </div>
  );
}

export default App;