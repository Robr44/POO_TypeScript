var CabeceraPagina = /** @class */ (function () {
    // Constructor para obtener atributos
    function CabeceraPagina(tituloParam, colorParam, fuenteParam) {
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;
    }
    // Metodo para asignar la posicion del titulo
    CabeceraPagina.prototype.posicionT = function (posicionTituloParam) {
        this.posicionTitulo = posicionTituloParam;
    };
    // Metodo para mostrar el contenido de la cabecera
    CabeceraPagina.prototype.mostrarCabecera = function () {
        console.log("Título:", this.titulo);
        console.log("Color:", this.color);
        console.log("Fuente:", this.fuente);
        console.log("Alineación:", this.posicionTitulo);
    };
    return CabeceraPagina;
}());
var cabecera = new CabeceraPagina("Cabecera de Pagina", "verde", "Arial");
cabecera.posicionT("derecha");
cabecera.mostrarCabecera();
