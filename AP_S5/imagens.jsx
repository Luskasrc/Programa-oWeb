var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <title>Supermercado - Imagens</title>
        <link rel="stylesheet" type="text/css" href="style3.css" />
        {/* Início da tabela de navegação */}
        <table>
          <tbody><tr>
              <td><a href="index.html">Menu</a></td>
            </tr>
          </tbody></table>
        {/* Fim da tabela de navegação */}
        {/* Título principal da página */}
        <h1>Ofertas Especiais</h1>
        {/* Descrição das ofertas em destaque */}
        <p>Confira nossas ofertas especiais em destaque!</p>
        {/* Oferta 1: Arroz e Feijão */}
        <h2>Arroz e Feijão</h2>
        <img src="https://cf.shopee.com.br/file/f494a43c7793ebbbb898e274a4900124" width={200} height={200} alt="Arroz e Feijão" />
        <p>Arroz e Feijão por apenas R$ 9,99!</p>
        {/* Oferta 2: Leite em Pó */}
        <h2>Leite em Pó</h2>
        <img src="https://fv9-7.failiem.lv/thumb.php?i=5q5u9qyxp&n=leitepo.png" width={200} height={250} alt="Leite em Pó" />
        <p>Leite em Pó por apenas R$ 7,99!</p>
        {/* Oferta 3: Kit Limpeza */}
        <h2>Kit Limpeza</h2>
        <img src="https://fv9-7.failiem.lv/thumb.php?i=9pscg67yb&n=limpeza.png" alt="Kit Limpeza" />
        <p>Kit Limpeza por apenas R$ 19,99!</p>
      </div>
    );
  }
});