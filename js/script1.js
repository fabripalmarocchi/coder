//construtora
function Producto(nombre, precio, img, id) {
    this.nombre = nombre;
    this.precio = parseInt(precio);
    this.img = img;
    this.id = id;
}
const prendas = [];
prendas.push( zapatilla = new Producto("Zapatilla", 25000, "../img/zapatillas cara.jpg", "1"));
prendas.push (remera = new Producto("Remera", 12000, "../img/remera-negra.jpg", "2"));
prendas.push (jeans = new Producto("Jeans", 20000, "../img/jeans.jpg", "3"));
prendas.push (top = new Producto("Campera", 16000, "../img/campera de jeans.jpg", "4"));
prendas.push (blazer = new Producto("Blazer", 25000, "../img/blazer rosa.jpg", "5"));

console.log(prendas);
let carrito = [];



//Modificar el DOM (mostrar las cards)


function hacerCards(prendas) {
    cards.innerHTML = "";
    prendas.forEach(prenda => {
      let {imagen, nombre, precio,id} = prenda
  
      cards.innerHTML += `<article><div class="card p-3" style="width: 18rem;">
      <img src="img/${prenda.img}" class="card-img-top" alt="imagen">
      <div class="card-body">
        <h5 class="">${prenda.nombre.toUpperCase()}</h5>
        <p class="">$${prenda.precio}</p>
        <button class="carrito btn btn-dark container" id="btn-agregar${prenda.id}">Comprar</button>
  
      </div></article> 
      `;
      
    });
    botonComprar(prendas); 
  }

function escucharInput (){
    input.addEventListener("input",()=>{
      hacerCards(prendas.filter(el=>el.nombre.includes(input.value.toLowerCase()))); 
    })
  }

function botonComprar(prendas) {

    prendas.forEach(prenda => {
       document.querySelector(`#btn-agregar${prenda.id}`).addEventListener("click",()=>{
  
        agregarCarrito(prenda);
      console.log(prenda);
  
       })
    });
    
  }
  function agregarCarrito(prenda){

    let verificacion = carrito.some(prend=>prend.id === prenda.id);
    if(verificacion===false){
        prenda.cantidad = 1;
        carrito.push(prenda);
    }
    else{
        let prendFind = carrito.find(prend=> prend.id===prenda.id);
        prendFind.cantidad++;
    }
    console.log(carrito);
    }