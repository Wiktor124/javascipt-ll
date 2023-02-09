// ------- Prototipos ----------------------------------------

// Persona
const personaProto = {
  caminar() {
    return `Soy ${this.nombre} y estoy caminando.`
  },
  saludar() {
    return `Hola! Soy ${this.nombre}.`
  },
  comer() {
    return `Soy ${this.nombre} y estoy comiendo.`
  }
}

// Estudiante
const estudianteProto = Object.create(personaProto);

estudianteProto.estudiar = function() {
  return `Soy ${this.nombre}, tengo ${this.edad} años y estoy estudiado en la ${this.escuela}`
}
estudianteProto.dormir = function () {
  return `Soy ${this.nombre} y estoy durmiendo.`
}

// Profesor
const profesorProto = Object.create(personaProto);

profesorProto.ensenar = function () {
  return `Soy ${this.carrera} y enseño en el la ${this.escuela}`
}

profesorProto.calificar = function () {
  return `Soy ${this.carrera} y estoy calificando`
}

// ------- Constructores ----------------------------------------

// Estudiante
function EstudianteConstructor (nombre, edad, escuela) {
  this.nombre = nombre;
  this.edad = edad;
  this.escuela = escuela;
}
EstudianteConstructor.prototype = estudianteProto;

const estudiante = new EstudianteConstructor('Lisa', 20, 'UCR')

console.log(estudiante);
console.log(`
------ Estudiante ------

- ${estudiante.caminar()}
- ${estudiante.saludar()}
- ${estudiante.comer()}
- ${estudiante.estudiar()}
- ${estudiante.dormir()}
`);


// Profesor
function ProfesorContructor (nombre, carrera, escuela) {
  this.nombre = nombre;
  this.carrera = carrera;
  this.escuela = escuela;
}
ProfesorContructor.prototype = profesorProto;

const profesor = new ProfesorContructor('John', 'Ingeniero', 'UCR')

console.log(profesor);
console.log(`
------ Profesor ------

- ${profesor.caminar()}
- ${profesor.saludar()}
- ${profesor.comer()}
- ${profesor.ensenar()}
- ${profesor.calificar()}
`);

