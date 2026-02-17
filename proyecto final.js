//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000;

//Valores de los recargos 
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%

//Recargo
var recargo = 0;
var recargo_total = 0;

//Precio final 
var precio_final = 0;

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor");
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números");

//convirtiendo la edad ingresada a número 
var edad_numero = parseInt(edad);

// VALIDACIÓN: El proyecto exige que el asegurado sea mayor de edad
if (edad_numero >= 18) {
    
    var casado = prompt("¿Está casado actualmente? (SI/NO)");
    //Comprobamos la edad del cónyuge, solamente si se está casado/a
    var edad_conyuge;
    var edad_conyuge_numero = 0;
    
    if("SI" == casado.toUpperCase()){
      // Le quité el "si/no" por defecto porque aquí va un número
      edad_conyuge = prompt("¿Que edad tiene su esposo/a? Ingrese solamente números");
      edad_conyuge_numero = parseInt(edad_conyuge);
    }

    var hijos = prompt("¿Tiene hijos o hijas? (SI/NO)");
    var cantidad_hijos = 0;
    
    if("SI" == hijos.toUpperCase()){
        var cantidad_hijos_str = prompt("¿Cuántos hijos tiene? Ingrese solamente números");
        /**
         * 1. convierta la cantidad de hijos a numero
         */
        cantidad_hijos = parseInt(cantidad_hijos_str);
    }

    //Aquí es donde debe de calcular los recargos y el valor final
    
    //Recargo por edad del asegurado 
    if(edad_numero >= 18 && edad_numero <= 24){
      recargo = precio_base * edad_18;
      recargo_total = recargo_total + recargo;
    } else if (edad_numero >= 25 && edad_numero <= 49) {
      recargo = precio_base * edad_25;
      recargo_total = recargo_total + recargo;
    } else if (edad_numero >= 50) {
      recargo = precio_base * edad_50;
      recargo_total = recargo_total + recargo;
    }

    /** * 2. Recargo por la edad del conyuge
     */
    if("SI" == casado.toUpperCase()){
        if(edad_conyuge_numero >= 18 && edad_conyuge_numero <= 24){
            recargo = precio_base * casado_18;
            recargo_total = recargo_total + recargo;
        } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero <= 49) {
            recargo = precio_base * casado_25;
            recargo_total = recargo_total + recargo;
        } else if (edad_conyuge_numero >= 50) {
            recargo = precio_base * casado_50;
            recargo_total = recargo_total + recargo;
        }
    }

    /**
     * 3. Recargo por la cantidad de hijos 
     */ 
    if("SI" == hijos.toUpperCase() && cantidad_hijos > 0){
        // El recargo es por CADA hijo, así que multiplicamos el recargo base por la cantidad
        recargo = (precio_base * hijos_recargo) * cantidad_hijos;
        recargo_total = recargo_total + recargo;
    }

    precio_final = precio_base + recargo_total;
    
    //Resultado
    alert ("Para el asegurado: " + nombre);
    alert ("El recargo total sera de: Q." + recargo_total);
    alert ("El precio sera de: Q." + precio_final);

} else {
    // Si tiene menos de 18, termina el programa y muestra este mensaje
    alert("Cotización cancelada. La persona a asegurar debe ser mayor de edad.");
}