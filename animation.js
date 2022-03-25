const paths = document.querySelectorAll('.thePaths')

// 取得長度
const pathList = []
paths.forEach(function (elem) {
    pathList.push(elem.getTotalLength())
})

// 加上CSS屬性
let path;
let timer = 0;
let cssAttr = ''
const style = document.createElement('style')

paths.forEach((elem, i)=>{
    timer = i * 0.3
    cssAttr += `
    #${elem.id}{
    stroke-dasharray: ${pathList[i]}px;
    stroke-dashoffset: ${pathList[i]}px;
    animation: pathAnimation 0.6s ease-in forwards ${timer}s;
    }\n
    `
})

cssAttr += `
@keyframes pathAnimation {
    to{
        stroke-dashoffset: 0;
    }
} `

style.textContent = cssAttr
document.head.appendChild(style)