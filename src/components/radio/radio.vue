<template>
    <div class="radio-wrap" @click="checkclcik">
        <input type="checkbox" :class="[value?'select':'']">
        <span :class="['checkoux-circle',value?'l':'']" ></span>
    </div>
</template>

<script>
    export default {
        name: 'Radio',
        props: {
           value:Boolean
        },
        mounted() {

        },
        methods: {
            checkclcik:function(){
                this.$emit('update:value',!this.value)
            }
        }
    }
</script>

<style scoped>
.radio-wrap {
    position: relative;
    width: 35px;
   
}
    input {
        height: 17px;
        width: 35px;
        border-radius: 20px;
        border: 1px solid #d5d5d5;
        margin: 0;
        position: absolute;
        background: #d5d5d5;
         cursor: pointer;
        
    }
    .select {
        background: #5698c3;
    }
    .checkoux-circle {
        display: inline-block;
        height: 17px;
        width: 17px;
        border-radius: 50%;
        background: #fff;
        position: absolute;
        transition: all .3s ease;
         cursor: pointer;
    }
    .l {
        transform: translateX(16px)
    }
</style>