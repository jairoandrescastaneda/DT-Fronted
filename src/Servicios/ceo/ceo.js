import Api from '../config.js' 


const ceo ={
}

ceo.read = function(){
return Api.get('/informacion/').then(
    response =>{
        return response.data
    }
)

}


ceo.add_topico = function(topico){
    return Api.post('/ceo/topico/', topico).then(response=>{
        return response
    })
    
}

ceo.topicos = function(){
    return Api.get('/ceo/topico/').then(response=>{
        return response.data
    })
    
}

ceo.create = function(ceo){
    return Api.post('/ceo/',ceo).then(response=>{
        return response
    })
}


export default ceo