let eyeBalls = document.getElementsByClassName("eye-ball");
let eyeBrows = document.getElementsByClassName("eye-brow");
let ears = document.getElementsByClassName("ear");
let wings = document.getElementsByClassName("wing");
let eyeIris = document.getElementsByClassName("eye-iris");
let houtBody = document.getElementById("body");

const rektA = eyeBalls[0].getBoundingClientRect();
const eyeBallAX = rektA.left + rektA.width / 2;
const eyeBallAY = rektA.top + rektA.height / 2;

const rektB = eyeBalls[1].getBoundingClientRect();
const eyeBallBX = rektB.left + rektB.width / 2;
const eyeBallBY = rektB.top + rektB.height / 2;

window.addEventListener("mousemove", (e) => {
  let mouseX = e.clientX;
  let mouseY = e.clientY;

  let angleDegA = angle(mouseX, mouseY, eyeBallAX, eyeBallAY);
  eyeBalls[0].style.transform = `rotate(${120 + angleDegA}deg)`;
  eyeIris[0].style.transform = `rotate(${-(120 + angleDegA)}deg)`;

  let angleDegB = angle(mouseX, mouseY, eyeBallBX, eyeBallBY);
  eyeBalls[1].style.transform = `rotate(${140 + angleDegB}deg)`;
  eyeIris[1].style.transform = `rotate(${-(140 + angleDegB)}deg)`;
});

let counter = 0;

window.addEventListener("click", () => {
  counter++;
  for (let i = 0; i < eyeBalls.length; i++) {
    eyeBalls[i].style.height = "0";
  }
  setTimeout(() => {
    for (let i = 0; i < eyeBalls.length; i++) {
      eyeBalls[i].style.height = "34%";
    }
  }, 100);

  if (counter % 30 == 0) {
    for (let i = 0; i < eyeBalls.length; i++) {
      eyeBrows[i].style.top = "-40%";
    }
    eyeBrows[0].style.transform = "rotate(-10deg)";
    eyeBrows[1].style.transform = "rotate(10deg)";
    setTimeout(() => {
      for (let i = 0; i < eyeBalls.length; i++) {
        eyeBrows[i].style.top = "-30%";
      }
      eyeBrows[0].style.transform = "rotate(0deg)";
      eyeBrows[1].style.transform = "rotate(0deg)";
    }, 2500);
  }

  if (counter % 20 == 0) {
    for (let i = 0; i < eyeBalls.length; i++) {
      eyeBrows[i].style.top = "-25%";
    }
    eyeBrows[0].style.transform = "rotate(10deg)";
    eyeBrows[1].style.transform = "rotate(-10deg)";
    setTimeout(() => {
      for (let i = 0; i < eyeBalls.length; i++) {
        eyeBrows[i].style.top = "-30%";
      }
      eyeBrows[0].style.transform = "rotate(0deg)";
      eyeBrows[1].style.transform = "rotate(0deg)";
    }, 2500);
  }

  if (counter % 10 == 0) {
    ears[0].style.transform = "rotate(-40deg)";
    ears[1].style.transform = "rotate(40deg)";
    setTimeout(() => {
      ears[0].style.transform = "rotate(0deg)";
      ears[1].style.transform = "rotate(0deg)";
      setTimeout(() => {
        ears[0].style.transform = "rotate(-40deg)";
        ears[1].style.transform = "rotate(40deg)";
        setTimeout(() => {
          ears[0].style.transform = "rotate(0deg)";
          ears[1].style.transform = "rotate(0deg)";
          setTimeout(() => {
            ears[0].style.transform = "rotate(-40deg)";
            ears[1].style.transform = "rotate(40deg)";
            setTimeout(() => {
              ears[0].style.transform = "rotate(0deg)";
              ears[1].style.transform = "rotate(0deg)";
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    }, 100);
  }
});

houtBody.addEventListener("click", () => {
  wings[0].classList.add("hoot-hy-wing-l");
  wings[1].classList.add("hoot-hy-wing-r");
  setTimeout(() => {
    wings[0].classList.remove("hoot-hy-wing-l");
    wings[1].classList.remove("hoot-hy-wing-r");
  }, 2100);
});

function angle(ax, ay, bx, by) {
  const dy = ay - by;
  const dx = ax - bx;
  const deg = (Math.atan2(dy, dx) * 180) / Math.PI;
  return deg;
}
