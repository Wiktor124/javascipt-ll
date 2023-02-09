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
  return `Soy ${this.nombre}, tengo ${this.edad} años y estoy estudiado en ${this.escuela}`
}
estudianteProto.dormir = function () {
  return `Soy ${this.nombre} y estoy durmiendo.`
}

// Profesor
const profesorProto = Object.create(personaProto);

profesorProto.ensenar = function () {
  return `Soy ${this.carrera} y enseño en ${this.escuela}`
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

const estudianteLisa = new EstudianteConstructor('Lisa', 20, 'la UCR')

console.log(estudianteLisa);
console.log(`
------ Estudiante Lisa ------

- ${estudianteLisa.caminar()}
- ${estudianteLisa.saludar()}
- ${estudianteLisa.comer()}
- ${estudianteLisa.estudiar()}
- ${estudianteLisa.dormir()}
`);


const estudianteSergio = new EstudianteConstructor('Sergio', 19, 'el TEC')

console.log(estudianteSergio);
console.log(`
------ Estudiante Sergio ------

- ${estudianteSergio.caminar()}
- ${estudianteSergio.saludar()}
- ${estudianteSergio.comer()}
- ${estudianteSergio.estudiar()}
- ${estudianteSergio.dormir()}
`);


// Profesores
function ProfesorContructor (nombre, carrera, escuela) {
  this.nombre = nombre;
  this.carrera = carrera;
  this.escuela = escuela;
}
ProfesorContructor.prototype = profesorProto;

const profesorJohn = new ProfesorContructor('John', 'Ingeniero', 'la UCR')


console.log(profesorJohn);
console.log(`
------ Profesor John ------

- ${profesorJohn.caminar()}
- ${profesorJohn.saludar()}
- ${profesorJohn.comer()}
- ${profesorJohn.ensenar()}
- ${profesorJohn.calificar()}
`);

const profesorCarlos = new ProfesorContructor('Carlos', 'Físico Matemático', 'el TEC')

console.log(profesorCarlos);
console.log(`
------ Profesor Carlos ------

- ${profesorCarlos.caminar()}
- ${profesorCarlos.saludar()}
- ${profesorCarlos.comer()}
- ${profesorCarlos.ensenar()}
- ${profesorCarlos.calificar()}
`);