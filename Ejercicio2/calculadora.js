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
    // Metodo para multiplicacion entre números.
    Calculadora.prototype.multiplicar = function (num1, num2) {
        return num1 * num2;
    };
    // Metodo para division entre numeos
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
var calculadora = new Calculadora();
console.log("Suma:", calculadora.sumar(5, 5));
console.log("Resta:", calculadora.restar(10, 5));
console.log("Multiplicación:", calculadora.multiplicar(7, 7));
console.log("División:", calculadora.dividir(20, 2));
console.log("Potencia:", calculadora.potencia(2, 8));
console.log("Factorial:", calculadora.factorial(2));
