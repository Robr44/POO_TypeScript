class Calculadora{

    // Metodo suma ente numeros
    sumar(num1: number, num2: number): number {
        return num1 + num2;
    }

    // Metodo restar entre numeros
    restar(num1: number, num2: number): number {
        return num1 - num2;
    }


     // Metodo multiplicacion entre números.

    multiplicar(num1: number, num2: number): number {
        return num1 * num2;
    }

    // Metodo division entre numeos
    dividir(num1: number, num2: number): number {
        // Condicional para ver si no se divide entre 0
        if (num2 === 0) {
            throw new Error("No se puede dividir entre cero");
        }
        return num1 / num2;
    }

    // Metodo para calcular potencias
    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    // Metodo paraq calcular factoriales
    factorial(numero: number): number {
        // Condicion para vertificar si el numero no es menor a 0
        if (numero < 0) {
            throw new Error("El factorial no está definido para números negativos");
        }
        let resultado = 1;
        for (let i = 1; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

const calcularNumeros = new Calculadora();
console.log("Suma:", calcularNumeros.sumar(5, 3));
console.log("Resta:", calcularNumeros.restar(10, 4));
console.log("Multiplicación:", calcularNumeros.multiplicar(6, 7));
console.log("División:", calcularNumeros.dividir(20, 5));
console.log("Potencia:", calcularNumeros.potencia(2, 8));
console.log("Factorial:", calcularNumeros.factorial(2));

