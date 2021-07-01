const load = gsap.timeline({
    paused: "true"
})
load.to("#percent, #bar",{
    duration: .2,
    opacity: 0,
    zIndex: -1
});
load.to(".progress",{
    duration: .8,
    width: "0%"
});
load.to(".loader-circle",{
    duration: 1.5,
    top: "50%",
    left: "80%"
})
load.to(".loader-circle img",{
    duration: .5,
    width: "300px",
    height: "300px"
});
load.to(".loader",{
    zIndex: 0
});
load.from(".header, .footer",{
    duration: 1.5,
    y: "150%",
    x: "-50%",
    opacity: 0,
    stagger: {
        amount: .4
    }
},"-=.5");
load.from(".content h1, p",{
    duration: 1.8,
    delay: 1,
    y: 200,
    skewY: 10,
    stagger: {
        amount: .4
    },
    opacity: 0,
    ease: "power4.out"
    
},"-=1.5");

var id;
var width = 1;
function loading(){
    id = setInterval(frame,20);
}
function frame(){
    if(width>=100){
        clearInterval(id);
        load.play();
    }
    else{
        width++;
        document.getElementById("barc").style.width = width + "%";
        document.getElementById("percent").innerHTML = width + "%";
    }
}