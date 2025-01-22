// Declaración de una clase
class User {}

// Instancia de una clase
//const jacs = new User();

// Definición de métodos dentro de una clase
class user {
    greeting() {
        return 'Hello';
    }
};

const luffy = new user();
console.log(goku.greeting());

// Manejo de constructor
class user {
    constructor() {
        console.log('Nuevo Usuario');
    }

    greeting() {
        console.log('Hello');
    }
};

const zoro = new user(); 

// Uso de this en una clase
class user {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return 'Hello';
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ussop = new user('Ussop');
console.log(ussop.greeting());

// Uso de get y set para interactuar con los atributos de una clase. 
class user {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    get uAge() {
        return this.age;
    }

    set uAge(n) {
        this.age = n;
    }
}

const nami = new user('Nami', 20);
console.log(nami.uAge);
console.log(nami.uAge = 21);  