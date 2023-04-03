// função que implementa o cálculo do fatorial
function calcularFatorial(num) {
  // variável para armazenar o resultado do fatorial
  let resultado = 1;

  // loop para calcular o fatorial
  for (let i = 1; i <= num; i++) {
    resultado *= i;
  }

  // retorna o resultado do fatorial
  return resultado;
}

// obtém o número do usuário
let num = parseInt(prompt("Digite um número:"));

// chama a função para calcular o fatorial do número informado
let resultado = calcularFatorial(num);

// exibe o resultado do fatorial na tela
alert(`O fatorial de ${num} é ${resultado}.`);