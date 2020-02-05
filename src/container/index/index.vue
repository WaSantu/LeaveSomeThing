<template>
    <div class="container">
        <div class="leftside" ref="typing">
            
        </div>
        <div class="rightside">
            <p v-if="aniamteIndex<2">这是动画1</p>
            <p v-if="aniamteIndex<1">这是动画2</p>
        </div>
        <div class="button" @click="()=>$router.push({path:'/login'})">进入</div>
    </div>
</template>

<script>
const typeword = '我是文字1n我是文字2n'
const wordarr = typeword.split('')
let timer
export default {
    name:'index',
    data() {
        return {
            text:'',
            aniamteIndex:2
        }
    },
    mounted:function(){
        timer = setInterval(this.typing,500,this)
    },
    methods: {
        typing:function(){
            if(wordarr.length == 0){
                clearInterval(timer)
                return
            }
            if(wordarr[0] == 'n'){
                this.$refs.typing.innerHTML += '<br/>'
                wordarr.splice(0,1)
                clearInterval(timer)
                this.animate()
                return
            }
            if(wordarr[0] != 'n'){
                this.$refs.typing.innerHTML += wordarr[0]
                wordarr.splice(0,1)
            }
        },
        animate:function(){
            this.aniamteIndex -= 1
            setTimeout(()=>{
                timer = setInterval(this.typing,500,this)
            },700)
        },
        go:function(){
            this.$router.push({path:'/login'})
        }
    },
}
</script>

<style scoped>
.container {
    display: flex;
}
.leftside {
    padding-top: 150px;
    padding-left: 90px;
    white-space: pre-line;
}
.rightside {
    display: flex;
    align-items: center;
    justify-content: center;
}
.leftside,.rightside {
    width: 50%;
    box-sizing: border-box;
    height: 100vh;
}
.button {
    position: fixed;

}
</style>