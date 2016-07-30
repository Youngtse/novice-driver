<!-- Created by Yang on 16/7/24. -->
<style lang="less" rel="stylesheet/less">
    @import "../../less/main.less";
</style>
<template>
    <nav class="navbar navbar-default my-navbar">
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li><a href="#">试试Markdown</a></li>
                <li><a href="#" @click.prevent="clickNav">别点</a></li>
            </ul>
        </div>
    </nav>
    <router-view></router-view>
</template>
<script>
    export default{
        data(){
            return {}
        },
        methods: {
            clickNav() {
                alert('别乱点啊, 朋友😁');
            }
        },
        components: {}
    }
</script>
