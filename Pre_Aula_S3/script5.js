// função que inverte uma string
function inverterString(str) {
  // converte a string para uma array e inverte a ordem dos elementos
  let arr = str.split("").reverse();

  // converte a array de volta para uma string e retorna
  return arr.join("");
}

// obtém a string do usuário
let str = prompt("Digite uma string:");

// chama a função para inverter a string informada pelo usuário
let strInvertida = inverterString(str);

// exibe a string invertida na tela
alert(`A string invertida é: ${strInvertida}.`);