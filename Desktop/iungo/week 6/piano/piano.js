// load the audio

const DO = new Audio("audio/do.mp3")
const FA = new Audio("audio/fa.mp3")
const LA = new Audio("audio/la.mp3")
const MI = new Audio("audio/mi.mp3")
const RE = new Audio("audio/re.mp3")
const SI = new Audio("audio/si.mp3")
const SOL = new Audio("audio/sol.mp3")


// select piano key
let doKey = document.getElementById("do")
let faKey = document.getElementById("fa")
let laKey = document.getElementById("la")
let miKey = document.getElementById("mi")
let reKey = document.getElementById("re")
let siKey = document.getElementById("si")
let solKey = document.getElementById("sol")




document.addEventListener("keydown", (e)=>{
    switch(e.key){
        case "d":
            DO.play();
            doKey.classList.add("active")
            break;
         case "f":
            FA.play();
            faKey.classList.add("active")
            break;
        case "g":
            LA.play();
            laKey.classList.add("active")
            break;
        case "h":
            MI.play();
            miKey.classList.add("active")
            break;
        case "j":
            RE.play();
            reKey.classList.add("active")
            break;
        case "k":
            SI.play();
            siKey.classList.add("active")
            break;
        case "l":
            SOL.play();
            solKey.classList.add("active")
            break;
    }
})


document.addEventListener("keyup", (e) =>{
    switch(e.key){
        case "d":            
            doKey.classList.remove("active")
            break;
         case "f":            
            faKey.classList.remove("active")
            break;
        case "g":            
            laKey.classList.remove("active")
            break;
        case "h":            
            miKey.classList.remove("active")
            break;
        case "j":            
            reKey.classList.remove("active")
            break;
        case "k":            
            siKey.classList.remove("active")
            break;
        case "l":           
            solKey.classList.remove("active")
            break;
    }
})