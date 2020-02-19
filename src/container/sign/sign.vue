<template>
    <div class="sign-page">
        <div class="introduce">
            <div class="info" v-if="step == 1">
                <transition name="title">
                    <h2 v-show="animation1">为什么要做"存迹"？</h2>
                </transition>
                <transition name="title">
                    <div v-show="animation2" class="flexbox">
                        <p>我有时候会怕一觉睡不醒，会怕天降横祸，会担心到最后我爱的人不知道我究竟爱的有多深，爸妈不知道我对他们有多感激，这个世界也不知道我有多留恋。</p>
                        <p>存迹就在脑子里诞生了，就像是自传一样，把自己想说的留下来，存迹帮你给出。</p>
                    </div>
                </transition>
                <transition name="title">
                    <h2 v-show="animation3">什么是"存迹"？</h2>
                </transition>
                <transition name="title">
                    <div v-show="animation4" class="flexbox">
                        <p>存迹能保存您的文字，图片及视频，若保存者出现意外，我会把您的东西转交到指定的地方。</p>
                        <p>以首次保存的时间开始，往后每一年存迹将会回访服务是否继续，当然您也可以随时进入后台关闭服务。</p>
                    </div>
                </transition>
                <transition name="title">
                    <div v-show="animation5" class="flexbox nextbutton" @click="()=>step = 2">
                        <span>继续注册</span>
                    </div>
                </transition>
            </div>
            <transition name="form">
                <div class="form-user-account" v-if="step == 2 ">
                    <div class="inputbox">
                        <div class="input">
                            <input placeholder="请填写账号" v-model="signInfo.account">
                        </div>
                    </div>
                    <div class="inputbox">
                        <div class="input">
                            <input type="password" placeholder="请填写密码" v-model="signInfo.password">
                        </div>
                    </div>
                    <div class="sign-button" @click="()=>step = 3">下一步</div>

                </div>
            </transition>
            <transition name='form'>
                <div class="form-user-info" v-if="step == 3 ">
                    <div class="inputbox">
                        <div class="input">
                            <input placeholder="请填写交付方手机号" v-model="signInfo.to_phone">
                        </div>
                    </div>
                    <div class="inputbox">
                        <div class="input">
                            <input placeholder="请填写交付方备用联系方式" v-model="signInfo.to_backup_contact">
                        </div>
                    </div>
                    <div class="inputbox">
                        <div class="input">
                            <input placeholder="请填写交付方姓名" v-model="signInfo.to_name">
                        </div>
                        <div class="inputinfo">
                            <span>*请务必保证信息真实性</span>
                        </div>
                    </div>
                    <div class="sign-button" @click="()=>step = 4">下一步</div>
                    <div class="back">
                        <img src="../../assets/img/back.png" alt="" @click="step -= 1">
                    </div>
                </div>
            </transition>
            <transition name='form'>
                <div class="form-user-info" v-if="step == 4 ">
                    <div class="inputbox">
                        <div class="input">
                            <input placeholder="请填写手机号" v-model="signInfo.phone">
                        </div>
                    </div>
                    <div class="inputbox">
                        <div class="input">
                            <input  placeholder="请填写验证码" class="code">
                            <span class="codebutton" @click="getCode">{{alreadygetcode?codetime:'获取'}}</span>
                        </div>
                    </div>
                    <div class="inputbox">
                        <div class="input">
                            <input placeholder="请填写备用联系方式，如微信号，QQ号或邮箱" v-model="signInfo.backup_contact">
                        </div>
                    </div>
                    <div class="inputbox">
                        <div class="input">
                            <input  placeholder="请填写姓名" v-model="signInfo.name">
                        </div>
                        <div class="inputinfo">
                            <span>*我们需要您的真实手机号码及姓名以方便回访</span>
                            <span>*请务必保证备用联系方式的可靠性</span>
                        </div>
                    </div>
                    <Button text='注册' width='300' :loading="loading" @bClick='submit' />
                    <div class="back">
                        <img src="../../assets/img/back.png" alt="" @click="step -= 1">
                    </div>
                </div>
            </transition>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Footer from '../../components/footer/footer'
    import Button from '../../components/button/button'

    import {userSign} from '../../data/data'
    var data = {
        SANTA:'DADAD'
    }
    export default {
        name: 'sign',
        components: {
            Footer,
            Button
        },
        data() {
            return {
                animation1: false,
                animation2: false,
                animation3: false,
                animation4: false,
                animation5: false,
                step: 2,
                codetime: 60,
                alreadygetcode: false,
                loading: false,
                signInfo:{
                    accout:'',
                    password:'',
                    name:'',
                    phone:'',
                    backup_contact:'',
                    to_name:'',
                    to_phone:'',
                    to_backup_contact:''
                }
            }
        },
        mounted() {
            setTimeout(() => {
                this.animation1 = true
            }, 1500)
            setTimeout(() => {
                this.animation2 = true
            }, 3500)
            setTimeout(() => {
                this.animation3 = true
            }, 8500)
            setTimeout(() => {
                this.animation4 = true
            }, 12500)
            setTimeout(() => {
                this.animation5 = true
            }, 14500)
        },
        methods: {
            getCode: function () {
                //do get code
                this.alreadygetcode = true
                this.codeTime()
            },
            codeTime: function () {
                let timer = setInterval(() => {
                    this.codetime -= 1
                    if (this.codetime == 0) {
                        clearInterval(timer)
                        this.codetime = 60
                        this.alreadygetcode = false
                    }
                }, 1000)
            },
            submit: function () {
                this.loading = true
                let {account,password,phone,name,backup_contact,to_phone,to_name,to_backup_contact} = this.signInfo
                userSign(account,password,phone,name,backup_contact,to_phone,to_name,to_backup_contact).then(r=>{
                    console.log(r)
                })
            }
        }
    }
