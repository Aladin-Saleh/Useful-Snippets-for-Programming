/**
* This function allow you to delete an element from an array at a specified index very easily
* -----------------------------------------
* Example : 
* const myArray = ["bob","toto","titi"]
* console.log(myArray); return (3) ["bob","toto","titi"]
* //If you want to delete "toto" you can get the index of toto by using indexOf function
* removeFromArray(myArray,myArray.indexOf("toto"))
* console.log(myArray); return (3) ["bob","titi"]
* -----------------------------------------
**/

function removeFromArray(array,index) {
  if (index > -1) {
    array.splice(index, 1);
  }

}
