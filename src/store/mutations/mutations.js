const mutations = {
    updateUserInfo(state,userinfo){
        state.userinfo = userinfo
    },
    updateText(state,textinfo){
        state.userinfo.text[0] = textinfo
    },
    updateUserRamed(state,ramed){
        state.userinfo.ramed = ramed
    },
    updatePic(state,pic){
        state.userinfo.pic.push(pic)
    }
}

export default mutations