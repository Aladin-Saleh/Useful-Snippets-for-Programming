
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


* This allow you to make http request to an API or whatever you want
* Can be used on a proxy server
* Be sure to set a valid BASE_URL and a valid method (GET,POST,PUT,DELETE...)
**/

const BASE_URL = "your url";

let p = new Promise((res,rej) =>{
    let xhr = new XMLHttpRequest();
    xhr.onerror = (() => {
        rej("Errorr !")
    })
    xhr.ontimeout = (() => {
        rej("Timeout !")
    })
    xhr.timeout = 2500;

    xhr.onload = function() {
        res(this.response);
    }

    xhr.open("GET",BASE_URL,true);
    xhr.send();
})
.then(response => console.log(response))
.catch(error => console.log(error))

