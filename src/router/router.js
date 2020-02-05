import Vue from "vue";
import VueRouter from "vue-router";

import Index from '../container/index'
import Login from '../container/login/login'
import Sign from '../container/sign/sign'
import Opreate from '../container/opreate/opreate'
Vue.use(VueRouter);
const router =  new VueRouter({
    routes:[{
        path:'/',
        component:Index
    },{
        path:'/login',
        component:Login
    },{
        path:'/sign',
        component:Sign
    },{
        path:'/opreate',
        component:Opreate
    }]
})
export default router;