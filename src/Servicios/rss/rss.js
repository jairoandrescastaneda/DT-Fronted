import rss from '../rssconfig.js'
import axios from 'axios'
const rssApi = {}

rssApi.read =function(url){
    
return axios.get('https://api.rss2json.com/v1/api.json?rss_url='+url).then(response=>{
    return response.data
})

}

export default rssApi