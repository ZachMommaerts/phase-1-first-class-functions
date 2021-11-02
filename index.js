function receivesAFunction(cb) {
    return cb();
}

function returnsANamedFunction() {
    function namedFunction() {
        return console.log('hello World');
    };
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return f => console.log('');
}