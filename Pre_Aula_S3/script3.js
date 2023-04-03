// função que gera uma série de Fibonacci até um determinado número
function gerarFibonacci(num) {
  // array para armazenar a série de Fibonacci
  let fib = [0, 1];

  // loop para gerar a série de Fibonacci
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  // retorna a série de Fibonacci
  return fib;
}

// obtém o número máximo da série do usuário
let numMaximo = parseInt(prompt("Digite o número máximo da série de Fibonacci:"));

// chama a função para gerar a série de Fibonacci até o número informado pelo usuário
let serieFibonacci = gerarFibonacci(numMaximo);

// exibe a série de Fibonacci gerada na tela
alert(`A série de Fibonacci até ${numMaximo} é: ${serieFibonacci.join(", ")}.`);
