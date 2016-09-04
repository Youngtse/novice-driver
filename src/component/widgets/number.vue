<!-- Created by Yang on 16/9/4. -->
<style lang="less" rel="stylesheet/less">

</style>
<template>
    <template v-for="n in numbers" track-by="$index">
        <single-number :num="n"></single-number>
        <span v-if="showComma($index)">，</span>
    </template>
</template>
<script>
    import SingleNumber from './single_number.vue'
    export default{
        props: {
            value: {
                required: true
            },
            comma: {    //有无逗号分隔
                default: 1
            }
        },
        computed: {
            numbers(){
                var num = parseInt(this.value);
                var numbers = [];
                while (num > 0) {
                    numbers.push(num % 10);
                    num = _.floor(num / 10);
                }
                return _.reverse(numbers);
            }
        },
        methods: {
            showComma(index){
                return this.comma && index % 3 == (this.numbers.length % 3 + 2) % 3 && index < this.numbers.length - 1;
            }
        },
        components: {
            SingleNumber
        }
    }
</script>
