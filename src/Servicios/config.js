import axios from 'axios'

const Api = axios.create({baseURL:'http://localhost:8080',

headers: {"Content-Type": "application/json"} ,
  
emulateJSON:true,
responseType: 'json'




}


)

export default Api