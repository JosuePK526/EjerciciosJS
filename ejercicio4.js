function sumaArreglo(arr) {
    let suma = 0;
    for (let numero of arr) {
      suma += numero;
    }
    return suma;
  }
  
  console.log(sumaArreglo([1, 2, 3, 4, 5]));
  