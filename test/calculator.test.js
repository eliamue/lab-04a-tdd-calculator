// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, subtract, multiply, divide, toNumber, dividez } from '../calculator.js';


const test = QUnit.test;


test('test addition', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    // inputs?
    const x = 11;
    const y = 2;
    const expected = 13;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('test subtraction', (expect) => {

    const x = 15;
    const y = 4;
    const expected = 11;
    
    const actual = subtract(x, y);

    expect.equal(actual, expected);
});

test('test multiplication', (expect) => {

    const x = 3;
    const y = 5;
    const expected = 15;
    
    const actual = multiply(x, y);

    expect.equal(actual, expected);
});

test('test division', (expect) => {

    const x = 20;
    const y = 4;
    const expected = 5;
    
    const actual = divide(x, y);

    expect.equal(actual, expected);
});

test('test 0 div 0 is 0', (expect) => {

    const x = 0;
    const y = 0;
    const expected = 0;
    
    const actual = dividez(x, y);

    expect.equal(actual, expected);
});

test('test toNumber', (expect) => {

    const expected = 3;
    const input = document.createElement('input');
    input.value = expected;
    
    const actual = toNumber(input);

    expect.equal(actual, expected);
});