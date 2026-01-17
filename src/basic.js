function welcome() {
    return "Hello World";
}

function evenOrOdd(n) {
    if (n % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

function greeting(name) {
    return "Hola, " + name + "!";
}

export { evenOrOdd, greeting, welcome };