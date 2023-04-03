// função que conta o número de palavras em uma string
function contarPalavras(str) {
  // remove os espaços em branco do início e fim da string
  str = str.trim();

  // se a string estiver vazia, retorna 0
  if (str === "") {
    return 0;
  }

  // divide a string em palavras usando um ou mais espaços como separador
  let palavras = str.split(/\s+/);

  // retorna o número de palavras
  return palavras.length;
}

// obtém a string do usuário
let str = prompt("Digite uma string:");

// chama a função para contar o número de palavras na string informada pelo usuário
let numPalavras = contarPalavras(str);

// exibe o número de palavras na tela
alert(`A string informada contém ${numPalavras} palavras.`);
