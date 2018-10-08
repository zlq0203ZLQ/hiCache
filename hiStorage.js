export const storage = {
    setLocal: (key,value)=>{
        window.localStorage.setItem(key,JSON.stringify(value));
    },
    getLocal: (key)=>{
        let value = window.localStorage.getItem(key);
        return JSON.parse(value);
    },
    clearOneLocal: (key)=>{
        window.localStorage.removeItem(key)
    },
    clearAllLocal: ()=>{
        window.localStorage.clear()
    },
    setSession: (key,value)=>{
        window.sessionStorage.setItem(key,JSON.stringify(value));
    },
    getSession: (key)=>{
        let value = winod.sessionStorage.getItem(key);
        return JSON.parse(value)
    },
    clearOneSession: (key)=>{
        window.sessionStorage.removeItem(key)
    },
    clearAllSession: ()=>{
        window.sessionStorage.clear()
    }

}