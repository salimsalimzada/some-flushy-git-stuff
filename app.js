const sayHi = () => {
    console.log('Hello there!');
}

console.log('hello,world')

//  write fibonacci sequence finder with tail call optimization

const fibonacci = (n, cache = {}) => {
    if (n === 0 || n === 1) {
        return n;
    }

    if (cache[n]) {
        return cache[n];
    }

    const result = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
    cache[n] = result;

    return result;
};
