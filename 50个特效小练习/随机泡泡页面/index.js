// 随机颜色
function getcolro() {
    return '#' + Math.random().toString(16).substring(2, 8)
}
// 随机位置
function getXY() {
    return Math.floor(Math.random() * 100) + '%'
}
// 随机大小
function getDX() {
    while (1) {
        let x = Math.random() * 250
        if (x > 50) {
            return Math.floor(x) + 'px'
        }
    }
}
let pao = document.querySelectorAll('.pao')
    // 生成随机泡泡位置
for (let i = 0; i < 10; i++) {
    let DX = getDX()
    pao[i].style.width = DX
    pao[i].style.height = DX
    pao[i].style.backgroundColor = getcolro()
    pao[i].style.left = getXY()
    pao[i].style.top = getXY()
}




// pao.style=`width:20px; height:20px; background-color:${getcolro()};left: 0;top: 0;`