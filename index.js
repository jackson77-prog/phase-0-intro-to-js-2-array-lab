// Write your solution here!
// index.js


// Initialize the cats array
let cats = ["Milo", "Otis", "Garfield"];


// Array functions
function destructivelyAppendCat(name) {
  cats.push(name);
}


function destructivelyPrependCat(name) {
  cats.unshift(name);
}


function destructivelyRemoveLastCat() {
  cats.pop();
}


function destructivelyRemoveFirstCat() {
  cats.shift();
}


function appendCat(name) {
  // Create a new array by combining the existing array and the new cat
  return [...cats, name];
}


function prependCat(name) {
  // Create a new array by placing the new cat at the beginning of the existing array
  return [name, ...cats];
}


function removeLastCat() {
  // Create a new array by excluding the last cat from the existing array
  return cats.slice(0, -1);
}


function removeFirstCat() {
  // Create a new array by excluding the first cat from the existing array
  return cats.slice(1);
}





