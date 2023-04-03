var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <title>Supermercado</title>
        <link rel="stylesheet" type="text/css" href="style1.css" />
        <header>
          {/* Cabeçalho com menu de navegação e tabela de links */}
          <nav>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="produtos.html">Produtos</a></li>
              <li><a href="contato.html">Contato</a></li>
            </ul>
          </nav>
          <table>
            {/* Tabela de links para outras páginas do site */}
            <tbody><tr>
                <td><a href="texto.html">Texto</a></td>
                <td><a href="formulario.html">Formulário</a></td>
                <td><a href="tabelas.html">Tabelas</a></td>
                <td><a href="imagens.html">Imagens</a></td>
              </tr>
            </tbody></table>
        </header>
        <main>
          {/* Seção principal com a lista de produtos em promoção, imagem promocional, formulário de pesquisa e informações de contato */}
          <h1>Produtos em Promoção</h1>
          {/* Tabela com os produtos em promoção */}
          <table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Preço Original</th>
                <th>Preço Promocional</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Arroz e Feijão</td>
                <td>R$ 15,00</td>
                <td>R$ 9,99</td>
              </tr>
              <tr>
                <td>Leite em Pó</td>
                <td>R$ 10,00</td>
                <td>R$ 7,99</td>
              </tr>
              <tr>
                <td>Kit Limpeza</td>
                <td>R$ 25,00</td>
                <td>R$ 19,99</td>
              </tr>
            </tbody>
          </table>
          {/* Imagem promocional */}
          <img src="https://fv9-6.failiem.lv/thumb.php?i=sncxkxvg3&n=promocao.png" alt="Promoção" />
          {/* Formulário de pesquisa */}
          <h2>Pesquise por um produto</h2>
          <form>
            <label htmlFor="produto">Produto:</label>
            <input type="text" id="produto" name="produto" /><br /><br />
            <label htmlFor="quantidade">Quantidade:</label>
            <input type="number" id="quantidade" name="quantidade" /><br /><br />
            <label htmlFor="opcao-1">Opção 1</label>
            <input type="radio" id="opcao-1" name="opcoes" />
            <label htmlFor="opcao-2">Opção 2</label>
            <input type="radio" id="opcao-2" name="opcoes" /><br /><br />
            <label htmlFor="check-1">Check 1</label>
            <input type="checkbox" id="check-1" name="checks" />
            <label htmlFor="check-2">Check 2</label>
            <input type="checkbox" id="check-2" name="checks" /><br /><br />
            <label htmlFor="selecao">Selecione uma opção:</label>
            <select id="selecao" name="selecao">
              <option value="opcao-1">Opção 1</option>
              <option value="opcao-2">Opção 2</option>
              <option value="opcao-3">Opção 3</option>
            </select><br /><br />
            <input type="submit" defaultValue="Pesquisar" />
          </form>
          <h2>Entre em contato conosco</h2>
          {/* tabela com informações de contato */}
          <table>
            <tbody><tr>
                <td>Telefone:</td>
                <td>(62) 0000-0000</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>contato@supermercado.com.br</td>
              </tr>
              <tr>
                <td>Endereço:</td>
                <td>Rua do Supermercado, 123 - Centro - Anápolis
                </td></tr>
            </tbody></table>
        </main>
        <footer>
          <p>© Supermercado 2023</p>
        </footer>
      </div>
    );
  }
});