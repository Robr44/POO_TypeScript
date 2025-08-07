var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(tituloParam, colorParam, fuenteParam) {
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;
    }
    CabeceraPagina.prototype.cabecera = function (tituloParam, colorParam, fuenteParam) {
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;
    };
    CabeceraPagina.prototype.posicionT = function (posicionTituloParam) {
        this.posicionTitulo = posicionTituloParam;
    };
    CabeceraPagina.prototype.mostrarCabecera = function () {
        console.log("Título:", this.titulo);
        console.log("Color:", this.color);
        console.log("Fuente:", this.fuente);
        console.log("Alineación:", this.posicionTitulo);
    };
    return CabeceraPagina;
}());
// Ejemplo de uso
var cabecera = new CabeceraPagina("Mi Página", "azul", "Arial");
cabecera.posicionT("derecha");
cabecera.mostrarCabecera();
