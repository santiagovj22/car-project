var encendido = 0,
clutch = 0,
frenos = 0,
mano = 1,
acelerador = 0,
cambio = 0,
distancia=0,
numParadas=0,
dirDer=0,
dirIzq=0,
tiempos=[],
tiempoAcc=0,
tiempoTotal=0,
tiempoViaje=0,
velocidadPromedio=70;
kmPorParada=0;
tiempoFrenado=[],
paradas= [],
horas=0,
minutos=0;

function verificarEncendido() {

cambio = 0;
mano = 1;

console.log("El vehiculo se va a encender");
setTimeout("encender()", 1000);
clearTimeout();
}
function encender() {
encendido = 1;
console.log("El vehiculo se encendió");
console.log("Seleccione un destino")
}


function destino() {
    distancia = parseFloat(Math.random() * 10 + 1).toFixed(2)*1;
    console.log("Distancia: " + distancia + " Km");
    numParadas = parseInt(Math.random() * 3 + 1);
    tiempos = [];
    
    console.log("numero de paradas: " + numParadas);
    for (let i = 0; i < numParadas; i++) {
      tiempos.push(parseInt(Math.random() * 5 + 1));
      var kmPorParada = parseFloat((distancia * (i + 1)) / (numParadas + 1)).toFixed(2);
      paradas.push(kmPorParada)*1
      console.log("el tiempo estimado para la parada " +(i + 1) + " en el Km: " 
                  + kmPorParada + " es " +tiempos[i] +" minutos");
    }
  
    arranque();
}

function arranque(){
setTimeout(function(){ console.log("El Auto esta listo para arrancar");},5000)
setTimeout(function(){
if(clutch=1){
document.getElementById("clutch").classList.add("control");
console.log("Se ha activado el clutch");

} 
},6000); 
freno=1;
setTimeout(function(){
if(freno=1){
document.getElementById("freno").classList.add("control");
console.log("Se presionó el freno"); 
} },7000)
mano=0
setTimeout(function(){console.log("Se desactivó el freno de mano"); },8000)
freno=0;
setTimeout(function(){
document.getElementById("freno").classList.remove("control");
console.log("se soltó freno de piso"); },9000)
acelerador=1;
clutch=0;
setTimeout(function(){
    document.getElementById("clutch").classList.remove("control");
    console.log("se suelta el clutch y se empieza a acelerar");
    document.getElementById("acelerador").classList.add("control");
    console.log("El vehículo arrancó");
 },10000)

setTimeout("setInterval('aceleracion()',1000)",10500);
tiempoFrenado[0]=velocidadPromedio/paradas[0]
//setTimeout("setInterval('desaceleracion()',1000)",tiempoFrenado*1000);
setTimeout('velocidad()',20000);

}

function aceleracion(){
clutch=1;
acelerar=0;
if(cambio <6){
cambio++; 
setTimeout(function(){ console.log("El vehiculo esta en " + cambio + " cambio");},1000)
}else{
clearInterval();
}
}

  const activar = (evento) => {

    if (evento.keyCode == 114) {
        document.getElementById("dirDerecha").classList.add("control");   
        console.log("Girando a la derecha"); 
    } 
    if (evento.keyCode == 108) {
        document.getElementById("dirIzquierda").classList.add("control");  
        console.log("Girando a la izquierda");
    }
};
    
    document.onkeypress = function(e) {activar(e)};

const desactivar = (evento) => {
   
    if (evento.keyCode == 82) {
        document.getElementById("dirDerecha").classList.remove("control");    
    }
    if (evento.keyCode == 76) {
        document.getElementById("dirIzquierda").classList.remove("control");  
    }
    
};
  
    document.onkeyup = function(e) {desactivar(e)};     

function llegada(){
console.log("El vehiculo esta frenando")
if(cambio>=0 && cambio<=6){
cambio--;
}
console.log("vamos a parquear")
cambio=0;

mano=1;
console.log("se activo freno de mano");
acelerador=0;
freno=0;
console.log("el carro se apagó");

}

function velocidad(){

for(let i=0; i<tiempos.length; i++){
tiempoAcc+=tiempos[i];
}

tiempoViaje= parseFloat((distancia*1000/velocidadPromedio)-tiempoAcc).toFixed(2)*1
tiempoTotal= parseFloat(tiempoViaje+tiempoAcc).toFixed(2)

viajeHoras=conversor(tiempoViaje)
totalHoras=conversor(tiempoTotal)
console.log("el tiempo total es de "+ viajeHoras[0]+ ":" + viajeHoras[1]);
console.log("el tiempo total es de "+ totalHoras[0]+ ":" + totalHoras[1]);

console.log("la velocidad promedio es de: "+ velocidadPromedio)


tiempoAcc=0;
acelerador=0;
}

function conversor (tiempo){


if(tiempo>60){
horas= Math.floor(tiempo/60);
minutos= parseInt(tiempo%60);
}

var contador=[horas,minutos];
return contador;

}
interruptor.addEventListener("click", function() {
verificarEncendido();
});

casa.addEventListener("click", function() {
destino();
});

trabajo.addEventListener("click", function() {
destino();
});

function desaceleracion(){
clutch=1;
acelerar=0;

//tiempoFrenado[0]=velocidadPromedio/paradas[0]
if(cambio<6 && cambio>1){
cambio--; 
console.log("el cambio es "+cambio)
console.log("está frenando")
}else{
clearInterval();
}
}