var Cancion = /** @class */ (function () {
    // Constructor
    function Cancion(tituloParam, generoParam, autorParam) {
        this.titulo = tituloParam;
        this.genero = generoParam;
        this.autor = autorParam;
    }
    // Getter y Setter para autor
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    Cancion.prototype.setAutor = function (autorParam) {
        this.autor = autorParam;
    };
    // Metodo para mostrar los datos de la cancion
    Cancion.prototype.mostrarDatosCancion = function () {
        console.log("Título:", this.titulo);
        console.log("Género:", this.genero);
        console.log("Autor:", this.autor);
    };
    return Cancion;
}());
var cancion = new Cancion("Un siglo sin Ti", "Pop", "Chayanne");
cancion.mostrarDatosCancion();
