class Api {
    post(url, data, header) {
        console.log(header);
        if(header)
            return axios.post(url, data, header);
        return axios.post(url, data);    
    }
    get(url, data) {
        return axios.get(url);
    }
}
let Conversion = "https://api.convertio.co/convert";
let login = "/login";
let register = "/register";