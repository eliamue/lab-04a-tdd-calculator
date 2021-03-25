export function add(x, y) {
    return Number(x + y);
}

export function subtract(x, y) {
    return Number(x - y);
}

export function multiply(x, y) {
    return Number(x * y);
}

export function divide(x, y) {
    return Number(x / y);
}

export function dividez(x, y) {
    if (x === 0 && y === 0){
        return 0;
    }
    return Number(x / y);
}

export function toNumber(num) {
    return Number(num.value);
}
