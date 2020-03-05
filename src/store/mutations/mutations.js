const mutations = {
    updateUserInfo(state,userinfo){
        console.log(userinfo)
        state.userinfo = userinfo
    }
}

export default mutations