// função que implementa o algoritmo Bubble Sort
function bubbleSort(arr) {
  // variável para armazenar o tamanho do array
  let len = arr.length;
  
  // loop externo percorre todo o array
  for (let i = 0; i < len; i++) {
    // loop interno percorre do início até o penúltimo elemento
    for (let j = 0; j < len - 1; j++) {
      // compara o elemento atual com o próximo elemento
      if (arr[j] > arr[j + 1]) {
        // se o elemento atual for maior que o próximo, troca os dois elementos
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  
  // retorna o array ordenado
  return arr;
}