class Calculadora{

    // Metodo suma ente numeros
    sumar(num1: number, num2: number): number {
        return num1 + num2;
    }

    // Metodo restar entre numeros
    restar(num1: number, num2: number): number {
        return num1 - num2;
    }


     // Metodo para multiplicacion entre números.
    multiplicar(num1: number, num2: number): number {
        return num1 * num2;
    }

    // Metodo para division entre numeos
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

const calculadora = new Calculadora();
console.log("Suma:", calculadora.sumar(5, 5));
console.log("Resta:", calculadora.restar(10, 5));
console.log("Multiplicación:", calculadora.multiplicar(7, 7));
console.log("División:", calculadora.dividir(20, 2));
console.log("Potencia:", calculadora.potencia(2, 8));
console.log("Factorial:", calculadora.factorial(2));

