// alert('hola mundo...')

// var no es recomendable, let

var num = 30
// mucho codigo despues.... 30 o 40 lineas
var num = 'algo'
//

var num = true
console.log(num)

let num1 = 1
let num2 = 2

if (true) {
   let num1 = 'hola'
}

var vTexto = 'esto es un texto';
console.log(vTexto);
var vNum1 = 10;
console.log(vNum1);
var vNum2 = 12;
console.log(vNum1);
var vTot = vNum1 + vNum2;
console.log(vTot);

saludo();

function saludo() {
    console.log('hola mundo')
}

// condicionales

var edad = 99;
var tiempo_carrera = 10;
var es_deportista = true;
var es_fumador = false;

console.log(es_deportista && es_fumador);

console.log(es_deportista || es_fumador);

if (es_deportista) {
    console.log('es deportista')
}

key = 4;
switch (key) {
    case 1:
        console.log("es uno")
        break;
    case 4:
        console.log("es cuatro")
        break;

    default:
        break;
}

/* var n = 1;

while ( n < 30) {
    console.log(n);
    n = n + 1;
}

a = [4,2,3,1];

console.log(a[1]);
console.log(a);

b = ['adfsd',3,false,a];

console.log(b);
 */

// Ejercicio, contar negativos

a = [4,-2,5,-3,-6]
cuentaNeg = 0
cuentaPos = 0
acuPos = 0
acuNeg = 0

res = [0,0,0,0];

const resultados = {
    contPos : 0,
    contNeg : 1,
    AcuPos : 2,
    AcuNeg : 3
}


for(let i = 0; i < a.length; i++) {
    if(a[i] > 0) {
      cuentaPos++;
      acuPos = acuPos + a[i];
      res[resultados.contPos]++;
      res[resultados.AcuPos] = res[resultados.AcuPos] + a[i] 
    } else {
      cuentaNeg++;
      acuNeg = acuNeg + a[i] 
      res[resultados.contNeg]++;
      res[resultados.AcuNeg] = res[resultados.AcuNeg] + a[i] 
    }
    
}

console.log('positivos ' + cuentaPos +' negativos ' + cuentaNeg);
console.log('acu positivos ' + acuPos +' negativos ' + acuNeg);

console.log('positivos ' + res[resultados.contPos] +' negativos ' + res[resultados.contNeg]);
console.log('acu positivos ' + res[resultados.AcuPos] +' negativos ' + res[resultados.AcuNeg]);




