import Ajax from '../js/axios'

let ajax = Ajax.normalpost
let fileajax = Ajax.filepost

const userSign = (account,password,phone,name,backup_contact,to_phone,to_name,to_backup_contact) => ajax('/api/user/sign',{
    account,password,phone,name,backup_contact,to_phone,to_name,to_backup_contact
})

const userLogin = (account,password) => ajax('/api/user/login',{
    account,password
})

const accountCheck = (account) => ajax('/api/user/sign/check',{
    account
})

const getUserInfo = () => ajax('/api/opreate/getuserinfo')

const textUpdate =(content,date)=>ajax('/api/word/update',{
    content,date
})

const picUpload = (data) => fileajax('/api/pic/upload',data)
export {
    userSign,
    userLogin,
    accountCheck,
    getUserInfo,
    textUpdate,
    picUpload
}