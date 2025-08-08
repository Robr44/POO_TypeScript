var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombreParam, apellidoparam, direccionParam, telefonoParam, edadParam) {
        this.nombre = nombreParam;
        this.apellido = apellidoparam;
        this.direccion = direccionParam;
        this.telefono = telefonoParam;
        this.edad = edadParam;
    }
    // Getters y Setters
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Persona.prototype.getDireccion = function () {
        return this.direccion;
    };
    Persona.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    Persona.prototype.getTelefono = function () {
        return this.telefono;
    };
    Persona.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    // Método para verificar si es mayor de edad
    Persona.prototype.mayorEdad = function () {
        if (this.edad >= 18) {
            console.log("".concat(this.nombre, " ").concat(this.apellido, " es mayor de edad."));
        }
        else {
            console.log("".concat(this.nombre, " ").concat(this.apellido, " es menor de edad."));
        }
    };
    return Persona;
}());
// Clase empleado que hereda de la clase Perona
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    //Constructor que inicializa atributos de clase Persona y Empleado
    function Empleado(nombre, apellido, direccion, telefono, edad, sueldo) {
        var _this = _super.call(this, nombre, apellido, direccion, telefono, edad) || this;
        _this.sueldo = sueldo;
        return _this;
    }
    // Método para asignar el sueldo
    Empleado.prototype.sueldoEmpleado = function (sueldo) {
        this.sueldo = sueldo;
    };
    // Método para mostrar el sueldo
    Empleado.prototype.mostrarSueldo = function () {
        console.log("Sueldo: $ ".concat(this.sueldo.toFixed(2)));
    };
    // Implementación del método abstracto
    Empleado.prototype.mostrarDatos = function () {
        console.log(" Datos del Empleado ");
        console.log("Nombre: ".concat(this.getNombre()));
        console.log("Apellido: ".concat(this.getApellido()));
        console.log("Direcci\u00F3n: ".concat(this.getDireccion()));
        console.log("Tel\u00E9fono: ".concat(this.getTelefono()));
        console.log("Edad: ".concat(this.getEdad()));
    };
    return Empleado;
}(Persona));
var empleado = new Empleado("Roberto", "Mangandi", "Izalco, Sonsonate", "1234-5678", 20, 1500);
empleado.mostrarDatos();
empleado.mayorEdad();
empleado.mostrarSueldo();
