const peliculas = require('./movies');

let moviesDH = {
    listMovies: function()
    {
       return peliculas.forEach(pelicula => pelicula);
    },
    searchMovie: function(id){
        let datosPelicula = peliculas.find(pelicula => pelicula.id == id)
        return datosPelicula !== undefined ? datosPelicula : null;
    },
    searchMoviesByGenere: function(genero){
        let pelicula = peliculas.filter(pelicula => pelicula.genere == genero);
        return pelicula !== undefined ? pelicula : null; 
    },
    totalPrice: function(){
        let precioTotal = peliculas.reduce((acum, precio) => acum + precio);
        return precioTotal;
    },
    changeMovieGenre: function(id, genero){
        let pelicula = this.searchMovie(id);
            pelicula.genere = genero;
            return pelicula;
    }
}

console.log(moviesDH.searchMoviesByGenere('Comedia'));