// função que soma todos os números em uma matriz
function somarMatriz(matriz) {
  let soma = 0;

  // percorre cada linha da matriz
  for (let i = 0; i < matriz.length; i++) {
    // percorre cada coluna da linha atual
    for (let j = 0; j < matriz[i].length; j++) {
      // adiciona o valor atual à soma
      soma += matriz[i][j];
    }
  }

  // retorna a soma total
  return soma;
}

// obtém a matriz do usuário
let matriz = [];

// pergunta ao usuário quantas linhas a matriz terá
let numLinhas = prompt("Digite o número de linhas da matriz:");

// pergunta ao usuário quantas colunas a matriz terá
let numColunas = prompt("Digite o número de colunas da matriz:");

// preenche a matriz com os valores fornecidos pelo usuário
for (let i = 0; i < numLinhas; i++) {
  matriz[i] = [];
  for (let j = 0; j < numColunas; j++) {
    matriz[i][j] = prompt(`Digite o valor da posição [${i}][${j}] da matriz:`);
  }
}

// chama a função para somar todos os números na matriz informada pelo usuário
let soma = somarMatriz(matriz);

// exibe a soma na tela
alert(`A soma de todos os números na matriz é: ${soma}`);