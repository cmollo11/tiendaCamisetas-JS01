
/* let cupón = 1010;

let inputUsser = prompt("ingrese su cupón de descuento");

if(cupón===inputUsser){

   console.log("cupón ingresado correctamente");
   alert("cupón ingresado correctamente")
}

else{

    console.log("su cupón no es válido");
    alert("su cupón no es válido")
}


let opcion = Number(prompt("Elige tu tipo de Camiseta 1- Nacionales 2- Selección 3- Gloriosas"));

switch(opcion){

    case 1:
        alert("Elegiste camisetas nacionales");
        console.log("eligió camisetas de nacionales");
    break;
    
    case 2:
        alert("Elegiste camisetas de Selección");
        console.log("eligió camisetas de de Selección")
    break;

    case 3:
        alert("Elegiste camisetas Gloriosas")
        console.log("eligió camisetas Gloriosas")
    break;
    default:
        alert("No has seleccionado nada")
        console.log("opción de camiseta incorrecta")
    break;
}


let stock = 120;

for(let i=0;i<stock;i++){

    console.log("ciclo for: " +i);  
} */


/*********************** Hasta acá 1ra Entrega//***********************/




// Matriz de productos

/* class Camiseta {

    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}


const camisetaNacional1 = [new Camiseta(001, "Independiente", 5000)];
const camisetaNacional2 = [new Camiseta(002, "Boca", 5000)];
const camisetaNacional3 = [new Camiseta(003, "River", 5000)];


const camisetaSeleccion1 = [new Camiseta(010, "Argentina", 7500)];
const camisetaSeleccion2 = [new Camiseta(020, "Holanda", 7500)];
const camisetaSeleccion3 = [new Camiseta(030, "Brasil", 7500)];

const camisetaGloriosa1 = [new Camiseta(100, "Maradona", 10000)];
const camisetaGloriosa2 = [new Camiseta(200, "Cruyff", 10000)];
const camisetaGloriosa3 = [new Camiseta(300, "Ronaldo", 10000)];


// concat 

const camisetaNacional = camisetaNacional1.concat(camisetaNacional2,camisetaNacional3);

const camisetaSeleccion = camisetaSeleccion1.concat(camisetaSeleccion2,camisetaSeleccion3);

const camisetaGloriosa = camisetaGloriosa1.concat(camisetaGloriosa2,camisetaGloriosa3);

// Array Base de datos

const BBDD = [camisetaNacional,camisetaSeleccion,camisetaGloriosa];


// push

camisetaGloriosa.push( new Camiseta (400, "Zidane", 10000));
console.log(BBDD);
console.log(BBDD.length);


// carrito

let carrito = [];

carrito.push(camisetaNacional[0]);
carrito.push(camisetaGloriosa[2]);
console.log(carrito);


// forEach

BBDD.forEach((BBDD)=>{
    console.log(BBDD)
})

// carrito interactivo
 
 
const elegirProducto =  Number(prompt("Elegí tu camiseta Gloriosa 1-Maradona 2-Cruyff 3-Ronaldo 4-Zidane"));
 
switch(elegirProducto){
 
    case 1 :
        alert("Elegiste la camiseta del Diego");
        console.log("eligió la camiseta de Maradona");
    break;
   
    case 2:
        alert("Elegiste la camiseta de Cruyff");
        console.log("eligió la camiseta de Cruyff")
    break;
 
    case 3:
        alert("Elegiste la camiseta de Ronaldo")
        console.log("eligió la camiseta de Ronaldo")
    break;
 
    case 4:
        alert("Elegiste la camiseta de Zidane")
        console.log("eligió la camiseta de Zidane")
    break;
 
   
    default:
        alert("No elegiste nada")
        console.log("no eligió nada")
    break;
}
 
 
 
function compraCliente(camisetaElegida){
    carrito.push(camisetaGloriosa[camisetaElegida]);
}
 
compraCliente(elegirProducto);
console.log(elegirProducto);
 */


/*********************** Hasta acá 2da Entrega//***********************/

// Array de objetos

const productos = [{
    id: 1,
    nombre: "camiseta de Argentina",
    precio: 18000,
    imagen: "img/Argentina.png"
  },  
  
  {
    id: 2,
    nombre: "camiseta de Brasil",
    precio: 18000,
    imagen: "img/Brasil.png"
  },
  
  {
    id: 3,
    nombre: "camiseta de Francia",
    precio: 18000,
    imagen: "img/Francia.jpg"
  },
  
  {
    id:4,
    nombre: "camiseta de  Holanda",
    precio: 18000,
    imagen: "img/Holanda.png"
  },

]


/// for each para crear elemento


let camisetasTodas = document.getElementById("camisetasTodas")


productos.forEach((product)=>{
    let content = document.createElement("div")
    content.innerHTML = `
            <img src="${product.imagen}">
            <h3>${product.nombre}</h3>
            <p>${product.precio}</p>
            
            `;
  
    camisetasTodas.append(content)
  
    let comprar = document.createElement("button")
    comprar.innerText = "comprar"
    
    content.append(comprar)

    comprar.addEventListener("click",()=>{

        console.log("probando click")

        

    })

  
  })


