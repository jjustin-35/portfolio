const paths = document.querySelectorAll('.thePaths')

// 取得長度
const pathList = []
paths.forEach(function (elem) {
    pathList.push(elem.getTotalLength())
})

// 加上CSS屬性
let path;
let timer = 0;
let cssAttr = `
@keyframes pathAnimation {
    to{
        stroke-dashoffset: 0;
    }
} 
`
// 建立style元素
const style = document.createElement('style')

paths.forEach((elem, i) => {
    if (i < 10) {
       timer = i * 0.3 
    } else {
        timer = (i - 10) * 0.4
    }
    cssAttr += `
    #${elem.id}{
    stroke-dasharray: ${pathList[i]}px;
    stroke-dashoffset: ${pathList[i]}px;
    animation: pathAnimation 0.6s ease-in forwards ${timer}s;
    }\n
    `
})

style.textContent = cssAttr
// 將style append到head最後面
document.head.appendChild(style)