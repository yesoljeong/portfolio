// 스킬 요소 추가
const skillLi = document.createElement("li");
const skillDiv = document.createElement("div");
const skillTextDiv = document.createElement("div");
const skillSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const skillCircle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
const skillCircle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");

const skillCircleWrap = document.querySelector(".circle_wrap");

// console.log(skillCircleWrap);

skillCircleWrap.appendChild(skillLi);
skillLi.appendChild(skillDiv);
skillLi.appendChild(skillTextDiv);
skillDiv.appendChild(skillSvg);
skillSvg.appendChild(skillCircle1);
skillSvg.appendChild(skillCircle2);

const circleLis = skillCircleWrap.querySelectorAll("li");
const circleDivs = skillCircleWrap.querySelectorAll("div:nth-child(1)");
const circleTextDivs = skillCircleWrap.querySelectorAll("div:nth-child(2)");
const circleCircles = skillCircleWrap.querySelectorAll("circle");

for (let i = 0; i < circleLis.length; i++) {
    circleLis[i].classList.add("circle", `circle_${i + 1}`);
}

for (let i = 0; i < circleDivs.length; i++) {
    circleDivs[i].classList.add("pie");
}

for (let i = 0; i < circleTextDivs.length; i++) {
    circleTextDivs[i].classList.add("wrap_txt", "counter");
    circleTextDivs[i].textContent = "js에서";
}

// circleCircles[9].cx.animVal.value = "60";
console.log(circleCircles[0].style);

for (let i = 0; i < circleCircles.length; i++) {
    circleCircles[i].style.cx = "60";
    circleCircles[i].style.cy = "60";
    circleCircles[i].style.r = "53";
}

// 스킬 애니메이션 동작

const circles = document.querySelectorAll(".circle");

window.addEventListener("scroll", function () {
    if (900 < window.scrollY) {
        for (let i = 0; i < circles.length; i++) {
            circles[i].classList.add("on");
        }
    }
});