</script>

<style scoped>
    .sign-page {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        box-sizing: border-box;
        padding-bottom: 20px;
    }

    .info {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .introduce {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .inputbox {
        margin-bottom: 15px;
    }

    .input {

        display: flex;
    }

    .inputinfo {
        font-size: 12px;
        margin-top: 5px;
        color: #c45a65;
        display: flex;
        flex-direction: column;
    }

    .sign-button {
        font-size: 16px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        background: #5698c3;
        width: 300px;
        height: 35px;
        margin-top: 20px;
        cursor: pointer;
    }

    .input input {
        border: 1px solid #dcdfe5;
        height: 35px;
        width: 300px;
        box-sizing: border-box;
        padding-left: 10px;
        border-radius: 5px;
        transition: all .15s ease-in-out;
    }

    .code {
        width: 200px !important;
    }

    .codebutton {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 35px;
        width: 70px;
        background: #5698c3;
        font-size: 14px;
        color: #fff;
        border-radius: 5px;
        margin-left: 30px;
        cursor: pointer;
    }

    .input input:focus {
        border-color: #8fb2c9;
    }

    .introduce-question {
        cursor: pointer;
        transition: all .15s ease-in-out;
    }

    .introduce-question:hover {
        color: #8fb2c9;
    }

    .flexbox {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .nextbutton {
        background: #5698c3;
        color: #fff;
        font-size: 18px;
        height: 40px;
        width: 200px;
        border-radius: 5px;
        margin-top: 20px;
        cursor: pointer;
    }

    .back {
        margin-top: 5px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }

    .back img {
        cursor: pointer;
    }

    .title-enter-active,
    .title-leave-active {
        transition: all 1s;
        transform: translateX(0)
    }

    .title-enter,
    .title-leave-to

    /* .fade-leave-active below version 2.1.8 */
        {
        opacity: 0;
        transform: translateX(-150px)
    }

    .form-enter-active {
        transition: all 1s;
        transform: translateX(0)
    }

    .form-enter

    /* .fade-leave-active below version 2.1.8 */
        {
        opacity: 0;
        transform: translateX(150px)
    }

    .form-leave-active {
        display: none;
    }

    .form-leave-to {
        display: none;
    }
</style>