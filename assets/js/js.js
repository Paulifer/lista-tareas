
var text = [
{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
},
{
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
},
{
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
},
{
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
},
{
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
},
{
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
},
{
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
},
{
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
},
{
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
},

];
var listado = document.getElementById('lista');
text.forEach(function(elemento){
  listado.innerHTML += "<li>" + elemento.title + "</li>";
 });

 function Tarea(valorNuevo){
  this.userId = 1;
  this.id = text.length;
  this.title = valorNuevo;
  this.completed = false;
}

  function obtenertarea(){
    var input = document.getElementById("tarea");
    var contlist = document.getElementsByClassName("list-tarea");
    listado.innerHTML += "<li>" + input.value + "</li>";
    input.value = [];
    var newtarea = new Tarea(input.value);
    text.push(newtarea);
  }; 


