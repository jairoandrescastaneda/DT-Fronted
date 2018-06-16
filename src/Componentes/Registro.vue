<template>
    


<div class="container">

<div class="row">

<div class="col-lg-12">
    <br>
    <br>




<form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Nombre</label>
    <div class="col-sm-10">
<input type="text" class="form-control" id="inputPassword" placeholder="Nombre" v-model="ceo.nombre">
    </div>
  </div>

  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Empresa</label>
    <div class="col-sm-10">
<input type="text" class="form-control" id="inputPassword" placeholder="Empresa" v-model="ceo.empresa">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Correo</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputPassword" placeholder="Correo" v-model="ceo.correo">
    </div>
  </div>
  <button type="button" class="btn btn-primary" v-on:click="crear()">Unirme</button>
</form>
</div>

</div>

</div>


</template>

<script>
import ceo from '../Servicios/ceo/ceo.js'
export default {

    data (){
        return {
            ceo :{}
        }
    },

    methods :{

crear(){
    ceo.create(this.ceo).then(resposne=>{
           UIkit.notification('Ceo Registrado');
           this.ceo = {}
    })

}

    }


}
</script>

<style>

</style>
