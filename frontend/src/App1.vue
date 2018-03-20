<template>

    <el-container class="w-full h-full">
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <navmenu/>
            </el-aside>
            <el-main>
                <h1>router</h1>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>

</template>
<script>
    import  navmenu from './views/Navmenu.vue';
    export  default{
        data(){
            return {};
        },
        components: {navmenu}

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
<style src="@/assets/scss/style.scss" lang="scss"/>