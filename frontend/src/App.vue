<template>
    <div>
  <!--<login></login>-->
        <router-view/>
    </div>
</template>
<script>
    import login from './views/login/login.vue'
    export  default{
          components:{login},
          data(){
              return {};
          }
    }

</script>
