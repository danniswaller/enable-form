<template>
    <div class="p">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名：">
                <el-input  v-model="form.name" placeholder="请输入用户名！" @blur="inputContent('name',form.name)"></el-input>
                <p>{{form.nameError}}</p>
            </el-form-item>
            <el-form-item label="密码：">
                <el-input v-model="form.password" type="password" placeholder="请输入密码！" @blur="inputContent('password',form.password)"></el-input>
                <p>{{form.passwordError}}</p>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>

                <el-button>注册</el-button>
                <p>{{form.validatorError}}</p>

            </el-form-item>
        </el-form>
        <!--<inputpro :name="form.name"></inputpro>-->
    </div>
</template>
<script>
   // import { mapMutations } from 'vuex'
    export default {
        // components:{inputpro},
        data() {
            return {
                form: {
                    name: '',
                    password:'',
                    nameError:'',
                    passwordError:'',
                    validatorError:''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log(this.form);
                if(!this.form.name||!this.form.password){
                    this.form.validatorError = "用户名或密码不能为空！";
                }else{
                    //  this.form.validatorError ="";
                    //   debugger
                    var url = `/api/login?name=${this.form.name}&password=${this.form.password}`;
                    console.log(url);
                   var _this = this;
                    _this.$http.get(url).then( function(result){
                        if(result.data.rs){
                               let user ={name:"张聪",password:'321'};

                            _this.$store.commit('increment',user);
                            _this.$router.push({path:'home'});
                        }else {

                        }
                    });

                }
            },
            inputContent:function(errorItem,inputContent){
                //console.log(errorItem);
                if(errorItem==='name'){
                    if(inputContent ===''){

                        this.form.nameError ="用户名不能为空！";
                    }
                }else if(errorItem ==='password'){
                    if(inputContent ===''){

                        this.form.passwordError ="密码不能为空！";
                    }

                }
            },

        }

    }
</script>
<style>

    .p{
        color: red;
        text-align: left;
    }


</style>