// Función para sumar las respuestas de un grupo de preguntas
function sumarGrupoPreguntas(preguntas) {
    // Variable para almacenar la suma de las respuestas del grupo
    let sumaRespuestasGrupo = 0;
  
    // Iteramos sobre las preguntas del grupo y sumamos sus respuestas
    preguntas.forEach(function(numeroPregunta) {
      // Obtenemos el elemento select de la pregunta
      const selectPregunta = document.getElementById('q' + numeroPregunta);
      // Obtenemos el valor seleccionado en la pregunta
      const respuesta = selectPregunta.options[selectPregunta.selectedIndex].value;
      // Convertimos la respuesta a un número entero y la sumamos
      sumaRespuestasGrupo += parseInt(respuesta);
    });
  
    // Devolvemos la suma de las respuestas del grupo
    return sumaRespuestasGrupo;
  }
  
  // Función para comparar las sumas de los grupos y encontrar el mayor
  function encontrarGrupoMayor() {
    // Definimos los grupos de preguntas
    const gruposPreguntas = {
      'A': [9, 10, 17, 22, 30],
      'B': [5, 7, 15, 20, 25],
      'C': [1, 11, 14, 23, 27],
      'D': [8, 16, 19, 21, 29],
      'E': [3, 4, 13, 24, 28],
      'F': [2, 6, 26, 31, 33],
      'G': [12, 18, 32, 34, 35]
    };
  
    // Variable para almacenar la suma más grande
    let sumaMayor = 0;
    // Variable para almacenar el grupo con la suma más grande
    let grupoMayor = '';
  
    // Iteramos sobre los grupos de preguntas
    for (const grupo in gruposPreguntas) {
      // Sumamos las respuestas del grupo actual
      const sumaActual = sumarGrupoPreguntas(gruposPreguntas[grupo]);
      // Si la suma actual es mayor que la suma mayor, actualizamos la suma mayor y el grupo mayor
      if (sumaActual > sumaMayor) {
        sumaMayor = sumaActual;
        grupoMayor = grupo;
      }
    }
  
    // Devolvemos el grupo con la suma más grande
    return grupoMayor;
  }