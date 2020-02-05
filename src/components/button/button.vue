<template>
    <div class="common-button" :style="{width:width+'px',height:height+'px'}" @click="c">
        <img v-if='loading' src="../../assets/img/loading.png" alt="">
        <span v-else>{{text}}</span>
    </div>
</template>

<script>
    export default {
        name: 'Button',
        props:{
            width:String,
            text:String,
            height:{
                default:'35',
                type:String
            },
            loading:Boolean
        },
        mounted() {

        },
        methods: {
            c:function(){
                if(!this.loading){
                    this.$emit('bClick')
                }
            }
        }
    }
</script>

<style scoped>
    .common-button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #5698c3;
        font-size: 14px;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
    }
    .common-button img {
        animation: loading 1s infinite linear;
    }
    @keyframes loading {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(360deg)}
    }
</style>