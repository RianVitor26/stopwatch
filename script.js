"use strict"
const buttonStart = document.querySelector('[data-js="start"]')
const buttonStop = document.querySelector('[data-js="stop"]')
const numbers = document.querySelector('[data-js="numbers"]')

var hours = 0
var minutes = 0
var seconds = 0
var time = 100
var stopWatch = null

function start() {
    stopWatch = setInterval(() => timer(), time);
    buttonStart.value = 'Start'
    buttonStop.value = 'Stop'
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
    var format = (hours < 10 ? "0" + hours : hours) + " : " + (minutes < 10 ? "0" + minutes : minutes) + " : " + (seconds < 10 ? "0" + seconds : seconds)
    numbers.innerHTML = format
}

function stop() {
    clearInterval(stopWatch)
    textAlternative()
    reset()
}

function textAlternative() {
    buttonStart.value = 'Return'
    buttonStop.value = 'Reset'
}


buttonStart.addEventListener('click', start)
buttonStop.addEventListener('click', stop)
