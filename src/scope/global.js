// VARIABLES 

var a; // declarando
var b = "b" // declaramos y asignamos
b = "bb" // reasignando el valor;
var a = "aa"; // redeclaración

//GLOBAL SCOPE
var fruit = "Apples" // global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}
bestFruit();

//GLOBAL SCOPE
function countries() {
  country = "Colombia"; // si se declara una variable dentro de una función sin usar var, let o const esta se convertira en una variable global y por tanto será accesible desde el scope global
  console.log(country);
}

countries();
console.log(country);

//FUNCTION SCOPE 
