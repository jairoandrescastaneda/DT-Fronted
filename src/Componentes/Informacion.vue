<template>
    <div id="informacion">
<div class="container">

<br>
<br>
<br>
    <div class="row" v-for="info in informacion" :key="info.feed">

        
            <div class="col-md-4" v-for="item in info.items" :key="item.title">
        <div class="card">
          <a :href='info.link'>

<img class="card-img-top" :src='item.enclosure.link' alt="Card image cap">
          </a>
     
     <div class="card-body">
      <h5 class="card-title">{{item.title}}</h5>
      <p class="card-text">{{item.description}}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">{{item.pubDate}}</small>
    </div>
  </div>
     <br>
        <br>
           


            </div>
         

        </div>
        
    </div>

       
    </div>


</template>

<script>
import rssApi from '../Servicios/rss/rss.js'
import ceo from '../Servicios/ceo/ceo.js'
export default {

data (){
return {
informacion : [],
mistopicos : []
}

},

methods : {
  cargarInformacion (){
    ceo.read().then(response=>{
      this.informacion = response
    })
    
  }
},
mounted(){
 
  this.cargarInformacion()
}


}
</script>

<style>

</style>
