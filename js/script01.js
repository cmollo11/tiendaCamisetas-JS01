
let cupón = 1010;

let inputUsser = prompt("ingrese su cupón de descuento");

if(cupón==inputUsser){

   console.log("cupón ingresado correctamente");
   alert("cupón ingresado correctamente")
}

else{

    console.log("su cupón no es válido");
    alert("su cupón no es válido")
}


let opcion = Number(prompt("Elige tu tipo de Camiseta 1-de Selección 2-Nacionales 3-Gloriosas"));

switch(opcion){

    case 1:
        alert("Elegiste camisetas de selección");
        console.log("eligió camisetas de selección");
    break;
    
    case 2:
        alert("Elegiste camisetas nacionales");
        console.log("eligió camisetas de nacionales")
    break;

    case 3:
        alert("Elegiste camisetas gloriosas")
        console.log("eligió camisetas gloriosas")
    break;
    default:
        alert("No has seleccionado nada")
        console.log("opción de camiseta incorrecta")
    break;
}


let stock = 120;

for(let i=0;i<stock;i++){

    console.log("ciclo for: " +i);  
}


