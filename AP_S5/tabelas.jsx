var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <title>Supermercado - Tabelas</title>
        {/* Início da tabela de navegação */}
        <table>
          <tbody><tr>
              <td><a href="index.html">Menu</a></td>
            </tr>
          </tbody></table>
        {/* Fim da tabela de navegação */}
        {/* Título principal da página */}
        <h1>Produtos em Promoção</h1>
        {/* Tabela de produtos em promoção */}
        <table>
          <thead>
            {/* Cabeçalho da tabela */}
            <tr>
              <th>Produto</th>
              <th>Preço Original</th>
              <th>Preço Promocional</th>
            </tr>
          </thead>
          <tbody>
            {/* Linha da tabela com os dados do primeiro produto */}
            <tr>
              <td>Arroz</td>
              <td>R$ 10,00</td>
              <td>R$ 8,00</td>
            </tr>
            {/* Linha da tabela com os dados do segundo produto */}
            <tr>
              <td>Feijão</td>
              <td>R$ 8,00</td>
              <td>R$ 6,50</td>
            </tr>
            {/* Linha da tabela com os dados do terceiro produto */}
            <tr>
              <td>Azeite</td>
              <td>R$ 20,00</td>
              <td>R$ 16,00</td>
            </tr>
          </tbody>
        </table>
        {/* Título da segunda tabela */}
        <h1>Produtos Mais Vendidos</h1>
        {/* Tabela de produtos mais vendidos */}
        <table>
          <thead>
            {/* Cabeçalho da tabela */}
            <tr>
              <th>Produto</th>
              <th>Vendas</th>
            </tr>
          </thead>
          <tbody>
            {/* Linha da tabela com os dados do produto mais vendido */}
            <tr>
              <td>Leite</td>
              <td>500</td>
            </tr>
            {/* Linha da tabela com os dados do segundo produto mais vendido */}
            <tr>
              <td>Pão de Forma</td>
              <td>450</td>
            </tr>
            {/* Linha da tabela com os dados do terceiro produto mais vendido */}
            <tr>
              <td>Frango</td>
              <td>400</td>
            </tr>
          </tbody>
        </table>
        {/* Título da terceira tabela */}
        <h1>Produtos em Falta</h1>
        {/* Tabela de produtos em falta */}
        <table>
          <thead>
            {/* Cabeçalho da tabela */}
            <tr>
              <th>Produto</th>
              <th>Quantidade em Estoque</th>
            </tr>
          </thead>
          <tbody>
            {/* Linha da tabela com os dados do produto em falta */}
            <tr>
              <td>Água Mineral</td>
              <td>0</td>
            </tr>
            {/* Linha da tabela com os dados do segundo produto em falta */}
            <tr>
              <td>Leite Condensado</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Arroz Integral</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});