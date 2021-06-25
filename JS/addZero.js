/**
* This function can be useful if you want to get the right format for a date for example which is requiering to add a 0 before for number between 1-9
* -----------------------------------------
* Example : 
* new Date().getDate() return 4;
* addZero(new Date().getDate()) return 04;
* -----------------------------------------
**/

function addZero(string){
  if (string < 10) {
      return "0"+string;
  }
  return string;
}
