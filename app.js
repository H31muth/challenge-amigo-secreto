// arreglo amigos
let amigos = [];
function agregarAmigo(){   // función para agregar un amigo
   // Ingresa el valor del campo de entrada
   let inputAmigo = document.getElementById('amigo');
   let nombreAmigo = inputAmigo.value.trim();

   console.log(nombreAmigo);
   if (nombreAmigo ===''){         // valida que el campo no esté vacío
    alert('Favor, inserte un nombre válido.');
    return;
   }
   
   amigos.push(nombreAmigo);   //Añade el nombre al arreglo amigos
   
   inputAmigo.value="";   // limpia la caja de entrada

   actualizarListaAmigos():     // se llama a la función para actualizar la lista de amigos
}
function actualizarListaAmigos(){    // función para actualizar lista de amigos

}

