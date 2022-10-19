//construtora
function Producto(nombre, precio, img, id) {
    this.nombre = nombre;
    this.precio = parseInt(precio);
    this.img = img;
    this.id = id;
}

const zapatilla = new Producto("Zapatilla", 25000, "../img/zapatillas cara.jpg", "zapatilla");
const remera = new Producto("Remera", 12000, "../img/remera-negra.jpg", "remera");
const jeans = new Producto("Jeans", 20000, "../img/jeans.jpg", "jeans");
const top = new Producto("Campera", 16000, "../img/campera de jeans.jpg", "campera");
const blazer = new Producto("Blazer", 25000, "../img/blazer rosa.jpg", "blazer");

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


