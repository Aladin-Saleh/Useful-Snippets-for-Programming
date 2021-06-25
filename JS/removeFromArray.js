/**
           _           _ _          _____         _      ______ _    _                                                     
     /\   | |         | (_)        / ____|  /\   | |    |  ____| |  | |                                                    
    /  \  | | __ _  __| |_ _ __   | (___   /  \  | |    | |__  | |__| |                                                    
   / /\ \ | |/ _` |/ _` | | '_ \   \___ \ / /\ \ | |    |  __| |  __  |                                                    
  / ____ \| | (_| | (_| | | | | |  ____) / ____ \| |____| |____| |  | |                                                    
 /_/____\_\_|\__,_|\__,_|_|_| |_| |_____/_/    \_\______|______|_|  |_|    _ _          _____         _      ______ _    _ 
  / ____|              | |         | | | |               /\   | |         | (_)        / ____|  /\   | |    |  ____| |  | |
 | |     _ __ ___  __ _| |_ ___  __| | | |__  _   _     /  \  | | __ _  __| |_ _ __   | (___   /  \  | |    | |__  | |__| |
 | |    | '__/ _ \/ _` | __/ _ \/ _` | | '_ \| | | |   / /\ \ | |/ _` |/ _` | | '_ \   \___ \ / /\ \ | |    |  __| |  __  |
 | |____| | |  __/ (_| | ||  __/ (_| | | |_) | |_| |  / ____ \| | (_| | (_| | | | | |  ____) / ____ \| |____| |____| |  | |
  \_____|_|  \___|\__,_|\__\___|\__,_| |_.__/ \__, | /_/    \_\_|\__,_|\__,_|_|_| |_| |_____/_/    \_\______|______|_|  |_|
                                               __/ |                                                                       
                                              |___/                                                                        
*** GitHub : https://github.com/Aladin-Saleh
*** Date : 25-06-2021


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
