<template>

    <div>欢迎你{{user.name}}登录</div>
</template>
<script>
    export  default{
        data(){
            return {}
        },
        computed:{
              user(){
                  return this.$store.state.user
              }

        }

    }

</script>