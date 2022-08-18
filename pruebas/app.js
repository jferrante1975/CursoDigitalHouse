const autos = require('./autos');

let persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 2000000,
    capacidadDePagoTotal: 100000000
}
    

let concesionaria = {
   autos: autos,
 
   buscarAuto: function(patente){
      let objAutos ;
      for (i = 0; i < autos.length; i++){
     if(autos[i].patente == patente){
        objAutos = autos[i];
        break;
        }
        else {
            objAutos = null;
        } }
        return objAutos;
    },

   venderAuto: function(patente){
      let auto = this.buscarAuto(patente);
        if (auto !=null){ auto.vendido = true}
             },
     autosParaLaVenta: function(){
      return  this.autos.filter(sinVender => sinVender.vendido == false);
    },
    autosNuevos: function(){
       return this.autosParaLaVenta(autos).filter(ok => ok.km < 100)
    },
    listaDeVentas: function(){
        let lista = this.autos.filter(vendidos => vendidos.vendido == true);
        let = listaPrecio = [];
        for (i = 0; i < lista.length; i ++){
            
            listaPrecio.push(lista[i].precio);
        }
        return listaPrecio;
            
    },
    totalDeVentas: function(){
       let lista = this.autos.filter(vendidos => vendidos.vendido == true);
      return lista.reduce((total, lista) => total + lista.precio, 0)
       },
           puedeComprar: function(auto,persona){

        let precioCuota = auto.precio / auto.cuotas;

        if (persona.capacidadDePagoTotal > auto.precio && precioCuota < persona.capacidadDePagoEnCuotas)
         {return true }
         else {return false} 

       },
       autosQuePuedeComprar: function(persona){
          
          let autosVenta = this.autosParaLaVenta(this.autos);
          let autosComprar = [];
          autosVenta.forEach(unAuto => {
            if (this.puedeComprar(unAuto,persona) == true){
                autosComprar.push(unAuto);
            }
           
          })
            return autosComprar;
       }       
    }
console.log(concesionaria.autosQuePuedeComprar(persona))