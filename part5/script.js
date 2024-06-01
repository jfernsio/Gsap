const  menu = document.getElementById('one');
const close = document.getElementById('two');
var tl = gsap.timeline()

tl.to("#full", {
    right:0,
    duration:0.6,
    
})

tl.from("#full h4",{
    x:150,
    duration:0.6,
    stagger:0.2,
    opacity:0
})

tl.from("#full i", {
    opacity:0,
})


tl.pause();

menu.addEventListener('click', () => {
    tl.play();
})

close.addEventListener('click', () => {
    tl.reverse()
})