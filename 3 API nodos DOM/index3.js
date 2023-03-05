const API_URL="https://jsonplaceholder.typicode.com";

//vamos a sacar la info con API Fetch ,es una interfaz moderna para realizar solicitudes HTTP en JavaScript. 
//Permite realizar solicitudes HTTP utilizando el objeto fetch()
//PERO EN ESTE EJEMPLO USANDO NODOS(etiquetas) DEL DOM

const HTMLResponse = document.querySelector('#APP');
const ul = document.createElement(`ul`);//este metodo nos creara un nodo padre ul  html


fetch(`${API_URL}/users`).then((response)=>response.json())    
.then((users)=>{

//hacemos un bucle for each
users.forEach(user=>{         //por cada usuario quiero que haga lo siguiente
    //nodo padre li
    let element= document.createElement(`li`);
    //nodo hijo
    element.appendChild(document.createTextNode(`${user.name} @ ${user.email}`)); //al elemento le paso un hijo, que sera otro nodo de tipo texto
    //ahora se lo añadimos al nodo padre const ul
    ul.appendChild(element);

})

//pasamos nodo hijo tambien a HTMLResponse , le pasamos hijo ul
HTMLResponse.appendChild(ul);

});
