var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}
function Estudiante(nombre,puntosTecnico,puntosHSE)
{
  this.nombre=nombre;
  this.tec=puntosTecnico;
  this.hse=puntosHSE;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nombre=prompt("Ingrese el nombre");
    var puntosTec=prompt("Ingrese los puntos tecnicos");
    var puntosHSE=prompt("Ingrese los puntos Habilidades Socio-Emocionales")
    var estudianteAgregada= new Estudiante(nombre,puntosTec,puntosHSE);
    estudiantes.push(estudianteAgregada);
    return  estudianteAgregada;
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.tec + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.hse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    estudiantes = obtenerListaEstudiantes();
    var resultado="";
    estudiantes.forEach(function(estudiante){
        resultado+=mostrar(estudiante);
    });
    return resultado;
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    estudiantes = obtenerListaEstudiantes();
    var respuesta="";
    estudiantes.forEach(function(estudiante){
      if(estudiante.nombre.toUpperCase()==nombre.toUpperCase()){
        respuesta=estudiante;
      }
    });
    return respuesta;
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    estudiantes=obtenerListaEstudiantes();
    estudiantes.sort(function(estudiante1,estudiante2){
        return (estudiante2.tec-estudiante1.tec);
    });
    return estudiantes;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    estudiantes=obtenerListaEstudiantes();
    estudiantes.sort(function(estudiante1,estudiante2){
        return (estudiante2.hse-estudiante1.hse);
    });
    return estudiantes;
}
