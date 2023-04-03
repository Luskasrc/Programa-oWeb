// função que verifica se um número é primo
function verificarPrimo(num) {
  // se o número for menor ou igual a 1, não é primo
  if (num <= 1) {
    return false;
  }

  // loop para verificar se o número é divisível por algum outro número
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      // se o número for divisível por algum outro número, não é primo
      return false;
    }
  }

  // se o número não for divisível por nenhum outro número, é primo
  return true;
}

// obtém o número do usuário
let num = parseInt(prompt("Digite um número:"));

// chama a função para verificar se o número informado é primo ou não
let ehPrimo = verificarPrimo(num);

// exibe o resultado na tela
if (ehPrimo) {
  alert(`${num} é um número primo.`);
} else {
  alert(`${num} não é um número primo.`);
}