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

**
* This function is my version of the indexOf Javascript function
* It return an array that contain all index of the element asked for
* -----------------------------------------
* Example : 
* const myArray = ["toto","bob","aladin","tata","titi","bob"]
* indexOfWithDuplicate(myArray"bob"); return (2) [1,5];
* -----------------------------------------

*/

function indexOfWithDuplicate(array,indexOf)
{
  const indexContainer = new Array();
  for (let index = 0; index < array.length; index++) {
    if (array[index] == indexOf) {
      indexContainer.push(index);
    }
  }
  return indexContainer;
}
