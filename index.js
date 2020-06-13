let arreglo = [3, 6, 4, 3, 1, 5, 3];
let ordenamiento;

for (let i = 0; i < arreglo.length; i++) {
  for (let j = 0; j < arreglo.length; j++) {
    if (arreglo[j] > arreglo[j + 1]) {
      ordenamiento = arreglo[j];
      arreglo[j] = arreglo[j + 1];
      arreglo[j + 1] = ordenamiento;
    }
  }
}

console.log("orden", arreglo);
