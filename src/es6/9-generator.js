// Generator
function* iterator(array){
  for(let value of array){
    yield value
  }
}

// Se crea una instancia del generator
const it = iterator(['Jairo', 'Angie', 'Martin', 'Eli']);

// Se invoca y obtiene un valor usando el método next, dado en un generator cuando se declara.
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

// Generator de identificadores unicos de Michis.
export function* getId() {
  while (true) {
    yield Math.random().toString(36).substring(5).toUpperCase();
  }
}

// Se obtienen 10 identificaciones
for (let i = 1; i <= 10; i++) {
  console.log(getId().next().value);
}