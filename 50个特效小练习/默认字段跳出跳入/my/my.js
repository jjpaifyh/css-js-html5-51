// 把label标签内的文字一个个提取出来放在span中，并且每个给定一个延迟动画的标签transition-delay，完成字符逐个跳出动画
const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})