function Responsive() {
  const MenuButton = document.querySelector(".menuButton");
  const MenuBox = document.querySelector(".menuBox");
  MenuButton.addEventListener("click", () => {
    MenuBox.classList.toggle("hidden");
  });
}

function connectButtonAndResumeButton() {
  document
    .getElementById("connectButton")
    .addEventListener("click", function () {
      window.location.href = "https://github.com/HimeshRawat";
    });
  document.getElementById("seeMore").addEventListener("click", function () {
    window.location.href = "https://github.com/HimeshRawat";
  });
  document
    .getElementById("resumeButton")
    .addEventListener("click", function () {
      window.open("Resume/Himesh CV.pdf", "_blank");
    });
  document
    .getElementById("resume-Button")
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

Responsive();
connectButtonAndResumeButton();
SheryMagnetEffect();
cursorAnimation();
