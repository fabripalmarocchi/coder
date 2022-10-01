alert("vamos de compras\nque quieres comprar?");

const zapatilla = "Zapatillas"
const campera = "Campera"
const remera = "Remera"
const gorra = "Gorra"

let opcion = parseInt(prompt("Selecciona una opción para agregar al carrito\n1.Zapatilla\n2.campera\n3.remera\n4.gorra\n5.salir"));
let opcion2;
let suma = 0;
carrito(opcion, opcion2, suma);

function carrito(opcion, opcion2, suma) {
    
    do {
        switch (opcion) {
            case 1:
                suma=suma + 15000;
                break;
            case 2:
                suma=suma + 12000;
                break;
            case 3:
                suma=suma + 8000;
                break;
            case 4:
                suma=suma + 4000; 
                break;
            case 5:
                alert("Vuelve pronto");
                break;        
            default:
                alert("Este producto no existe");
                break;
        }
        opcion2 = parseInt(prompt("Quieres otro producto?\n1.Zapatilla\n2.campera\n3.remera\n4.gorra\n5.salir"));
    } while (opcion2 != 5);
    return alert("El precio total es de "+ suma +"\nGracias por tu compra!");

}


