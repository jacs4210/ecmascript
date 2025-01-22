const greeting = () => {
    return 'Hello World!';
}

const sayHello = () => {
    console.log(greeting());
}

// Si quiero exportar unicamente la función sayHello
export default sayHello;

// Si quiero exportar ambas funciones
//export { greeting, sayHello };