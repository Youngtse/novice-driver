<!-- Created by Yang on 16/7/24. -->
<style lang="less" rel="stylesheet/less" scoped>
    select {
        position: absolute;
        left: 0;
    }

    .mark-input {
        border: none;
        min-height: 100%;
        outline: none;
        resize: none;
        background: #EEE;
    }

    .mark-show {
        min-height: 100%;
        background: #ccc;
        color: #333;
    }
</style>
<template>
    <select v-model="fontSize">
        <option value="14">调整输入字体大小</option>
        <option v-for="size in sizes" :value="size">{{size + 'px'}}</option>
    </select>
    <textarea v-model="input" class="col-sm-6 mark-input" debounce="500"
              :style="{ fontSize: fontSize + 'px' }"></textarea>
    <div class="col-sm-6 mark-show" v-html="input | marked"></div>
</template>
<script>
    export default{
        data(){
            return {
                input: '# Hello world!',
                fontSize: 14,
                sizes: [12, 14, 16, 18, 20]
            }
        },
        components: {}
    }
</script>
