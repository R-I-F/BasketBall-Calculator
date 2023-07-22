
let homeResult = 0
let guestResult = 0
function bh1(){
    homeResult++
    document.getElementById("home-counter").textContent = homeResult
}
function bh2(){
    homeResult+=2
    document.getElementById("home-counter").textContent = homeResult
}
function bh3(){
    homeResult+=3
    document.getElementById("home-counter").textContent = homeResult
}

function bg1(){
    guestResult+=1
    document.getElementById("guest-counter").textContent = guestResult
}

function bg2(){
    guestResult+=2
    document.getElementById("guest-counter").textContent = guestResult    
}

function bg3(){
    guestResult+=3
    document.getElementById("guest-counter").textContent = guestResult
}

function reset(){
  homeResult=0
  guestResult=0
  document.getElementById("home-counter").textContent = homeResult
  document.getElementById("guest-counter").textContent = guestResult
}
