// função que encontra a palavra mais longa em uma string
function encontrarPalavraMaisLonga(str) {
  // separa as palavras da string em um array
  let palavras = str.split(" ");

  // inicializa a variável para armazenar a palavra mais longa
  let palavraMaisLonga = "";

  // percorre as palavras da string e atualiza a variável palavraMaisLonga com a palavra mais longa encontrada
  for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].length > palavraMaisLonga.length) {
      palavraMaisLonga = palavras[i];
    }
  }

  // retorna a palavra mais longa encontrada
  return palavraMaisLonga;
}

// obtém a string do usuário
let str = prompt("Digite uma string:");

// chama a função para encontrar a palavra mais longa na string informada pelo usuário
let palavraMaisLonga = encontrarPalavraMaisLonga(str);

// exibe a palavra mais longa na tela
alert(`A palavra mais longa na string é: ${palavraMaisLonga}`);
