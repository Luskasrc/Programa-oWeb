var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <title>Supermercado - Elementos de Texto</title>
        {/* Adicionando um arquivo de estilo externo */}
        <link rel="stylesheet" type="text/css" href="style2.css" />
        {/* Criação de uma tabela simples para o menu de navegação */}
        <table>
          <tbody><tr>
              <td><a href="index.html">Menu</a></td>
            </tr>
          </tbody></table>
        {/* Cabeçalho principal da página */}
        <h1>Bem-vindo ao Supermercado</h1>
        {/* Parágrafo informativo sobre o supermercado */}
        <p>Este é um supermercado de última geração que oferece os melhores produtos alimentícios e de consumo para você e sua família.</p>
        {/* Subtítulo para os departamentos */}
        <h2>Nossos Departamentos:</h2>
        {/* Lista não ordenada para os departamentos */}
        <ul>
          <li>Alimentos</li>
          <li>Bebidas</li>
          <li>Higiene Pessoal</li>
          <li>Limpeza Doméstica</li>
        </ul>
        {/* Parágrafo de chamada para a página de contato */}
        <p>Para mais informações, por favor, visite a nossa página de <a href="#">Contato</a>.</p>
      </div>
    );
  }
});