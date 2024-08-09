function connectButtonAndResumeButton() {
  document
    .getElementById("connectButton")
    .addEventListener("click", function () {
      window.location.href = "https://github.com/HimeshRawat";
    });
    document
    .getElementById("seeMore")
    .addEventListener("click", function () {
      window.location.href = "https://github.com/HimeshRawat";
    });
  document
    .getElementById("resumeButton")
    .addEventListener("click", function () {
      window.open("Resume/Himesh CV.pdf", "_blank");
    });
}
function SheryMagnetEffect() {
  Shery.makeMagnet(".right h4");
  Shery.makeMagnet(".right button");
  Shery.makeMagnet("#connectButton");
  Shery.makeMagnet("#seeMore");

}
function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to(".crsr", {
      left: dets.x,
      top: dets.y,
    });
  });
}
function locomotive(){
  const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  
}
connectButtonAndResumeButton();
SheryMagnetEffect();
cursorAnimation();
locomotive();