var Cancion = /** @class */ (function () {
    function Cancion(tituloParam, generoParam, autorParam) {
        this.titulo = tituloParam;
        this.genero = generoParam;
        this.autor = autorParam;
    }
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    Cancion.prototype.setAutor = function (autorParam) {
        this.autor = autorParam;
    };
    Cancion.prototype.mostrarDatosCancion = function () {
        console.log("Título:", this.titulo);
        console.log("Género:", this.genero);
        console.log("Autor:", this.autor);
    };
    return Cancion;
}());
// Ejemplo de uso
var cancion = new Cancion("Un siglo sin Ti", "Rock", "Chayanne");
cancion.mostrarDatosCancion();
