gsap.to("#box1",{
    x:1000,
    delay:1,
    duration:2,
    yoyo:true,
    repeat:-1,
    borderRadius:45,
    rotate:"360%",
})

gsap.from("#box2",{
    y:1000,
    delay:0.5,
    duration:2,
    yoyo:true,
    repeat:-1,
    borderRadius:70,
    rotate:"360%"

})

gsap.from("#h1", {
    color:"green",
    duration:2,
    delay:1,
    repeat:-1
})

gsap.to("#fein p",{
    x:400,
    color:"red",
    duration:2,
    delay:1.5,
    stagger:1,
    repeat:-1,
    yoyo:true,
    space:2
})