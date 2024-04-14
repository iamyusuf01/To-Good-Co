function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },

  // follwoing line is not required to work pinning on touch screen

   pinType: document.querySelector("#main").style.transform ? "transform"  : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

locomotiveAnimation();

function navbarAnimation() {
    
gsap.to("#nav-part1 svg",{
    transform: "translateY(-100%)", 
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top 0",
        end:"top -5%",
        scrub:true
    }          
   
})
gsap.to("#nav-part2 #links",{
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top 0",
        end:"top -5%",
        scrub:true
    }
})
}

navbarAnimation();
function videoconAnimation() {

    let picscon = document.querySelector('#pics' );
let playbtn = document.querySelector('#pic');

picscon.addEventListener("mouseenter", function(){
    gsap.to(playbtn,{
      
    })
}) 

picscon.addEventListener("mouseleave", function(){
    gsap.to(playbtn,{
       
    })
});

picscon.addEventListener("mousemove", function(dets){
    gsap.to(playbtn,{
        left: dets.x-80,
        top: dets.y-80,
    })
});
}

videoconAnimation()

function loadingAnimation() {
    
gsap.from ( "#page1 h1",{
    y:30,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.3,
   
});
  
gsap.from ( "#page1 #pics",{
      scale: 0.9,
        opacity:0,
      delay:1.3,
      duration:0.3, 
});
}

loadingAnimation();
function cursorAnimation () {
    
document.addEventListener("mousemove",function(dets) {
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    })
})

// document.querySelector("#child1").addEventListener("mouseenter",function() {
//     gsap.to("#cursor",{
//         transform: 'translate(-50%,-50%) scale(1)',
       

//     })
// })

//  document.querySelector("#child1").addEventListener("mouseleave",function() {
//         gsap.to("#cursor",{
//             transform: 'translate(-50%,-50%) scale(0)',
              
//         })
//     })

document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener("mouseenter",function() {
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(1)',
        })
    })
    elem.addEventListener("mouseleave",function() {
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(0)',
        })
    })
})

}

cursorAnimation();

const dets = document.getElementsByClassName("dets");
const detsImage = document.getElementsByClassName("dets-image");

//  dets.addEventListener("mousenter",function(){
//     detsImage.to(dets,{
//         opacity: 1,
//         duration: 0.5,
//         ease: "power1.out"
//     });
//  })