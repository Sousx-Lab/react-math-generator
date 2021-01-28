
export function getStoredValueOrNull(key){
    try {
        return window.localStorage.getItem(key) ? window.localStorage.getItem(key) : "";
    } catch (error) {
        throw new Error(error)
    }
    
}

export function setLocalStorageValue(key , value){
    try {
         window.localStorage.setItem(key, value);
    } catch (error) {
        throw new Error(error)
    }
}
