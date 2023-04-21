var tl = gsap.timeline();

tl.from(".box1",{
    backgroundColor: "blue",
    opacity:0,
    duration: 1,
    rotate:360
    // repeat:-1
})
tl.from(".box2",{
    // backgroundColor: "blue",
    opacity:0,
    duration: 1,
    // rotate:360,
    scrollTrigger: {
        trigger: ".box2",
        scroller: "body",
        markers: true,
        start: "top 70%",
        scrub: 2,
        // pin: true,
        end: "top 30%",
    },
        
})
tl.from(".box3",{
    // backgroundColor: "blue",
    opacity:0,
    duration: 1,
    // rotate:360,
    scrollTrigger: {
        trigger: ".box3",
        scroller: "body",
        markers: true,
        start: "top 70%",
        scrub: 2,
        // pin: true,
        end: "top 30%",
    },
    // repeat:-1
})