<template>
    <el-container style="height: 100%">
        <el-header>
            <div><p style="float: left">项目管理首页</p>
                <p style="float: right">欢迎你{{user.name}}！</p></div>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <div style="line-height: 100% ;text-align: left">工作台</div>
                <el-tree
                        :data="treeData"
                        :props="toProps"
                        accordion
                        @node-click="handleNodeClick"
                  style="background: #dae1e7"
                  >
                </el-tree>
            </el-aside>
            <el-container>
                  <router-view/>
            </el-container>
        </el-container>
    </el-container>

</template>

<script>
    export  default{
        data(){
            return {
                treeData:[] ,
                toProps: {}
            };
        },
        methods: {
            handleNodeClick(data) {
                console.log(data);
                 this.$router.push({path:'/home/proInfo'});
            },

        }
        ,
        computed: {
            user()
            {
                return this.$store.state.user
            }
        },
        mounted(){

              console.log("123");
              this.treeData = [{
                  label: '投标管理',
                  leaf:false,
                  children: [{
                      label: '项目信息录入',
                      leaf :true
                  },{
                      label:'投标文件',
                      leaf:true
                  }]
              }, {
                  label: '一级 2',
                  children: [{
                      label: '二级 2-1',
                      children: [{
                          label: '三级 2-1-1'
                      }]
                  }, {
                      label: '二级 2-2',
                      children: [{
                          label: '三级 2-2-1'
                      }]
                  }]
              }, {
                  label: '一级 3',
                  children: [{
                      label: '二级 3-1',
                      children: [{
                          label: '三级 3-1-1'
                      }]
                  }, {
                      label: '二级 3-2',
                      children: [{
                          label: '三级 3-2-1'
                      }]
                  }]
              }];
              this.toProps ={
                  children: 'children',
                  label: 'label'
              }
        }



    }
</script>
<style>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>