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
                    <span class="cooo">{{$store.state.userinfo.ramed}}/{{$store.state.userinfo.ram}}</span>
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
                    <div class="pic-choose" @drop="dropfile" @dragover="dragover">
                        <span v-if='pic_file.length ==0'>拖拽文件至此 或 <label class="lab" for='pic'>点击上传</label></span>
                        <span v-for="(val,index) in pic_file" v-bind:key="index">{{val.name}}</span>
                    </div>
                    <div class="pic-des">
                        <div class="pic-name ppp">
                            <span>图片/图片组名称</span>
                            <input type="text" v-model="pic_name">
                        </div>
                        <div class="pic-info ppp">
                            <span>图片/图片组描述</span>
                            <textarea v-model="pic_des"></textarea>
                        </div>
                        <div class="pic-submit">
                            <Button text='上传' width='100' height='30' :loading='loading.pic_loading' @bClick='picupload' />
                            <span class="cancel" @click="cancelPic">取消</span>
                        </div>
                        <div class="progress" v-if='progress.start'>
                            <div :style="{width:300*progress.ing+'px'}" :class="[progress.ing==1?'finished':'','progress-ing']"></div>
                            <span>{{(progress.ing*100).toFixed(0)}}%</span>
                        </div>
                    </div>
                </div>
                <div class="pic-display">
                    <div class="cell-wrap">
                        <div class="pic-cell" v-for="(item,index) in $store.state.userinfo.pic" v-bind:key="index">
                            <div class="img">
                                <img :src="$img(item.path[0])" alt="" @click="layoutpic(item)">
                            </div>
                            <!-- <div class="img-num">
                                <span>3</span>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="pic-layout">
                <div class="forpic" v-if="pic_choose">
                    <div class="imgbox">
                        <img class="img-button" src="../../assets/img/prev.png" alt="" v-if="pic_choose && pic_choose.path.length>1" @click="prev">
                        <img class="img-pic"
                            :src="pic_choose.path[pic_index]"
                            alt="">
                        <img class='img-button' src="../../assets/img/next.png" alt="" v-if="pic_choose && pic_choose.path.length>1" @click="next">
                    </div>
                    <div class="img-length" v-if="pic_choose && pic_choose.path.length>1">
                        <span>{{pic_index+1}}/{{pic_choose.path.length}}</span>
                    </div>
                </div>
                <div class="pic-detail" v-if="pic_choose">
                    <div class="pic-co">
                        <span>上传时间:</span>
                        <span class="q">{{pic_choose.time}}</span>
                    </div>
                    <div class="pic-co">
                        <span>照片名称:</span>
                        <span class="q">{{pic_choose.name}}</span>
                    </div>
                    <div class="pic-co">
                        <span>照片描述:</span>
                        <span
                            class="q">{{pic_choose.des}}</span>
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
                popshow_my: false,//个人资料框
                popshow_setting: false,//设置框
                c: false,                
                picshow: false,//图片浏览框                
                popshow_writing: false,//文字框                
                last_save:'',//文字内容上次保存时间
                write_value:"",//文字内容
                loading:{
                    text_loading:false,//文字保存按钮loading
                    pic_loading:false//图片保存按钮loading
                },
                autosaveTime:'',//自动保存时间
                pic_file:[],//当前选择准备上传的图片
                pic_name:'',//图片填写的名称
                pic_des:'',//图片填写的描述
                pic_choose:null,//当前选择的图片
                pic_index:0,//当前选择图片的index
                progress:{
                    ing:'',//上传进度
                    start:false //上传是否开始
                }
            }
        },
        mounted() {
            //同步vuex的缓存内容进data，主要是同步文字内容的
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
                //关闭个人选择框
                this.popshow_my = false
            },
            closeset: function () {
                //关闭设置框
                this.popshow_setting = false
            },
            showPicBox: function () {
                this.picshow = !this.picshow
            },
            dropfile: function (e) {
                e.preventDefault()
                let files = [...e.dataTransfer.files]
                this.pic_file = files
            },
            dragover: function (e) {
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
                this.pic_file = file
            },
            picupload:function(){
                this.loading.pic_loading = true
                let file = this.pic_file
                let filesize = 0
                file.forEach((val,index)=>{
                    filesize += val.size
                })
                let realsize = (filesize/1024/1024).toFixed(1)
                let form = new FormData()
                form.append('imgsize',realsize)
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
                form.append('name',this.pic_name)
                form.append('des',this.pic_des)
                form.append('date',(+new Date()/1000).toFixed(0))
                picUpload((r)=>{
                    this.progress.start = true               
                    let p = +(r.loaded / r.total).toFixed(2)
                    this.progress.ing = p
                },form).then(r=>{
                    if(r.code == 200){
                        this.$Message({
                            type:'success',
                            text:'上传成功'
                        })
                        this.$store.commit('updateUserRamed',r.userinfo)
                        this.$store.commit('updatePic',r.pic)
                        this.pic_file = []
                        this.pic_name =''
                        this.pic_des = ''
                        this.progress.start = false
                        this.loading.pic_loading = false
                    }else{
                        this.$Message({
                            type:'fail',
                            text:r.msg
                        })
                        this.pic_file = []
                        this.pic_name =''
                        this.pic_des = ''
                        this.progress.start = false
                        this.loading.pic_loading = false
                    }
                })
            },
            layoutpic:function(e){
                this.pic_index = 0
                e.time = format(e.savetime,true)
                this.pic_choose = e 
            },
            prev:function(){
                if(this.pic_index == 0){
                    this.pic_index = this.pic_choose.path.length-1
                }else{
                    this.pic_index-=1
                }
            },
            next:function(){
                if(this.pic_index == this.pic_choose.path.length -1){
                    this.pic_index = 0
                }else{
                    this.pic_index +=1
                }
            },
            cancelPic:function(){
                this.picshow = false
                this.pic_choose=null
                this.pic_index=0
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
        flex-direction: column;
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
        transition: all .2s ease;
        z-index: 99;
    }
    .img img {
        height: 100%;
        width: 100%;
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
        position: relative;
        cursor: pointer;
        height: 121px;
    }

    .img:hover {
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
    .img-num {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }
    .progress {
        display: flex;
        align-items: center;
        margin-top: 10px;
        font-size: 12px;
    }
    .progress-ing {
        height: 10px;
        background: #5698c3;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px; 
        transition: width .2s ease;
        margin-right: 10px;
    }
    .finished {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px; 
    }
</style>