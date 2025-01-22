import getData from './api.js';

export function solution() {
    return getData();
}

solution()
    .then(data => console.log(data));