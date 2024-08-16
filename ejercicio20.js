function diaDeLaSemana(fecha) {
    const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    return dias[fecha.getDay()];
  }
  
  let fecha = new Date();
  console.log(diaDeLaSemana(fecha));
  