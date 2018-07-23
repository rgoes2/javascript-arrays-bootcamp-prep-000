var chocolateBars = ["snickers", "hundred grand","kitkat","skittles"];

 function addElementToBeginningOfArray (array,element) {
  return [element,...array]
}
function destructivelyAddElementToBeginningOfArray (array, element){
  return array = [element,...array];
}
function addElementToEndOfArray (array, element){
  return [array,...element];
}
function destructivelyAddElementToEndOfArray (){
  return array = [array,...element];
}
function accessElementInArray (array,index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray (array) {
  return array = array.shift();
}
function removeElementFromBeginningOfArray (array) {
  array.slice(0)
  return array 
}
console.log(chocolateBars.slice(-1))