// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
let amigos = '';
let indice = 0;

function condicionesIniciales(){

    if (amigos!=='')
    //alert('perfecto no esta vacio')
     return true;
    else return alert("Por favor, inserte un nombre.");

}

function agregarAmigo(){

    amigos =document.getElementById('amigo').value ; //asigno el valor del imput a la variables amigos

    if (condicionesIniciales()===true){ //valido que no este vacio el input ,cargo el amigo y limpio la caja.
        
        limpiarLista()
        nombres.push(amigos);
        indice = nombres.length;
        nombres.forEach(function (elemento, indice) {
            console.log(elemento, indice);
            asignarTextoElemento('#listaAmigos', elemento);
         });
        limpiarCaja();
       
        return;
}
}

function limpiarCaja() { ///limpio el espacio del imput en cada ingreso de nombre
    document.querySelector('#amigo').value = '';
}

function limpiarLista(){//limpio el listado UL del HTML en cada interaccion para mostrar los elementos de la lista nueva
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
};

function asignarTextoElemento(elemento, texto) { 
    let elementoHTML = document.querySelector(elemento);
    let li = document.createElement('li');  
    li.textContent = texto;  
    elementoHTML.appendChild(li);  
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*indice);
    return numeroGenerado;
}


function sortearAmigo(){
    let sorteo = document.querySelector('#resultado');
    sorteo.innerHTML = 'El amigo secreto sorteado es: '+ nombres[generarNumeroSecreto()];
    

}