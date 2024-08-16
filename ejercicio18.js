function formatoPersona(persona) {
    return `Nombre: ${persona.nombre}, Edad: ${persona.edad}`;
  }
  
  console.log(formatoPersona({ nombre: 'Ana', edad: 25 }));
  