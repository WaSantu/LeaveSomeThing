<template>
    <div class="opreate-page">
        <div class="opreate">
            <div class="opreate-cell" @click="openNote">
                <img src="../../assets/img/note.png" alt="">
            </div>
            <div class="opreate-cell" @click='showPicBox'>
                <img src="../../assets/img/pic.png" alt="">
            </div>
            <div class="opreate-cell">
                <img src="../../assets/img/video.png" alt="">
            </div>
            <div class="opreate-cell" @click="()=>popshow_my=true">
                <img src="../../assets/img/my.png" alt="">
            </div>
            <div class="opreate-cell" @click="()=>popshow_setting=true">
                <img src="../../assets/img/setting.png" alt="">
            </div>
        </div>
        <Footer />
        <Popup :show.sync='popshow_my' @maskclick='closedetail'>
            <div class="">
                <div class="pop-my-co">
                    <span>账号名:</span>
                    <span class="cooo">{{$store.state.userinfo.account}}</span>
                </div>
                <div class="pop-my-co">
                    <span>空间使用:</span>
                    <span class="cooo">{{$store.state.userinfo.ram}}/100mb</span>
                </div>
                <div class="pop-my-co">
                    <span>手机号码:</span>
                    <span class="cooo">{{$store.state.userinfo.phone}}</span>
                </div>
                <div class="pop-my-co">
                    <span>备用联系方式:</span>
                    <span class="cooo">{{$store.state.userinfo.backup_contact}}</span>
                </div>
                <div class="pop-my-co">
                    <span>本人姓名:</span>
                    <span class="cooo">{{$store.state.userinfo.name}}</span>
                </div>
                <div class="pop-my-co">
                    <span>交付人姓名:</span>
                    <span class="cooo">{{$store.state.userinfo.to_name}}</span>
                </div>
                <div class="pop-my-co">
                    <span>交付人联系电话:</span>
                    <span class="cooo">{{$store.state.userinfo.to_phone}}</span>
                </div>
            </div>
        </Popup>
        <Popup :show.sync='popshow_setting' @maskclick='closeset'>
            <div class="">
                <div class="setting-cp">
                    <span>文字内容自动保持</span>
                    <Radio :value.sync='c' />
                </div>
                <div class="setting-cp">
                    <span>开起服务</span>
                    <Radio :value.sync='c' />
                </div>
            </div>
        </Popup>
        <!-- <Popup :show.sync='popshow_writing' @maskclick='closeset'>

        </Popup> -->
        <div class="pic-opreate" v-if='picshow'>
            <input type="file" multiple style="display:none;" id='pic' @change='uploadPicFile'>
            <div class="pic-func">
                <div class="pic-upload">
                    <div class="pic-choose" @drop="test" @dragover="test2">
                        <span>拖拽文件至此 或 <label class="lab" for='pic'>点击上传</label></span>
                    </div>
                    <div class="pic-des">
                        <div class="pic-name ppp">
                            <span>图片/图片组名称</span>
                            <input type="text">
                        </div>
                        <div class="pic-info ppp">
                            <span>图片/图片组描述</span>
                            <textarea></textarea>
                        </div>
                        <div class="pic-submit">
                            <Button text='上传' width='100' height='30' />
                            <span class="cancel" @click="()=>picshow=false">取消</span>
                        </div>
                    </div>
                </div>
                <div class="pic-display">
                    <div class="cell-wrap">
                        <div class="pic-cell">
                            <div class="img"></div>
                        </div>
                        <div class="pic-cell">
                            <div class="img"></div>
                        </div>
                        <div class="pic-cell">
                            <div class="img"></div>
                        </div>
                        <div class="pic-cell">
                            <div class="img"></div>
                        </div>
                        <div class="pic-cell">
                            <div class="img"></div>
                        </div>
                        <div class="pic-cell">
                            <div class="img"></div>
                        </div>
                        <div class="pic-cell">
                            <div class="img"></div>
                        </div>
                        <div class="pic-cell">
                            <div class="img"></div>
                        </div>
                        <div class="pic-cell">
                            <div class="img"></div>
                        </div>
                        <div class="pic-cell">
                            <div class="img"></div>
                        </div>
                        <div class="pic-cell">
                            <div class="img"></div>
                        </div>
                        <div class="pic-cell">
                            <div class="img"></div>
                        </div>
                        <div class="pic-cell">
                            <div class="img"></div>
                        </div>
                        <div class="pic-cell">
                            <div class="img"></div>
                        </div>
                        <div class="pic-cell">
                            <div class="img"></div>
                        </div>
                        <div class="pic-cell">
                            <div class="img"></div>
                        </div>
                        <div class="pic-cell">
                            <div class="img"></div>
                        </div>
                        <div class="pic-cell">
                            <div class="img"></div>
                        </div>
                        <div class="pic-cell">
                            <div class="img"></div>
                        </div>
                        <div class="pic-cell">
                            <div class="img"></div>
                        </div>
                        <div class="pic-cell">
                            <div class="img"></div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="pic-layout">
                <div class="forpic">
                    <div class="imgbox">
                        <img class="img-button" src="../../assets/img/prev.png" alt="">
                        <img class="img-pic"
                            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1581006252582&di=0064d39b1897e5d98590b9fd2ff4c836&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg"
                            alt="">
                        <img class='img-button' src="../../assets/img/next.png" alt="">
                    </div>
                    <div class="img-length">
                        <span>1/9</span>
                    </div>
                </div>
                <div class="pic-detail">
                    <div class="pic-co">
                        <span>上传时间:</span>
                        <span class="q">2020年2月6日</span>
                    </div>
                    <div class="pic-co">
                        <span>照片名称:</span>
                        <span class="q">哈哈哈哈</span>
                    </div>
                    <div class="pic-co">
                        <span>照片描述:</span>
                        <span
                            class="q">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="writing-mask" v-if='popshow_writing'>
            <div class="writing-pop">
                <textarea class="writing-area" @keydown="textareaTab" v-model="write_value">

                </textarea>
                <span class="writing-tip" v-if='last_save'>上次保存时间：{{last_save}}</span>
                <span class="writing-tip" v-show='autosaveTime'>自动保存: {{autosaveTime}}</span>
                <span class="writing-tip">*请勿保存任何有关</span>
                <div class="writing-opreate">
                    <Button text='保存' width='70' @bClick="updateText" :loading='loading.text_loading'/>
                    <span class="cancel w" @click="closeNote">关闭</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Footer from '../../components/footer/footer'
    import Popup from '../../components/popup/popup'
    import Radio from '../../components/radio/radio'
    import Button from '../../components/button/button'

    import format from '../../js/formate'
    import {getUserInfo,textUpdate,picUpload} from '../../data/data'
    let timer

    export default {
        name: 'Opreate',
        components: {
            Footer,
            Popup,
            Radio,
            Button
        },
        data() {
            return {
                popshow_my: false,
                popshow_setting: false,
                c: false,
                picshow: false,
                popshow_writing: false,
                last_save:'',
                write_value:"",
                loading:{
                    text_loading:false
                },
                autosaveTime:'',
                pic_file:[]
            }
        },
        mounted() {
            if(!this.$store.state.userinfo.account){
                getUserInfo().then(r=>{
                    this.$store.commit('updateUserInfo',r.data)
                    if(this.$store.state.userinfo.text[0]){
                        this.write_value = this.$store.state.userinfo.text[0].content
                        this.last_save = format(this.$store.state.userinfo.text[0].savetime,true)
                    }
                })
            }else{
                if(this.$store.state.userinfo.text[0]){
                    this.write_value = this.$store.state.userinfo.text[0].content
                    this.last_save = format(this.$store.state.userinfo.text[0].savetime,true)
                }
            }
        },
        methods: {
            closedetail: function () {
                this.popshow_my = false
            },
            closeset: function () {
                this.popshow_setting = false
            },
            showPicBox: function () {
                this.picshow = !this.picshow
            },
            test: function (e) {
                e.preventDefault()
                console.log(e.dataTransfer.files)
            },
            test2: function (e) {
                e.preventDefault();
            },
            textareaTab:function(e){
                if(e.keyCode == 9) {
                     e.preventDefault()
                    this.write_value += "    "
                }
            },
            openNote:function(){
                this.popshow_writing=true
                this.autoSave()
            },
            closeNote:function(){
                this.popshow_writing = false
                clearInterval(timer)
                timer = null
            },
            updateText:function(){
                this.loading.text_loading = true
                textUpdate(this.write_value,(+new Date()/1000).toFixed(0)).then(r=>{
                    if(r.code  == 200){
                        this.$store.commit('updateText',r.data)
                        this.loading.text_loading = false
                        this.last_save = format(r.data.savetime,true)
                        this.$Message({
                            type:'success',
                            text:'保存成功'
                        })
                    }
                })
            },
            autoSave:function(){
                timer = setInterval(()=>{
                    textUpdate(this.write_value,(+new Date()/1000).toFixed(0)).then(r=>{
                        if(r.code  == 200){
                            this.$store.commit('updateText',r.data)
                            this.autosaveTime = format(r.data.savetime,true)
                        }
                    })
                },60000)
            },
            uploadPicFile:function(e){
                let file = [...e.target.files]
                let form = new FormData()
                file.forEach((val,index)=>{
                    if(val.type.slice(0,5) != 'image'){
                        this.$Message({
                            type:'fail',
                            text:'请上传图片文件'
                        })
                        return false
                    }
                    form.append(`img`,val)
                })
                form.append('imglength',file.length)
                picUpload(form).then(r=>{
                    console.log(r)
                })
            }
        }
    }
