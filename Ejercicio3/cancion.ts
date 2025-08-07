class Cancion{
    public titulo: string;
    public genero: string;
    private autor: string;

    constructor(tituloParam: string, generoParam: string, autorParam: string) {
        this.titulo = tituloParam;
        this.genero = generoParam;
        this.autor = autorParam;
    }

    getAutor(): string {
        return this.autor;
    }

    setAutor(autorParam: string): void {
        this.autor = autorParam;
    }

    mostrarDatosCancion(): void {
        console.log("Título:", this.titulo);
        console.log("Género:", this.genero);
        console.log("Autor:", this.autor);
    }
}

// Ejemplo de uso
const cancion = new Cancion("Un siglo sin Ti", "Pop", "Chayanne");
cancion.mostrarDatosCancion();
