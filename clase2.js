console.log("clase 2")

const actor = {
    nombre: 'Carlos',
    edad: 45
}

console.log(actor)

console.log(actor.nombre)

actor.sueldo = 65000

console.log(actor.sueldo)

actor.edad = 50

console.log(actor)

//Object.freeze(actor)

actor.peliculas = ['matrix','jhon week']


Object.seal(actor)

actor.edad = 40
console.log(actor)


/*
let pelota = {forma: 'circular', peso: 35, presión: 50}

console.log(pelota)
*/



/*
function Cliente(dni, nombre, zona) {
    this.dni = dni,
    this.nombre = nombre,
    this.zona = zona
}
pers1 = new Cliente(34234565, "jose", 1)
console.log(pers1)
*/


