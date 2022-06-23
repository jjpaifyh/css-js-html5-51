const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming!'
let idx = 1
let speed = 300 / speedEl.value
let TF = true
writeText()

function writeText() {
    if (TF) {
        textEl.innerText = text.slice(0, idx)

        idx++

        if (idx >= text.length) {
            TF = false
        }
    } else {
        textEl.innerText = text.slice(0, idx)

        idx--

        if (idx == 0) {
            TF = true
        }
    }



    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)