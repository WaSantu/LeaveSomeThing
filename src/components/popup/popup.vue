<template>
    <div class="popup" v-show="show" @click.self="maskclick">
        <transition name='pop'>
            <div class="pop-container" v-show='show'>
                <span @click="close">关闭</span>
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'Popup',
        props: {
            show: Boolean
        },
        mounted() {

        },
        methods: {
            maskclick:function(){
                this.$emit('maskclick')
            },
            close:function(){
                this.$emit('update:show',false)
            }
        }
    }
</script>

<style scoped>
    .popup {
        height: 100vh;
        width: 100%;
        position: fixed;
        background: rgba(0, 0, 0, .3);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pop-container {
        width: 400px;
        padding: 30px 50px;
        background: #fff;
        border-radius: 5px;
    }

    .pop-enter-active,
    .pop-leave-active {
        transition: all .7s;
        transform: translateY(0)
    }

    .pop-enter,
    .pop-leave-to

    /* .fade-leave-active below version 2.1.8 */
        {
        opacity: 0;
        transform: translateY(700px)
    }
</style>