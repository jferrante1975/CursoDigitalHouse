let javier = require('./Clase2/javier_ferrante');
let franco = require('./Clase2/franco_ferrante');
let martina = require('./Clase2/martina_ferrante');
let maura = require('./Clase2/maura_ferrante');

let lista = [javier,franco,martina,maura];

for (i=0; i<lista.length;i++){

    console.log("Nombre: " + lista[i][0] + ", le gusta: " + lista[i][1] + ", vive en: " + lista[i][2]);
}

