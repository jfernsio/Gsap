
const main = document.getElementById('main');
const cursor = document.getElementById('cursor');

main.addEventListener('mousemove', function(val) {
    console.log(val.x);
    gsap.to(cursor,{
        x:val.x,
        y:val.y,
        duration:0.5,
      
    })
}) 