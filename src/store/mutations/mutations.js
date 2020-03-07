const mutations = {
    updateUserInfo(state,userinfo){
        state.userinfo = userinfo
    },
    updateText(state,textinfo){
        state.userinfo.text[0] = textinfo
    }
}

export default mutations