<template>

        <router-view/>

</template>
<script>
    import login from './views/login/login.vue'
   // import style from './assets/scss/style.css'
    export  default{
          components:{login},
          data(){
              return {};
          }
    }

</script>
<style src="@/assets/scss/style.scss" lang="scss"/>