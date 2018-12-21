var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];


function addElementToBeginningOfArray(array,element) {

  var new_array = [element, ...array];
  return new_array

}

function destructivelyAddElementToBeginningOfArray(array,element) {

   array.unshift(element);
   return array
}

function addElementToEndOfArray(array,element) {

  var array = [...array, element];
  return array;
}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  var array = array[index];
  return array;

}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;

}

function removeElementFromBeginningOfArray(array) {
  var new_array = array.slice(1);
  return new_array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var array = array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  var array = array.slice(1, array.length - 1);
  return array;
}
