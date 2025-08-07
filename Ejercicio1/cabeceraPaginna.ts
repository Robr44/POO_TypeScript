
class CabeceraPagina {
    // Propiedades privadas de la clase
    private titulo: string;
    private color: string;
    private fuente: string;
    private posicionTitulo: string;


    constructor(tituloParam: string, colorParam: string, fuenteParam: string) {
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;
    }

    cabecera(tituloParam: string, colorParam: string, fuenteParam: string): void {
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;
    }

    posicionT(posicionTituloParam: "centrado" | "derecha" | "izquierda"): void {
        this.posicionTitulo = posicionTituloParam;
    }

    mostrarCabecera(): void {
        console.log("Título:", this.titulo);
        console.log("Color:", this.color);
        console.log("Fuente:", this.fuente);
        console.log("Alineación:", this.posicionTitulo);
    }
}

// Ejemplo de uso
const cabecera = new CabeceraPagina("Mi Página", "azul", "Arial");
cabecera.posicionT("derecha");
cabecera.mostrarCabecera();
