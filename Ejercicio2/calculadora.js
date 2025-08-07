var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    // Metodo suma ente numeros
    Calculadora.prototype.sumar = function (num1, num2) {
        return num1 + num2;
    };
    // Metodo restar entre numeros
    Calculadora.prototype.restar = function (num1, num2) {
        return num1 - num2;
    };
    // Metodo multiplicacion entre números.
    Calculadora.prototype.multiplicar = function (num1, num2) {
        return num1 * num2;
    };
    // Metodo division entre numeos
    Calculadora.prototype.dividir = function (num1, num2) {
        // Condicional para ver si no se divide entre 0
        if (num2 === 0) {
            throw new Error("No se puede dividir entre cero");
        }
        return num1 / num2;
    };
    // Metodo para calcular potencias
    Calculadora.prototype.potencia = function (base, exponente) {
        return Math.pow(base, exponente);
    };
    // Metodo paraq calcular factoriales
    Calculadora.prototype.factorial = function (numero) {
        // Condicion para vertificar si el numero no es menor a 0
        if (numero < 0) {
            throw new Error("El factorial no está definido para números negativos");
        }
        var resultado = 1;
        for (var i = 1; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    };
    return Calculadora;
}());
var calcularNumeros = new Calculadora();
console.log("Suma:", calcularNumeros.sumar(5, 3));
console.log("Resta:", calcularNumeros.restar(10, 4));
console.log("Multiplicación:", calcularNumeros.multiplicar(6, 7));
console.log("División:", calcularNumeros.dividir(20, 5));
console.log("Potencia:", calcularNumeros.potencia(2, 8));
console.log("Factorial:", calcularNumeros.factorial(2));
