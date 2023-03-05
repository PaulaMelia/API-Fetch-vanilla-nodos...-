const API_URL="https://jsonplaceholder.typicode.com";

//el objeto que se usaba antes de ES6, sacamos la info de la API con vanilla
const xhr = new XMLHttpRequest();

function onRequestHandler(){
if(this.readyState=== 4 && this.status===200){
    //0 =UNSET,no se ha llamado al metodo open
    //1 =OPENED, se ha llamadoo al metodo opened
    //2 =HEADERS_RECEVEID se esta llamando al metodo send()
    //3 =LOADING,esta cargando, esta recibiendo la respuesta
    //4 = DONE, se ha completado la operacion
    const data = JSON.parse(this.response)
    const HTMLresponse = document.querySelector('#APP') //APP es el id del html
    
    const template = data.map((user)=>`<li>${user.name} @ ${user.email}</li>`);
    HTMLresponse.innerHTML = `<ul>${template}</ul>`; //pinto teplate en html desde js
}
};

//llamo funcion para que se ejecute
xhr.addEventListener('load', onRequestHandler); // esto estara ahora en 0,porque no hemos llamado ha OPEN todavia
xhr.open('GET', `${API_URL}/users`)//el primer parametro es la accion a realizar,conseguir.Arriba tambien.Segun dopar.url mas users
xhr.send();//llamar metodo send para que inicie la peticion ,pasara por el 2,3 y 4,despues si el estado es 200 pasara a imprimir el console log response



//esto nos saldra por consola todos los objetos de la API en formato texto=>vamos a parsearlo en un json. con const data
//para ver la API , en html la pinto con HTMLresponse
// con la const template busco con map y muestro nombre + email de la API
