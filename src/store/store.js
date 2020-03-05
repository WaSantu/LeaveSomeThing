import Vue from 'vue'
import Vuex from 'vuex'

import state from './state/state'
import mutations from './mutations/mutations'
Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    mutations
})

export default store 