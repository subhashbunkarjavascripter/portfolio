var circle = document.getElementById("joystik");
var circleRadius = 20;
var smoothFactor = 0.5;
var stationaryDelay = 500; 
var stationaryThreshold = 5;
var circleX = 0;
var circleY = 0;
var stationaryTimer = null;
var lastMouseX = 0;
var lastMouseY = 0;


document.addEventListener("mousemove", function(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

     if (lastMouseX === mouseX && lastMouseY === mouseY) {
        if (!stationaryTimer) {
            stationaryTimer = setTimeout(function() {
                circleX = mouseX;
                circleY = mouseY;
                stationaryTimer = null;
            }, stationaryDelay);
        }
    } else {
        clearTimeout(stationaryTimer);
        stationaryTimer = null;

        circleX += (mouseX - circleX) * smoothFactor;
        circleY += (mouseY - circleY) * smoothFactor;
    }

    circle.style.left = (circleX - circleRadius + 15) + "px";
    circle.style.top = (circleY - circleRadius + 15) + "px";

    lastMouseX = mouseX;
    lastMouseY = mouseY;


    var elementUnderCursor = document.elementFromPoint(mouseX, mouseY);

    if (elementUnderCursor && (elementUnderCursor.tagName === 'A' || elementUnderCursor.tagName === 'P' || elementUnderCursor.tagName === 'SPAN' || elementUnderCursor.tagName === 'DIV')) {
        circle.style.width = "70px";
        circle.style.height = "70px";
        circle.style.backgroundColor = "rgba(255, 255, 255, 0.315)";
        circle.style.border =  "2px solid green"
    } else {
        circle.style.width = "40px";
        circle.style.height = "40px";
        circle.style.border = "none";
        circle.style.backgroundColor = "rgba(0, 0, 0, 1)";
    }

});


var duration = 35;
var marqueeContainer = document.querySelector('#marquee');
var images = document.querySelectorAll('#marquee img');
var video = document.querySelectorAll('#marquee video');

images.forEach(function(image) {
    var clone = image.cloneNode(true);
    marqueeContainer.appendChild(clone);
});

var marqueeWidth = marqueeContainer.scrollWidth;

images.forEach(function(image) {
    var clone1 = image.cloneNode(true);
    var clone2 = image.cloneNode(true);
    marqueeContainer.appendChild(clone1);
    marqueeContainer.appendChild(clone2);
});

video.forEach(function(vid) {
    var clone = vid.cloneNode(false); 
    clone.src = vid.src;
    clone.autoplay = true;
    clone.muted = true;
    clone.loop = true;
    marqueeContainer.appendChild(clone);
});



function animateMarquee() {
    TweenMax.to(marqueeContainer, duration, {x: -marqueeWidth, ease: Linear.easeNone, repeat: -1}); // Repeat set to -1 for infinite loop
}

animateMarquee();

gsap.registerPlugin(ScrollTrigger);

gsap.to("#second .frist h2",{
  scrollTrigger:{
    trigger:"#second",
    start: "top 50%",
    end: "50% 80%",
    scrub: 2,

  },
  duration:1,
  fontSize: "7vw",
  opacity: 1,
  ease:Power1,
})


  

function animatecircle(){

  gsap.timeline({
    repeat: -1,
  })
  .from("#circle",{
    x: "100%", 
    y: "-100%",
    duration: 3, 
    ease: "linear", 
    
  })
  .to("#circle",{
    x: "-100%", 
    y: "100%",
    duration: 3, 
    ease: "linear", 
  })
  .from("#circle",{
    x:"-100%",
    y:"100%",
    duration: 3, 
    ease: "linear", 
  })
  .to("#circle",{
    x:"100%",
    y:"-100%",
    duration: 3, 
    ease: "linear", 
  })
 
};
  
function animatecircle2(){



  gsap.timeline({
    repeat: -1,
  })
  .from("#circle2",{
    x: "-100%", 
    y: "100%",
    duration: 3, 
    ease: "linear", 
    
  })
  .to("#circle2",{
    x: "100%", 
    y: "-100%",
    duration: 3, 
    ease: "linear", 
  })
  .from("#circle2",{
    x:"100%",
    y:"-100%",
    duration: 3, 
    ease: "linear", 
  })
  .to("#circle2",{
    x:"-100%",
    y:"100%",
    duration: 3, 
    ease: "linear", 
  })
};

animatecircle();
animatecircle2();



gsap.registerPlugin(ScrollTrigger);


function animate(){ 
  
  var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#third",
    start: "top top",
    end: "end end",
    pin: true,
    scrub: 2,
  }
});

tl2
.to("#slide1",{
  duration: 2,
  rotate:"10deg",
  ease: Power1
},'a')
.to("#slide2",{
  duration: 2,
  rotate:"10deg",
  ease: Power1
},'a')
.to("#slide3",{
  rotate:"10deg",
  duration: 2,
  ease: Power1
},'a')
.to("#imagecontainer",{
  width:"95%",
  height:"80%",
  duration: 2,
  ease:Power1
},'a')
.to("p",{
  fontSize:"2vw",
  opacity: 1, 
  duration: 3,
  ease:Power1
})

}

function animate2(){

  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#fourth",
    start: "top top",
    end: "end end",
    pin: true,
    scrub: 2,
  }
});
tl3
.to("#fourth h1",{
  fontSize:"7vw",
  top:"50%",
  duration:1,
  ease:Power1
})
.to("#card h3",{
  left:"45%",
   top:"20%",
   duration:1,
  ease: Power1
},'b')
.to("#card p",{
  left:"28%",
  bottom:"10%",
  duration:1,
  ease: Power1
},'b')
.to("#card2 h3",{
  left:"45%",
   top:"20%",
   duration:1,
  ease: Power1
},'b')
.to("#card2 p",{
  left:"28%",
  bottom:"10%",
  duration:1,
  ease: Power1
},'b')
.to("#card3 h3",{
  left:"45%",
   top:"20%",
   duration:1,
   ease: Power1
},'b')
.to("#card3 p",{
  left:"28%",
  bottom:"10%",
  duration:1,
  ease: Power1
},'b')
  }



  animate();
  animate2();