<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>NOMBRE</th>
              <th>DESCRIPCION</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">

          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        escuela: null
      }
    },
    mounted(){
      this.getEscuela()
    },
    methods:{
      getEscuela(){
        axios.get('http:url')
        .then(res => {
          this.escuela = res.data
        })
        .catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>