</script>

<style scoped>
    .opreate-page {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
    }

    .opreate {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .opreate-cell {
        height: 120px;
        width: 120px;
        border-radius: 10px;
        box-shadow: 0 0 5px 0 #d5d5d5;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 35px;
        cursor: pointer;
        transition: all .2s ease;
    }

    .opreate-cell:hover {
        transform: scale(1.1);
    }

    .pic-opreate {
        position: fixed;
        left: 0;
        width: 100%;
        height: 100vh;
        width: 100%;
        background: rgba(0, 0, 0, .3);
        box-sizing: border-box;
        display: flex;

    }

    .pic-func {
        box-shadow: 0 0 5px #d5d5d5;
        width: 400px;
        height: 100vh;
        box-sizing: border-box;
        background: #fff;
        display: flex;
        flex-direction: column;
    }

    .pic-choose {
        height: 200px;
        width: 330px;
        border: 1px dashed #5698c3;
        border-radius: 10px;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .lab {
        color: #5698c3;
        cursor: pointer;
    }

    .ppp {
        display: flex;
        flex-direction: column;
        font-size: 12px;
        margin-bottom: 10px;
    }

    .ppp input {
        height: 20px;
        width: 330px;
        border-radius: 5px;
        border: 1px solid #d5d5d5;
        margin-top: 5px;
        padding-left: 5px;
        transition: all .3s ease-in-out;
    }

    .ppp textarea {
        width: 330px;
        height: 90px;
        resize: none;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        outline: none;
        padding: 5px;
        margin-top: 5px;
        transition: all .3s ease-in-out;
    }

    .ppp input:focus,
    .ppp textarea:focus {
        border: 1px solid #8fb2c9;
    }

    .pic-des {
        margin-top: 20px;
    }

    .cancel {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #5698c3;
        font-size: 14px;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
        width: 100px;
        margin-left: 10px;
    }

    .pic-submit {
        display: flex;
        margin-top: 15px;
    }

    .pic-upload {
        padding: 15px 20px;
        border-bottom: 1px solid #e5e5e5;
        height: 500px;
    }

    .pic-display {
        flex: 1;
        overflow: hidden;
    }

    .img {
        height: 120px;
        width: 100px;
        background: #ccc;
    }

    .cell-wrap {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        margin-left: 15px;
        box-sizing: border-box;
        padding: 17px 34px 17px 0;
        display: flex;
        flex-wrap: wrap;
    }

    .pic-cell {
        margin-bottom: 20px;
        transition: all .2s ease;
        cursor: pointer;
    }

    .pic-cell:hover {
        transform: scale(1.1);
    }

    .pic-cell:nth-child(3n-1) {
        margin: 0 20px;
    }

    .pic-layout {
        flex: 1;
        display: flex;

    }

    .pic-detail {
        width: 300px;
        height: 100vh;
        background: #fff;
        padding: 20px;
        box-sizing: border-box;
    }

    .forpic {
        flex: 1;
        box-shadow: 0 0 5px #d5d5d5;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .img-pic {
        margin: 0 20px;
        width: 500px;
    }

    .imgbox {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .img-button {
        width: 32px;
        height: 32px;
        cursor: pointer;
    }

    .img-length {
        font-size: 20px;
        color: #fff;
        margin-top: 15px;
    }

    .pic-co {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    .q {
        font-size: 14px;
    }

    .pop-my-co {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    .cooo {
        font-size: 14px;
    }

    .setting-cp {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .writing-mask {
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, .1);
    }

    .writing-pop {
        width: 800px;
        height: 700px;
        box-shadow: 0 0 5px #dedede;
        border-radius: 5px;
        background: #fff;
        box-sizing: border-box;
        padding: 20px;
        display: flex;
        flex-direction: column;
    }

    .writing-area {
        box-shadow: inset 0 0 5px #dedede;
        border: none;
        outline: none;
        resize: none;
        width: 100%;
        border-radius: 5px;
        height: 500px;
        box-sizing: border-box;
        padding: 10px 20px;
        text-indent: 15px;
    }
    
    .writing-tip {
        font-size: 14px;
        margin-top: 5px;
    }
    .w {
        width: 70px;
        height: 35px;
    }
    .writing-opreate {
        display: flex;
        justify-content: flex-end;
    }
</style>