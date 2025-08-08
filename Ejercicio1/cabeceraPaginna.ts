
class CabeceraPagina {
    // Propiedades privadas de la clase
    private titulo: string;
    private color: string;
    private fuente: string;
    private posicionTitulo: string;

    // Constructor para obtener propiedades
    constructor(tituloParam: string, colorParam: string, fuenteParam: string) {
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;
    }

    // Metodo para asignar la posicion del titulo
    posicionT(posicionTituloParam: "centrado" | "derecha" | "izquierda"): void {
        this.posicionTitulo = posicionTituloParam;
    }

    // Metodo para mostrar el contenido de la cabecera
    mostrarCabecera(): void {
        console.log("Título:", this.titulo);
        console.log("Color:", this.color);
        console.log("Fuente:", this.fuente);
        console.log("Alineación:", this.posicionTitulo);
    }
}

const cabecera = new CabeceraPagina("Cabecera de Pagina", "verde", "Arial");
cabecera.posicionT("derecha");
cabecera.mostrarCabecera();
