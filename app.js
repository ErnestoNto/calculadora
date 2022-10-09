const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.querySelector('#input')
const resulltInput = document.getElementById('resultInput')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.calcBtn').forEach((item) => {
    item.addEventListener('click', function(){
        const value = item.dataset.value
        input.value += value
    })
})

document.querySelector('#clear').addEventListener('click', function(){
    input.value = ''
    input.focus()
})

input.addEventListener('keydown', function(ev){
    ev.preventDefault()
    if(allowedKeys.includes(ev.key)){
        input.value += ev.key
        return
    }
    if(ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }
    if(ev.key === 'Enter'){
        calculate()
    }
})

document.querySelector('#equal').addEventListener('click', () => calculate())

const calculate = () => {
    resulltInput.value = 'ERROR'
    resulltInput.classList.add('error')

    const result = eval(input.value)

    resulltInput.value = result
    resulltInput.classList.remove('error')
}

document.querySelector('#copyBtn').addEventListener('click', function (ev){
    const btn = ev.currentTarget

    if(btn.innerText === 'Copy'){
        btn.classList.add('success')
        btn.innerText = 'Copied'
        navigator.clipboard.writeText(resulltInput.value)
    }
    else{
        btn.innerText = 'Copy'
        btn.classList.remove('success')
    }
})

document.querySelector('.dark-ligth').addEventListener('click', function(){
  if(main.dataset.theme === 'dark'){
    root.style.setProperty('--bg-color', '#f1f5f9')
    root.style.setProperty('--border-color', '#aaa')
    root.style.setProperty('--color', '#292929')
    main.dataset.theme = 'ligth'
  }
  else{
    root.style.setProperty('--bg-color', '#292929')
    root.style.setProperty('--color', '#f1f5f9')
    main.dataset.theme = 'dark'
  }  
})