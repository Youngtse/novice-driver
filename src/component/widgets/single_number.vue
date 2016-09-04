<!-- Created by Yang on 16/8/23. -->
<style lang="less" rel="stylesheet/less">
    .single-number {
        @bg-color: #000;
        @number-color: #fff;
        @line-height: 4px;
        @line-width: 20px;
        position: relative;
        display: inline-block;
        padding: @line-height*2+@line-width @line-width/2;
        background: @bg-color;
        font-size: 0;
        overflow: hidden;
        &:before {
            content: '';
            display: inline-block;
            height: @line-height;
            width: @line-width;
        }
        > div {
            position: absolute;
            top: @line-width+@line-height*2;
            height: @line-height;
            width: @line-width;
            background: @number-color;
            &:before, &:after {
                content: '';
                position: absolute;
                display: inline-block;
                width: 0;
                height: 0;
                border: @line-height/2 solid @bg-color;
            }
            &:before {
                left: 0;
                border-right-color: @number-color;
                border-left: 0;
            }
            &:after {
                right: 0;
                border-left-color: @number-color;
                border-right: 0;
            }
        }
        @translateDistance: @line-height/2 + @line-width;
        .top {
            transform: translateY(-@translateDistance);
        }
        .bottom {
            transform: translateY(@translateDistance);
        }
        .bottom-left {
            transform: translate(-@translateDistance/2, @translateDistance/2) rotate(90deg);
        }
        .bottom-right {
            transform: translate(@translateDistance/2, @translateDistance/2) rotate(90deg);
        }
        .top-left {
            transform: translate(-@translateDistance/2, -@translateDistance/2) rotate(90deg);
        }
        .top-right {
            transform: translate(@translateDistance/2, -@translateDistance/2) rotate(90deg);
        }
    }
</style>
<template>
    <div class="single-number">
        <div :class="line" v-for="line in showLines"></div>
    </div>
</template>
<script>
    var hiddenOptions = [
        ['middle'],
        ['top', 'middle', 'bottom', 'top-left', 'bottom-left'],
        ['top-left', 'bottom-right'],
        ['top-left', 'bottom-left'],
        ['top', 'bottom', 'bottom-left'],
        ['top-right', 'bottom-left'],
        ['top-right'],
        ['top-left', 'middle', 'bottom-left', 'bottom'],
        [],
        ['bottom-left']
    ];
    export default{
        props: {
            num: {
                required: true
            }
        },
        computed: {
            showLines(){
                var arr = ['top', 'middle', 'bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right'];
                return _.xor(arr, hiddenOptions[parseInt(this.num)]);
            }
        }
    }
</script>
