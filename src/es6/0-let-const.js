var lastName = "Jairo";
lastName = "Cuartas";
console.log(lastName);

let fruit = "Orange";
fruit = "Pineapple";
console.log(fruit);

// La definición de constantes no permite reasignar valores.
const animal = "Dog";
animal = "Cat";
console.log(animal);

// La accesibilidad de las variables como se definan dependerá del scope de la misma.
const fruits = () => {
    if (true) {
        var fruit1 = "Apple"; // function scope
        let fruit2 = "Mango"; // block scope
        const fruit3 = "Banana"; // block scope
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();