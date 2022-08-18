const fs = require('fs');
let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        let tareas = fs.readFileSync(this.archivo, 'utf-8');
        return JSON.parse(tareas);
    },
    escribirJSON: function(array){
       fs.writeFileSync(this.archivo,JSON.stringify(array, null, ' '));
    },
    guardarTarea: function(tarea){
        let tareas = this.leerArchivo();
        tareas.push(tarea);
        this.escribirJSON(tareas);
    },
    filtrarPorEstado: function(filtro){
        let tareas = this.leerArchivo();
        return tareas.filter(tarea => tarea.estado == filtro);
    }
}
module.exports = archivoTareas;
