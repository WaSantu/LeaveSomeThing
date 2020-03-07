const format = (date,m) => {
    let time = date*1000
    let t = new Date(time)
    let year = t.getFullYear()
    let month = t.getMonth()+1
    let day = t.getDate()
    let hour = t.getHours()
    let min = t.getMinutes()
    if(m){
        return `${year}年${month}月${day}日 ${hour}时${min}分`
    }else{
        return `${year}-${month}-${day}`
    }
}

export default format