function contarLetra(cadena, letra) {
    let contador = 0;
    for (let char of cadena) {
      if (char === letra) {
        contador++;
      }
    }
    return contador;
  }
  
  console.log(contarLetra('banana', 'a'));
  