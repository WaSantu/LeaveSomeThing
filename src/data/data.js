import Ajax from '../js/axios'

let ajax = Ajax.normalpost

const userSign = (account,password,phone,name,backup_contact,to_phone,to_name,to_backup_contact) => ajax('/api/user/sign',{
    account,password,phone,name,backup_contact,to_phone,to_name,to_backup_contact
})

const userLogin = (account,password) => ajax('/api/user/login',{
    account,password
})


export {
    userSign,
    userLogin
}