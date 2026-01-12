/*Promesa con setTimeout:
Programa una promesa que utilice la función setTimeout() para simular una petición a una base de datos.
El callback resolve deberá entregar un objeto Persona con todos sus datos (ejemplo:
{ nombre: "Mario", apellido: "Ross", edad: 55, lugar: "Mushroom Kingdom" }
).
En consola deberían aparecer mensajes similares a los cuadros de ejemplo:
“Creando promesa”
“Registrando promesa”
“Esperando respuesta”
“Respuesta: { …datos de Persona… }”
*/
const render = document.getElementById("id");

function promesa() {
  return new Promise((resolve) => {
    console.log("Ejericicio 1: Creando Promesa")
    console.log("Ejericicio 1: Registrando promesa")
    console.log("Ejericicio 1: Esperando respuesta")
    setTimeout(() => {
      resolve({
        id: "Ejercicio 1",
        Nombre: "Mario",
        apellido: "Ross",
        edad: 55,
        lugar: "Mushroom Kingdom"
      })
    }, 5000)
  })
}

promesa()
  .then((msg) => {
    console.log(msg)
  })

//Ejercicio 2
const segundos = new Date().getSeconds();
const hora = new Date();
const hFomated = hora.toLocaleTimeString('es-ES', 
  {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false

})

function segundosActuales(segundos){
  return new Promise((resolve, reject)=>{
    if(segundos > 30){
      if(segundos % 2 === 0){
        resolve(`Ejericicio 2: Hora Actual ${hFomated}`)
      }else reject(`Ejericicio 2: Error Impar ${segundos}`)
    }else if(segundos <= 30){
      if(segundos % 2 !== 0){
        resolve(`Ejericicio 2: Hora Actual: ${hFomated}`)
      }else reject(`Ejericicio 2: Error Par ${segundos}`);
    }
  })
}
segundosActuales(segundos)
.then((msg) => {
  return console.log(msg)
})
.catch((err) => console.warn(err));

//Ejercicio 3
/*
creo una funcion con un proceso pesado para que el navegador se trabe, en este caso solo se suman dos números,
pero se va haciendo mas complejo a medida que se aumenta el iterador, esta funcion retorna el resultado
*/
function procesoPesado(){
  let total = 0;
  console.log('Ejercicio 3: Iniciando proceso')
  for(let i = 0; i < 900_0000_000; i++){
    total += i;
  }
  return `Ejercicio 3: Proceso terminado ${total}`;
}

/*
Creo una función que retorna una promesa, dentro de esta capturamos el resultado de procesoPesado y lo resolvemos
*/
function promesaPesada(){
  return new Promise((resolve)=>{
    const resultado = procesoPesado()/*aca se traba el navegador, haciendo todas las demas tareas que tiene que ejecutar se paren hasta que se retorne el resultado de prceso pesado. Ademas afecta a la carga de archivos externos*/
    console.log('Ejercicio 3: Procesando')
    resolve(resultado);//finalmente mostramos el resultado y se lo pasamos al .then()
  })
}
promesaPesada()
.then((msg) => console.log(msg))