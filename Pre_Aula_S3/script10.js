// função que calcula o fatorial de um número usando recursão
function fatorial(numero) {
  // caso base
  if (numero === 0) {
    return 1;
  }

  // caso recursivo
  return numero * fatorial(numero - 1);
}

// obtém o número do usuário
let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));

// chama a função fatorial e exibe o resultado na tela
alert(`O fatorial de ${numero} é ${fatorial(numero)}`);
