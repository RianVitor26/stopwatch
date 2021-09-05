"use strict"
const buttonStart = document.querySelector('[data-js="start"]')
const buttonStop = document.querySelector('[data-js="stop"]')
const buttonReset = document.querySelector('[data-js="reset"]')
const numbers = document.querySelector('[data-js="numbers"]')

var hours = 0
var minutes = 0
var seconds = 0
var time = 1000
var stopWatch = null

function start() {
    stopWatch = setInterval(() => timer(), time);
    buttonStart.disabled = 'true'
    disable()
}


function timer() {
    seconds++
    if (seconds == 60) {
        seconds = 0
        minutes++
        
        if (minutes == 60) {
            minutes = 0
            hours++
        }
    }
    var format = (hours < 10 ? "0" + hours : hours)  + " : " + (minutes < 10 ? "0" + minutes : minutes) + " : " + (seconds < 10 ? "0" + seconds : seconds)
    numbers.innerHTML = format
}
function stop() {
    clearInterval(stopWatch)
    buttonStart.disabled = ''
    buttonStart.style.backgroundColor = '#7e57c2'
}
function reset() {
    clearInterval(stopWatch)
    hours = 0
    minutes = 0
    seconds = 0
    numbers.innerHTML = '00 : 00 : 00'
    buttonStart.disabled = ''
    buttonStart.style.backgroundColor = '#7e57c2'
}
function disable() {
    if (buttonStart.disable == '') {
        console.log('Enabled');
    } else {
        buttonStart.style.backgroundColor = '#9c7ad8'
    }
}
buttonStart.addEventListener('click', start)
buttonStop.addEventListener('click', stop)
buttonReset.addEventListener('click', reset)
