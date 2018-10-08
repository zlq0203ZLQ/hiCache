export const cookie = {
    setCookie: (key,value,expires,path,domain,secure)=>{
        let cookieText = "";
        expires = expires * 1000 * 60 * 60 * 24;
        let expires_date = new Date(new Date().getTime() + expires)
        cookieText += encodeURIComponent(key) + "=" + encodeURIComponent(value);
        if(expires) {
            cookieText += "; expries=" + expires_date.toGMTString();
        }
        if(path) {
            cookieText += "; path=" + path;
        }
        if(domain) {
            cookieText += "; domain=" + domain;
        }
        if(secure) {
            cookieText += ";secure=" + secure;
        }
        document.cookie = cookieText;
    },
    getCookie: (key)=>{
        let cookieName = encodeURIComponent(key) + '=';
        let cookieStart = document.cookie.indexOf(cookieName);
        let cookieValue = '';
        if(cookieStart > -1){
            let cookieEnd = document.cookie.indexOf(";",cookieStart);
            if(cookieEnd == -1){
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(
                document.cookie.substring(cookieStart + cookieName.length,cookieEnd)
            )
        }
        return cookierValue;
    },
    clearCookie: (key)=>{
        this.setCookie(key,",-1")
    },
    checkCookie: (key)=>{
        let value = this.getCookie(key);
        if(value == ""|| value == null){
            return false
        }else{
            return true
        }
    }
}