/* let array = [22,44,55,66,77,88,99];

let resultado = array.filter(function(elemento){

    return elemento > 60;
})
console.log(resultado);
*/
/*
let objeto = [
    {
        id: 1,
        nombre: "uno"
    },
    {
        id: 2,
        nombre: "dos"
    },
    {
        id: 3,
        nombre: "tres"
    }

];

let resultado = objeto.map(elemento => {
                                     let vuelta =  elemento.id = 4
                                                    elemento.nombre = "javier" 
                                     return vuelta;           });

console.log(resultado)
*/
/*
let resultado = objeto.filter(elemento => elemento.id === 1)
console.log(resultado);

let numero = (elemento, multi) => elemento * multi;
 
console.log(numero(10 , 10))
*/

var kvArray = [{clave:1, valor:10},
    {clave:2, valor:20},
    {clave:3, valor: 30}];

var reformattedArray = kvArray.map(function(obj){
/* var rObj = {};
rObj[obj.clave] = obj.valor;
rObj[obj.valor] = obj.valor; */

var rObj = {};
 rObj[obj.valor] = 2;

return rObj;
});
console.log(reformattedArray);
