<!-- Created by Yang on 16/8/25. -->
<style lang="less" rel="stylesheet/less">

</style>
<template>
    <div>一个显示数字的组件</div>
    <led-number num="2"></led-number>
    <led-number num="3"></led-number>
    <led-number num="3"></led-number>
</template>
<script>
    import ledNumber from "../component/widgets/led_number.vue"
    export default{
        data(){
            return {}
        },
        components: {
            ledNumber
        }
    }
</script>
