abstract class Persona{
    private nombre: string;
    private apellido: string;
    private direccion: string;
    private telefono: string;
    private edad: number;

    // Constructor
    constructor(nombreParam: string, apellidoparam: string, direccionParam: string, telefonoParam: string, edadParam: number){
        this.nombre = nombreParam;
        this.apellido = apellidoparam;
        this.direccion = direccionParam;
        this.telefono = telefonoParam;
        this.edad = edadParam;
    }

    // Getters y Setters
    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

    public getTelefono(): string {
        return this.telefono;
    }

    public setTelefono(telefono: string): void {
        this.telefono = telefono;
    }

    public getEdad(): number {
        return this.edad;
    }

    public setEdad(edad: number): void {
        this.edad = edad;
    }

    // Método para verificar si es mayor de edad
    mayorEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} ${this.apellido} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} ${this.apellido} es menor de edad.`);
        }
    }

    // Método abstracto para mostrar datos
    abstract mostrarDatos(): void;
}


// Clase empleado que hereda de la clase Perona
class Empleado extends Persona{
     private sueldo: number;

     //Constructor
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    // Método para asignar el sueldo
    sueldoEmpleado(sueldo: number): void {
        this.sueldo = sueldo;
    }

    // Método para mostrar el sueldo
    mostrarSueldo(): void {
        console.log(`Sueldo: $ ${this.sueldo.toFixed(2)}`);
    }

    // Metodo abstracto
    mostrarDatos(): void {
        console.log(" Datos del Empleado ");
        console.log(`Nombre: ${this.getNombre()}`);
        console.log(`Apellido: ${this.getApellido()}`);
        console.log(`Dirección: ${this.getDireccion()}`);
        console.log(`Teléfono: ${this.getTelefono()}`);
        console.log(`Edad: ${this.getEdad()}`);
    }
}

const empleado = new Empleado("Roberto", "Mangandi", "Izalco, Sonsonate", "1234-5678", 20, 1500);
empleado.mostrarDatos();
empleado.mayorEdad();
empleado.mostrarSueldo();