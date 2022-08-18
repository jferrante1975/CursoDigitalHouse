// let horariosPartida = [12, 14, 18, 21];

// let horariosAtrasados = horariosPartida.map(function(horarios){
//     return horarios + 1;
// });

// console.log(horariosAtrasados);

// let vueltas = [5, 8, 12, 3, 22]

// let totalVueltas = vueltas.reduce(function(cantidad, vuelta){
   
//     return cantidad + vuelta;
// });

// console.log(totalVueltas);

// let listaDeSuperMercado = [
//     'Bife de chorizo', 
//     'Coca Cola', 
//     'Bananas', 
//     'Lechuga', 
//     'Chimichurri', 
//     'Lata de tomates', 
//     'Arvejas', 
//     'Cereales', 
//     'Pechuga de pollo', 
//     'Leche'
// ];

// listaDeSuperMercado.forEach(function(item){
//     console.log(item);
// })
/*
let fecha = new Date();

console.log("Día: "+fecha.getDate())
console.log('Hoy es el día '+ fecha.getDate() + ' del mes '+fecha.getMonth() + ' del año '+ fecha.getFullYear())
*/

let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [,ba,,chi] = destinosDelMundo;

console.log(ba);
console.log(chi);