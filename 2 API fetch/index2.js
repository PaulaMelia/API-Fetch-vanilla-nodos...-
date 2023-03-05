const API_URL="https://jsonplaceholder.typicode.com";

//vamos a sacar la info con API Fetch ,es una interfaz moderna para realizar solicitudes HTTP en JavaScript. 
//Permite realizar solicitudes HTTP utilizando el objeto fetch()

const HTMLResponse = document.querySelector('#APP');


fetch(`${API_URL}/users`).then((response)=>response.json())//esto devuelve una promise    //con el metodo fetch,podemos parsear aqui directamente 
.then((users)=>{
//aqui ya podemos empezar a trabajar con el objeto users,de nuestra API
const template = users.map((user) => `<li>${user.name} @ ${user.email}</li>`)
HTMLResponse.innerHTML = `<ul>${template}</ul>`
});