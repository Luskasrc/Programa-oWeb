var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        {/* Código HTML para um formulário de contato com o título "Supermercado - Formulário". */}
        {/* Título da página. */}
        <title>Supermercado - Formulário</title>
        {/* Inclusão de arquivo de estilo externo. */}
        <link rel="stylesheet" type="text/css" href="style.css" />
        {/* Criação de uma tabela para o menu da página. */}
        <table>
          <tbody><tr>
              <td><a href="index.html">Menu</a></td>
            </tr>
          </tbody></table>
        {/* Criação de um cabeçalho principal. */}
        <h1>Entre em contato</h1>
        {/* Criação de um formulário com ação "processar-formulario.php" e método POST. */}
        <form action="processar-formulario.php" method="post">
          {/* Criação de um campo de entrada de texto com rótulo "Nome" e atributo "required". */}
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />
          <br />
          {/* Criação de um campo de entrada de e-mail com rótulo "E-mail" e atributo "required". */}
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" required />
          <br />
          {/* Criação de um campo de entrada de texto com rótulo "Mensagem" e atributo "required". */}
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" required defaultValue={""} />
          <br />
          {/* Criação de um campo de seleção com rótulo "Motivo do contato" e opções "Dúvida", "Sugestão" e "Reclamação". */}
          <label htmlFor="motivo">Motivo do contato:</label>
          <select id="motivo" name="motivo">
            <option value="duvida">Dúvida</option>
            <option value="sugestao">Sugestão</option>
            <option value="reclamacao">Reclamação</option>
          </select>
          <br />
          {/* Criação de um campo de seleção com rótulo "Quero receber e-mails com promoções" e valor padrão "checked". */}
          <label htmlFor="receber-emails">Quero receber e-mails com promoções:</label>
          <input type="checkbox" id="receber-emails" name="receber-emails" defaultChecked />
          <br />
          {/* Criação de botões de envio e limpeza do formulário. */}
          <input type="submit" defaultValue="Enviar" />
          <input type="reset" defaultValue="Limpar" />
        </form>
      </div>
    );
  }
});