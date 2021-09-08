/**
 * 
      _               _           _ _          _____         _      ______ _    _                                                     
   /\| |/\      /\   | |         | (_)        / ____|  /\   | |    |  ____| |  | |                                                    
   \ ` ' /     /  \  | | __ _  __| |_ _ __   | (___   /  \  | |    | |__  | |__| |                                                    
  |_     _|   / /\ \ | |/ _` |/ _` | | '_ \   \___ \ / /\ \ | |    |  __| |  __  |                                                    
   / , . \   / ____ \| | (_| | (_| | | | | |  ____) / ____ \| |____| |____| |  | |                                                    
   \/|_|\/  /_/____\_\_|\__,_|\__,_|_|_| |_| |_____/_/    \_\______|______|_|  |_|    _ _          _____         _      ______ _    _ 
   /\| |/\   / ____|              | |         | | | |               /\   | |         | (_)        / ____|  /\   | |    |  ____| |  | |
   \ ` ' /  | |     _ __ ___  __ _| |_ ___  __| | | |__  _   _     /  \  | | __ _  __| |_ _ __   | (___   /  \  | |    | |__  | |__| |
  |_     _| | |    | '__/ _ \/ _` | __/ _ \/ _` | | '_ \| | | |   / /\ \ | |/ _` |/ _` | | '_ \   \___ \ / /\ \ | |    |  __| |  __  |
   / , . \  | |____| | |  __/ (_| | ||  __/ (_| | | |_) | |_| |  / ____ \| | (_| | (_| | | | | |  ____) / ____ \| |____| |____| |  | |
   \/|_|\/   \_____|_|  \___|\__,_|\__\___|\__,_| |_.__/ \__, | /_/    \_\_|\__,_|\__,_|_|_| |_| |_____/_/    \_\______|______|_|  |_|
                                                          __/ |                                                                       
                                                         |___/                                                                        
 * 
 * MyMap class is an equivalent of Java Map wich is very easy to use (a key for an object);
 * I create my own version of Map function in javascript (consider the Map of Java);
 * This is my own vision of how should be a Map, I only implement function I requiered for my own utilisation.
 * Feel free to hack/change the code as your desire :)
 * 
 * Create by Aladin SALEH
 * GitHub : https://github.com/Aladin-Saleh
 * Date : 25-06-2021 21:56
 */


class MyMap{
    
    constructor(){
        this.key = new Array();
        this.object = new Array();

    }

    getKey() {
        return this.key;
    }

    getObject()
    {
        return this.object;
    }

    getObjectWithKey(key){
        const index = this.key.indexOf(key);
        return this.object[index];
    }
    
    pushToCurrentKey(key,object)
    {
        const index = this.key.indexOf(key);
        this.object[index].push(object);
    }

    addNewKey(key,object){
        if (this.key.indexOf(key)) {
            this.key.push(key);
            this.object.push(object);   
            return 1;   
        }
        return -1        
        
    }

    isKeyExist(key){
        if (this.key.indexOf(key) >= 0) {
            return true;
        }
        return false;
    }

    removeObject(key,object){
        const index = this.key.indexOf(key);
        this.removeFromArray(this.object[index],this.object[index].indexOf(object))
    }
    
    removeFromArray(array,index) {
        if (index > -1) {
          array.splice(index, 1);
        }
      
    }

}

