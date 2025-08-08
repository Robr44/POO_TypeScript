class Cancion{
    private titulo: string;
    private genero: string;
    private autor: string;

    // Constructor
    constructor(tituloParam: string, generoParam: string, autorParam: string) {
        this.titulo = tituloParam;
        this.genero = generoParam;
        this.autor = autorParam;
    }

    // Getter y Setter para autor
    getAutor(): string {
        return this.autor;
    }

    setAutor(autorParam: string): void {
        this.autor = autorParam;
    }

    // Metodo para mostrar los datos de la cancion
    mostrarDatosCancion(): void {
        console.log("Título:", this.titulo);
        console.log("Género:", this.genero);
        console.log("Autor:", this.autor);
    }
}

const cancion = new Cancion("Un siglo sin Ti", "Pop", "Chayanne");
cancion.mostrarDatosCancion();
