import Axios from 'axios'


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

                } else {
                    resolve(r)
                }
            }).catch(r => {
                reject(r)
            })
        })
    }
}

export default Ajax