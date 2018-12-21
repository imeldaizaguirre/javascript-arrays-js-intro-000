var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];


function addElementToBeginningOfArray(array,element) {

  let new_array = [element, ...array];
  return new_array

}

function destructivelyAddElementToBeginningOfArray(array,element) {

   let array = array.unshift(element);
   return array
}

function addElementToEndOfArray(array,element) {

  let array = [...array, element];
  return array;
}

function destructivelyAddElementToEndOfArray(array,element) {
  let array = array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  let array = array[index];
  return array;

}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  let array = array.shift();
  return array;

}

function removeElementFromBeginningOfArray(array) {
  let array = array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  let array = array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  let array = array.slice(1, array.length - 1);
  return array;
}
