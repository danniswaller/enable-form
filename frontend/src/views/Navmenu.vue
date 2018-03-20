<template>
    <el-col :span="12" class="w-full h-full">
        <!--<h5>自定义颜色</h5>-->
        <el-menu
                default-active="3"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                style="height: 100%"

        >
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>工作台</span>
                </template>
                <el-menu-item-group>
                    <!--<template slot="title">管理系统</template>-->
                    <!--<el-menu-item index="1-1">投标管理</el-menu-item>-->
                    <el-submenu index="1-1">
                        <template slot="title">投标管理</template>
                        <el-menu-item index="1-1-1">项目信息录入</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="1-2">合同管理</el-menu-item>
                    <el-submenu index="1-3">
                        <template slot="title">资金管理</template>
                        <el-menu-item index="1-3-1">施工赔付费</el-menu-item>
                    </el-submenu>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </el-col>
    </el-row>
</template>
<script>
    export default {
        name: 'navemenu',
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>