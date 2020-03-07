<template>
    <div class="login-page">
        <div class="login-container">
            <div class="login-title">
                <span>存迹</span>
            </div>
            <div class="form">
                <div class="input">
                    <input type="text" placeholder="请输入账号" v-model="account">
                </div>
                <div class="input">
                    <input type="password" placeholder="请输入密码" v-model="password">
                </div>
            </div>
            <div class="login-tip">
                <span class="tip-word">忘记密码</span>
                <span class="tip-word" @click="$router.push({path:'/sign'})">注册账号</span>
            </div>
            <Button :loading='loading' text='登陆' width='300' @bClick='submit'/>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Footer from '../../components/footer/footer'
import Button from '../../components/button/button'

import {userLogin} from '../../data/data'
export default {
    name:'login',
    components:{
        Footer,
        Button
    },
    data() {
        return {
            loading:false,
            account:'',
            password:''
        }
    },
    mounted(){
        
    },
    methods: {
        submit:function(){
            // this.loading = true
            userLogin(this.account,this.password).then(r=>{
                if(r.code == 200){
                    window.localStorage['token']= r.data.token
                    this.$store.commit('updateUserInfo',r.data.userinfo)
                    this.loading = false
                    this.$Message({
                        type:'success',
                        text:"登陆成功"
                    })
                    this.$router.push({path:'/opreate'})
                }else{
                    this.$Message({
                        type:'fail',
                        text:"用户名或密码错误"
                    })
                    this.loading = false
                }
            })
        }
    },
}
</script>

<style scoped>
.login-page {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    padding-bottom: 20px;
    box-sizing: border-box;
}
.login-container {
    width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
}
.login-title {
    font-size: 42px;
    text-align: center;
    margin-bottom: 30px;
}
.input {
    margin-bottom: 15px;
}
.input input {
    border:1px solid #dcdfe5;
    height: 35px;
    width: 300px;
    box-sizing: border-box;
    padding-left: 10px;
    border-radius: 5px; 
    transition: all .15s ease-in-out;
}

.input input:focus {
    border-color: #8fb2c9;
}
.login-tip {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    font-size: 13px;
}
.login-button {
    font-size: 18px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: #5698c3;
    width: 300px;
    height: 35px;
    margin-top: 20px;
}
.tip-word:hover{
    color: #8fb2c9;
    cursor: pointer;
}
</style>