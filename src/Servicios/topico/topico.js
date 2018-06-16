import Api from '../config.js' 


const topico ={
}

topico.read = function(){
return Api.get('/topico/').then(
    response =>{
        return response.data
    }
)

}


topico.create = function(topico){
    return Api.post('/topico/', topico).then(response=>{
        return response
    })
    
}


export default topico