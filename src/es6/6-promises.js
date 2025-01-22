const anotherFunction = () => {
    return new Promise( (promise, reject) => {
        if (false) {
            promise('Hey!');
        } else {
            reject('Ups!');
        }
    });
}

anotherFunction()
    .then( response => console.log(response))
    .catch( error => console.log(error));