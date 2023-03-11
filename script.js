const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int) //Prevents endless incrementing
    }

    loadText.innerText = `${load}%` //Display load counter on screen
    loadText.style.opacity = scale(load, 0, 100, 1, 0) //Parameters for load counter and opacity
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)` //Parameters for background blurring
}

//Use this function to map the blurring effect to the loading counter
//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
