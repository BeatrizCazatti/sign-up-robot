var inputEmail = document.querySelector('#email')
var inputPassword = document.querySelector('#password')
var divEyes = document.querySelectorAll('.eyes')[0]
var eyeL = document.querySelectorAll('.left-eye')[0]
var eyeR = document.querySelectorAll('.right-eye')[0]
var mouth = document.querySelector('.mouth svg')
var normalMouth = document.querySelectorAll('.mouth svg circle')[0]
var angryMouth = document.querySelectorAll('.angry-mouth')[0]
var visor = document.querySelectorAll('.visor')[0]
var earL = document.querySelectorAll('.ear-left')[0]
var earR = document.querySelectorAll('.ear-right')[0]
var armL = document.querySelectorAll('.left-arm')[0]
var armR = document.querySelectorAll('.right-arm')[0]
var circle = document.querySelectorAll('.circle')[0]
var light = document.querySelectorAll('.light')[0]



var turnedDown = false
var coverEye = false
var inputEmailFocus = false

var translateValue = 0
var elementsHead = [eyeL, eyeR, mouth, visor]

document.querySelector('body').addEventListener('keydown',function(event){
    
    translateValue = inputEmail.value.length / 5
    
    if(inputEmailFocus === true){
        for (let n = 0; n < elementsHead.length; n++) {
            if(translateValue < 10){
                if(event.code == 'Backspace' || event.code == 'Delete'){
                    earL.classList.remove('translate-zero')
                    earR.classList.remove('translate-zero')
                    
                    elementsHead[n].style.transform = `translate(calc(${translateValue}px - 5px), 6px)`
                    earL.style.transform = `translate(-${translateValue}px, 0)`
                    earR.style.transform = `translate(-${translateValue}px, 0)`
                }else{
                    elementsHead[n].style.transform = `translate(${translateValue}px, 6px)`
                    earL.style.transform = `translate(calc(-${translateValue}px + 3px), 0)`
                    earR.style.transform = `translate(calc(-${translateValue}px + 3px), 0)`
                }
            }
        }
    }
})

document.querySelector('#email').addEventListener('focus', function(event) {
    inputEmailFocus = true
    normal()
    
    if(turnedDown == false){
        turnedDown = true
        
        console.log('abaixa')
        //para de pinscar
        divEyes.classList.remove('active-blink-eyes-animated')
        
        for (let n = 0; n < elementsHead.length; n++) {
            elementsHead[n].classList.remove('translate-zero')
            elementsHead[n].classList.add('turned-down')
        }
        
        earL.classList.remove('translate-zero')
        earR.classList.remove('translate-zero')
        earL.classList.add('ear-turned-down')
        earR.classList.add('ear-turned-down')
    }
    
})
document.querySelector('#email').addEventListener('blur', function(event) {
    inputEmailFocus = false

    if(turnedDown == true){
        turnedDown = false
        console.log('levanta')
        for (let n = 0; n < elementsHead.length; n++) {
            elementsHead[n].classList.remove('turned-down')
            elementsHead[n].classList.add('translate-zero')
        }
        
        earL.classList.remove('ear-turned-down')
        earR.classList.remove('ear-turned-down')
        earL.classList.add('translate-zero')
        earR.classList.add('translate-zero')
        
        //continua piscando
        divEyes.classList.add('active-blink-eyes-animated')
    }
})

document.querySelector('#password').addEventListener('focus', function(event) {
    normal()
    if(coverEye == false){
        coverEye = true
        console.log('tampou')
        armL.classList.add('left-arm-show')
        armR.classList.add('right-arm-show')
    }
})
document.querySelector('#password').addEventListener('blur', function(event) {
    if(coverEye == true){
        coverEye = false
        console.log('destampou')
        armL.classList.remove('left-arm-show')
        armR.classList.remove('right-arm-show')
    }
})
function verification(){
    
    earL.classList.add('translate-zero')
    earR.classList.add('translate-zero')
    
    inputEmail.style.borderColor = 'var(--color-5)'
    inputPassword.style.borderColor = 'var(--color-5)'

    let password = 1234
    if(inputPassword.value == password){
        happy()

    }else{
        if(inputEmail.value == ""){
            inputEmail.style.borderColor = 'var(--color-6)'
        }
        if(inputPassword.value == ""){
            inputPassword.style.borderColor = 'var(--color-6)'
        }
        angry()
    }

}

function normal(){
    eyeL.classList.add('translate-zero')
    eyeL.classList.remove('angry-eyes')
    eyeL.classList.remove('angry-left-eye')
    eyeL.classList.remove('happy-left-eye')
    
    eyeR.classList.add('translate-zero')
    eyeR.classList.remove('angry-eyes')
    eyeR.classList.remove('angry-right-eye')
    eyeR.classList.remove('happy-right-eye')
    
    normalMouth.style.opacity = '1'
    angryMouth.style.opacity = '0'
    
    normalMouth.classList.add('translate-zero')
    light.style.background = 'var(--color-4)'
    visor.style.background = 'var(--color-4)'
    circle.style.background = 'var(--color-3)'
    
    earL.classList.add('translate-zero')
    earR.classList.add('translate-zero')
    
    
    divEyes.classList.add('active-blink-eyes-animated')
}
function angry(){
    divEyes.classList.remove('active-blink-eyes-animated')
    
    eyeL.classList.add('translate-zero')
    eyeL.classList.add('angry-eyes')
    eyeL.classList.add('angry-left-eye')
    
    eyeR.classList.add('translate-zero')
    eyeR.classList.add('angry-eyes')
    eyeR.classList.add('angry-right-eye')
    
    normalMouth.style.opacity = '0'
    angryMouth.style.opacity = '1'

    earL.classList.add('translate-zero')
    earR.classList.add('translate-zero')
    
    light.style.background = 'var(--color-6)'
    visor.style.background = 'var(--color-7)'
    circle.style.background = 'var(--color-8)'
}
function happy(){
    divEyes.classList.remove('active-blink-eyes-animated')
    
    light.style.background = 'green'
    eyeL.classList.add('translate-zero')
    eyeL.classList.remove('angry-eyes')
    eyeL.classList.add('happy-left-eye')
    
    eyeR.classList.add('translate-zero')
    eyeR.classList.remove('angry-eyes')
    eyeR.classList.add('happy-right-eye')
    
    earL.classList.add('translate-zero')
    earR.classList.add('translate-zero')

    normalMouth.classList.add('translate-zero')
    normalMouth.style.background = 'var(--color-9)'
    light.style.background = 'var(--color-9)'
    visor.style.background = 'var(--color-10)'
    circle.style.background = 'var(--color-11)'
}