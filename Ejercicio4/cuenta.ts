class Cuenta{
    private nombre: string;
    private cantidad: number;
    private tipoCuenta: string;
    private numeroCuenta: number

    // Constructor que inicializa los atributos
    constructor(nombreParam: string, cantidadParam: number, tipoCuentaParam: string, numeroCuentaParam: number){
        this.nombre = nombreParam;
        this.cantidad = cantidadParam;
        this.tipoCuenta = tipoCuentaParam;
        this.numeroCuenta = numeroCuentaParam;
    }

    // Metodo para depositar dinero a la cuenta
    depositar(): void {
        //Condicion que determina que el deposito no sea menor a $ 5.00
        if (this.cantidad < 5) {
            console.log("El valor a depositar debe ser mayor a $ 5.00");
        }
        // Si es mayor a $ 5 realiza el deposito 
        else {
            console.log(`Se ha depositado correctamente $ ${this.cantidad.toFixed(2)}`);
        }
    }

    // Metodo para retirar dinero
    retirar(valor: number): void{
        // Condicion para verificar si la cuenta tiene dinero
        if(this.cantidad <= 0){
             console.log("No hay dinero en su cuenta");
        }
        // Condicion para determinar que la cantidad a retirar sea mayor a $5
        else if(valor < 5){
            console.log("El valor a retirar debe de ser mayor a $ 5.00");
        }
        // Condicion para verificar si la cantidad a retirar es mayyor a los fondos disponibles
        else if(valor > this.cantidad){
            console.log("Sus fondos en la cuenta son insificientes")
        }
        // Si no se cumple ninguna de ellas entonces se realiza el retiro
        else {
            this.cantidad -= valor;
            console.log(`Se ha retirado $ ${valor.toFixed(2)}`);
        }
    }

    // Metodo para mostrar los datos de la cuenta
    mostrarDatosCuenta(): void{
        console.log("Nombre: ", this.nombre);
        console.log("Tipo de Cuenta: ", this.tipoCuenta);
        console.log("Número de Cuenta: ", this.numeroCuenta);    
    }

    // Getter para cantidad
    getCantidad(): number {
        return this.cantidad;
    }

    // Setter para cantidad
    setCantidad(cantidadParam: number): void {
        this.cantidad = cantidadParam;
    }    
}

const cuenta = new Cuenta("Roberto Mangandi", 40, "Cuenta de Ahorro", 1234567);
cuenta.depositar();
cuenta.retirar(0);
cuenta.retirar(50);
cuenta.retirar(10);
cuenta.mostrarDatosCuenta();
console.log("Saldo Actual: $ ", cuenta.getCantidad().toFixed(2));