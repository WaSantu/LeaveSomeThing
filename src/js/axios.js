import Axios from 'axios'
import Vue from 'vue'

class Ajax {
    static normalpost(o,
        data = {},
        type = 'POST',
        headers = {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + window.localStorage['token']
        }) {
        return new Promise((resolve, reject) => {
            Axios({
                url: o,
                method: type,
                data: data,
                headers: headers,
            }).then(r => {
                if (r.data.code == 401) {
                    Vue.prototype.$MyMessage({
                        type:'fail',
                        text:'用户登陆时间过期'
                    })
                } else {
                    resolve(r.data)
                }
            }).catch(r => {
                reject(r)
            })
        })
    }
}

export default Ajax