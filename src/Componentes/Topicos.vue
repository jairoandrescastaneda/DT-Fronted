<template>
    
   <div >
       
       <div class="container">
           <br>

  <div class="col-lg-12">
      
    
    <br>

<br>

<br>
<div class="list-group">
    <br>
    <h3 class="text-center">Topicos</h3>
    <br>
  <a href="#" 
  :class="validartopico(t)" v-for="t in topicos"  v-bind:key="t.id" v-on:click="add_topico(t)">
      {{t.nombre}}
  </a>
  
</div>




  </div>
   </div>
       
       
       </div> 
</template>

<script>
import topico from '../Servicios/topico/topico.js'
import ceo from '../Servicios/ceo/ceo.js'
export default {

data (){

    return {
        topicos : [],
        mistopicos:[],
        active :''
        


    }
},

methods : {
cargarTopicos(){
    topico.read().then(response=>{
        
this.topicos = response
    })
},

add_topico(topico){
    ceo.add_topico(topico).then(resposne=>{
        UIkit.notification('Topico añadido');
    })

},

cargarmistopicos(){
    ceo.topicos().then(response=>{
        this.mistopicos = response
    })

},

validartopico(topico){
    let clase = ''
    this.mistopicos.forEach((topi,index)=>{
        if(topi.id==topico.id){
           
           clase ='list-group-item list-group-item-action active'
        }

    })

    if (clase ==''){
        return 'list-group-item list-group-item-action'
    }
    return clase


    

    
}



},

mounted (){
    this.cargarTopicos()
    this.cargarmistopicos()
    
},

computed :{


    
}


}
</script>

<style>

</style>
