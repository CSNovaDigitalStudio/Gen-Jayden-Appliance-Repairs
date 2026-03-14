// LOADER
window.onload = () =>{
document.getElementById("loader").style.display="none"
}

// SLIDER
let slides = document.querySelectorAll(".slide")
let i=0

setInterval(()=>{
slides[i].classList.remove("active")
i=(i+1)%slides.length
slides[i].classList.add("active")
},4000)


// COUNTERS
document.querySelectorAll(".counter").forEach(c=>{
let update=()=>{
let target=+c.dataset.target
let current=+c.innerText
let inc=target/100

if(current<target){
c.innerText=Math.ceil(current+inc)
setTimeout(update,20)
}else c.innerText=target
}
update()
})


// NAV SHRINK
window.addEventListener("scroll",()=>{
navbar.classList.toggle("shrink",window.scrollY>50)
})

// SCROLL PROGRESS
window.onscroll=()=>{
let winScroll=document.body.scrollTop||document.documentElement.scrollTop
let height=document.documentElement.scrollHeight-document.documentElement.clientHeight
document.getElementById("progressBar").style.width=(winScroll/height)*100+"%"
}

// WHATSAPP
function bookWhatsApp(){
window.open("https://wa.me/27681915286?text=Hello%20I%20need%20appliance%20repair")
}