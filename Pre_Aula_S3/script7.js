// função que calcula a média de um conjunto de números
function calcularMedia(nums) {
  // se o conjunto de números estiver vazio, retorna NaN
  if (nums.length === 0) {
    return NaN;
  }

  // calcula a soma dos números
  let soma = 0;
  for (let i = 0; i < nums.length; i++) {
    soma += nums[i];
  }

  // calcula a média dos números
  let media = soma / nums.length;

  // retorna a média
  return media;
}

// obtém o conjunto de números do usuário
let nums = prompt("Digite um conjunto de números separados por vírgula:").split(",");

// converte os números para o tipo numérico
for (let i = 0; i < nums.length; i++) {
  nums[i] = Number(nums[i]);
}

// chama a função para calcular a média do conjunto de números informado pelo usuário
let media = calcularMedia(nums);

// exibe a média na tela
if (isNaN(media)) {
  alert("O conjunto de números informado é vazio.");
} else {
  alert(`A média dos números informados é: ${media.toFixed(2)}.`);
}
