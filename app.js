import { add, subtract, multiply, dividez, toNumber } from '../calculator.js';

// add elements
// add listener

const add1 = document.getElementById('add1');
const add2 = document.getElementById('add2');
const addBtn = document.getElementById('add-btn');
const addResult = document.getElementById('add-result');
addBtn.addEventListener('click', () => {
    addResult.textContent = add (toNumber(add1), toNumber(add2));
}); 

// subtract elements
// subtract listener
const sbt1 = document.getElementById('sbt1');
const sbt2 = document.getElementById('sbt2');
const sbtBtn = document.getElementById('sbt-btn');
const sbtResult = document.getElementById('sbt-result');
sbtBtn.addEventListener('click', () => {
    sbtResult.textContent = subtract (toNumber(sbt1), toNumber(sbt2));
}); 
// multiply elements
// multiply listener
const mpy1 = document.getElementById('mpy1');
const mpy2 = document.getElementById('mpy2');
const mpyBtn = document.getElementById('mpy-btn');
const mpyResult = document.getElementById('mpy-result');
mpyBtn.addEventListener('click', () => {
    mpyResult.textContent = multiply (toNumber(mpy1), toNumber(mpy2));
}); 
// divide elements
// divide listener
const dvd1 = document.getElementById('dvd1');
const dvd2 = document.getElementById('dvd2');
const dvdBtn = document.getElementById('dvd-btn');
const dvdResult = document.getElementById('dvd-result');
dvdBtn.addEventListener('click', () => {
    dvdResult.textContent = dividez (toNumber(dvd1), toNumber(dvd2));
}); 