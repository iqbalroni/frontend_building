gsap
  .timeline({
    scrollTrigger: {
      trigger: ".banner",
      start: "center center", //Animation start at this point
      end: "bottom top", //Animation finish at this point
      markers: false,
      scrub: true,
      pin: true,
    },
  })
  .to(".content", {
    paddingBottom: "100px",
  })
  .from(".card-banner", { y: innerWidth * 1 })
  .to(".nav", {
    width: "100%",
    borderRadius: 0,
    top: 0,
  })
  .from(".toUp", { x: innerWidth * 1 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "center center", //Animation start at this point
      end: "bottom top", //Animation finish at this point
      markers: false,
      scrub: true,
      pin: true,
    },
  })
  .from(".one", { x: innerWidth * 1 })
  .from(".two", { x: innerWidth * 1 })
  .from(".three", { x: innerWidth * 1 })
  .to(".one", { x: innerWidth * 1 })
  .to(".two", { x: innerWidth * 1 })
  .to(".three", {
    padding: "0",
    width: "100%",
    height: "90vh",
    position: "absolute",
    top: "0",
    left: "50%",
    transform: "translate(-50%, 0)",
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".cinematic",
      start: "center center", //Animation start at this point
      end: "bottom top", //Animation finish at this point
      markers: false,
      scrub: true,
      pin: true,
    },
  })
  .from(".satu", { x: innerWidth * -1 })
  .from(".dua", { x: innerWidth * 1 })
  .to(".plane", { transform: "translate(-0%, -40%)" })
  .to(".dua", {
    color: "#fff",
  })
  .to(".awan", {
    opacity: "0",
    transform: "translate(-50%, -0%)",
  })
  .to(".awan2", {
    opacity: "0",
    transform: "translate(-0%, -40%)",
  });
// .to(".nav", {
//   width: "80%",
//   borderRadius: "10px",
//   top: "40px",
// });
// .from(".nav", {
//   width: "100%",
//   borderRadius: 0,
//   top: 0,
// })
// .to(".nav", {
//   width: "80%",
//   borderRadius: "10px",
//   top: "40px",
// });
