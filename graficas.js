var date = document.getElementById("datos");
var button_date = document.getElementById("btn");

button_date.addEventListener("click", input_datos, true)

let date_vale;
var datos = [4, 5, 8, 6, 2, 4, 5, 3, 7, 8, 12];
function input_datos() {
    date_vale = parseInt(date.value);
    datos.push(date_vale);
}

var button_table = document.getElementById("btn_table");

button_table.addEventListener("click", tabla, true)


var rango, dato_mayor, dato_menor, datos_ordenados, intervalos, ampltud, largo;

function tabla() {
    largo = datos.length - 1;

    datos_ordenados = datos.sort((a, b) => a - b);
    dato_menor = datos_ordenados[0];
    dato_mayor = datos_ordenados[largo];

    rango = dato_mayor - dato_menor;

    operación = Math.log10(datos.length) * 3.322 + 1;
    intervalos = Math.round(operación);
    /* ampltud = rango/intervalos; */
    console.log("datos sin ordenar " + datos + "datos ordenados " + datos_ordenados)
}

/* var numroDeAmpltudes;
var array_ampltud = [];

function ampltudes() {
    IDC1 = dato_menor + ampltud
    array_ampltud.push(IDC1)

    numroDeAmpltudes = (intervalos-1) * 2; 
    i = 0;
    while (i <= numroDeAmpltudes) {
        IDCs = IDC1 + ampltud;
        array_ampltud.push(IDCs);
        i++;
    }
} */


class datoID {
    constructor(I, n) {
        this.nombre = I;
        this.id = n;
        this.repite = 0;
    }
}
var datos_Nr = [];
var i = 0;
var e = 0;
function construir() {
    i = 0;
    while (i <= largo) {
        var dato = new datoID(datos_ordenados[0 + i], i);
        datos_Nr.push(dato);
        i++;
    }
    console.log("datos ID " + datos_IDs)
}
 
var largo_Nr;
function duplicados() {
    i = 0;
    e = 0;
    largo_Nr = largo;
    while (i <= largo_Nr) {
        while (e <= largo_Nr) {
            if (datos_Nr[i].nombre === datos_Nr[e].nombre && datos_Nr[i].id !== datos_Nr[e].id) {
                console.log("nuevo largo_Nr " + largo_Nr + " el dato eliminado es: " + datos_Nr[i].nombre + " " +datos_Nr[e-1].nombre);
                datos_Nr.splice(i, 1);
                largo_Nr = datos_Nr.length-1;
            } else {
            }
            e++;
        }
        e = 0;
        i++;
    }
}

function contar() {
    var i = 0;
    let e = 0;
    while (i <= largo) {
        while (e <= largo) {
            if (datos_ordenados[0 + i] === datos_ordenados[0 + e]) {
                console.log("si" + i + " se repite " + e)
                datos_IDs[0 + i].repite += 1;
            }
            else {
                console.log("no")
            }
            console.log(datos[0 + i] + " " + datos[0 + e])
            e++;
        }
        i++;
        e = 0;
    }
    console.log("datos ordenados " + datos_ordenados + "datos con el valor de repite " + datos_IDs)
}

function imprimir() {
    document.write("<table border>");
    document.write("<thead> <th>" + nombre + "</th> <th>fi</th> <th>Fi</th> <th>fi/n</th> <th>fi%</th> </thead>");

    /* document.write("<tbody>" + "<td>"+ 1 + "</td>" + dato_menor + " - " + IDC1 + "<td>" + "</td>" +  + "<td>" + "</td>" +  + "<td>" + "</td>" +  + "<td>" + "</tbody>" );
     */
    i = 0;
    while (i <= intervalos) {
        document.write("<tbody>" + "<td>" + categoria + "</td>" + "<td>" + + "</td>" + "<td>" + + "</td>" + "<td>" + + "</td>" + "<td>" + + "</td>" + "</tbody>");
        i++
    }

    document.write("<tfoot>" + "<td>" + "total" + "</td>" + "<td>" + + "</td>" + "<td>" + + "</td>" + "<td>" + + "</td>" + "<td>" + + "</td>" + "</tfoot>");
    document.write("</table>");
}

var promedio, suma_datos;
function media() {
    datos.forEach(function (dato) {
        suma_datos = dato + suma_datos;
    });

    promedio = suma_datos / datos.length;
}


/* function orden() {
    i = 0;
    e = 0;
    while (i <= datos_IDs.length - 1) {
        while (e <= datos_IDs.length - 1) {
            if (datos_IDs[i].repite > datos_IDs[e].repite) {
                console.log(datos_IDs[e].nombre + " es elimindo, su valor es: " + datos_IDs[e].repite)
                datos_IDs.splice(e, 1);
            } else {
                console.log(datos_IDs[i].repite + " es menor que " + datos_IDs[e].repite)
            }
            console.log(datos_IDs);
            e++;
        }
        e = 0;
        i++;
    }
} */

/* porque ambos arrays se modifican
class datoID {
    constructor(I, n) {
        this.nombre = I;
        this.id = n;
        this.repite = 0;
    }
}
var datos_IDs = [];
var datos_Nr;
var i = 0;
var e = 0;
function construir() {
    i = 0;
    while (i <= largo) {
        var dato = new datoID(datos_ordenados[0 + i], i);
        datos_IDs.push(dato);
        i++;
    }
    datos_Nr = datos_IDs;
    console.log("datos ID " + datos_IDs)
}

var largo_Nr;
function duplicados() {
    i = 0;
    e = 0;
    largo_Nr = largo;
    while (i <= largo_Nr) {
        while (e <= largo_Nr) {
            if (datos_IDs[i].nombre === datos_IDs[e].nombre && datos_IDs[i].id !== datos_IDs[e].id) {
                datos_Nr.splice(i, 1);
                largo_Nr = datos_Nr.length-1;
            } else {
            }
            e++;
        }
        e = 0;
        i++;
    }
    console.log(" datos Id " + datos_IDs + " datos no repetidos " + datos_Nr);
} */