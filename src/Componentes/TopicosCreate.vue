<template>
    
<div>
<div class="container">
    <br>
    <br>
  <div class="col-lg-12">


    <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Nombre</label>
    <input type="text" class="form-control"  placeholder="Nombre topico" v-model="topi.nombre">
  </div>
   <div class="form-group">
    <label for="exampleFormControlInput1">Url</label>
    <input type="text" class="form-control"  placeholder="url informacion" v-model="topi.url">
  </div>
  
  
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Descripcion</label>
    <textarea class="form-control"  rows="3" v-model="topi.descripcion"></textarea>
  </div>
<button type="button" class="btn btn-primary btn-lg" v-on:click="crearTopico()">Crear</button>

</form>

  </div>
</div>
</div>



</template>

<script>
import topico from '../Servicios/topico/topico.js'
export default {

    data (){
        return{
            topi:{}
        }
    },

    methods: {
        crearTopico(){
            topico.create(this.topi).then(response=>{
                 UIkit.notification('Topico '+this.topi.nombre+' creado');
               this.topi = {}

              
            })
        }
    }

}
</script>

<style>

</style>
