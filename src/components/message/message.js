import Message from './message.vue'

let mes = {
    aliveTime:3000,//销毁时间
    animationTime:3000,//动画时间
    install:Vue=>{
        //这里虽然没有引用Vue，但是在Main.js中，Vue.use会自动执行这个Install挂在的方法，Vue实例也便代入了
        /**
         * @param  {Object} options
         * @param  {Function} cb
         */
        function CreateMsg(options,cb){
            if(typeof options == 'string'){
                throw new Error('this first param must be Object')
                return false
            }
            if(options.duration){
                mes.animationTime = options.duration
            }
            let v = Vue.extend({
                render:function(h){
                    let props = {
                        text:options.text,
                        type:options.type,
                        show:this.show
                    }
                    return h(Message,{props})
                    //render里的h其实是render中的一个createElement方法，可以在main.js里面看，vue的初始化渲染也是这种写法
                    //createElement 的第二个参数表示节点的属性，例子:{style:{color:'red'},props:{...}}
                },
                data() {
                    return {
                        show:false
                    }
                },
            })
            let M = new v() //子实例
            let vm = M.$mount() //挂载才能获得虚拟dom
            let el = vm.$el //获取虚拟dom
            document.body.appendChild(el)
            vm.show = true
            //其实这里我的show我暂时不太理解
            let timer1 = setTimeout(()=>{
                clearTimeout(timer1) //运行时清除定时器
                vm.show = false //组件隐藏，但是此时并没有被销毁
                let timer2 = setTimeout(()=>{
                    clearTimeout(timer2)
                    document.body.removeChild(el) //从真实dom中移除mes组件
                    M.$destroy() //销毁虚拟dom中的组件
                    vm = null //释放内存
                    cb && (typeof cb === 'function') && cb()
                    //cb存在？cb是否是函数？执行cb
                },mes.aliveTime)
            },mes.animationTime)
        }

        Vue.prototype.$Message =  CreateMsg
        //将函数挂在到Vue的原型上，方便全局调用
    }
}

export default mes