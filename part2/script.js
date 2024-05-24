
gsap.from("#page1 #box", {
    scale:0,
    rotate:360,
    duration:2,
    delay:1,
    
})


// gsap.from("#page2 #box", {
//     scale:0,
//     duration:2,
//     rotate:360,
//     // scrollTrigger:"#page2 #box"
//     scrollTrigger:{
//         trigger:"page2 box",
//         scroller:"body",
//         markers:true,
//         start: "top 50%"
//         }
// })

gsap.from("#page2 h1",{
    opacity:0,
    scale:0,
    duration:2,
    x:-500,
    scrollTrigger:{
     trigger:"#page2 h1",
     scroller:"body",
     markers:true,
     start:"top 60%",
     scrub:5
    }
})

gsap.from("#page2 h2",{
    opacity:0,
    scale:0,
    duration:2,
    y:500,
    scrollTrigger:{
     trigger:"#page2 h1",
     scroller:"body",
     markers:true,
     start:"top 70%",
    scrub:5
    }
})

gsap.from("#page5 h1",{
    // opacity:0,
    // duration:3,
    // delay:0.5,
    // x:1000,
    transform: "translateX(-200%)",
    scrollTrigger:{
        trigger:"#page5 ",//while using pin trigger req parent el           
        scroller:"body",
        markers:true,
        strat:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true
        
    }
} )

gsap.from("#page3 #box", {
    scale:0,
    rotate:360,
    duration:2,
    delay:1,
    
})

