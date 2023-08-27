window.addEventListener("scroll", scrollWork, {
    passive: true, // 스크롤 성능 향상을 위한 옵션으로 true일 경우, 스크롤을 위해 블록되는 것을 방지한다. 사용하지 않을 경우 크롬에서 경고 발생
});

const html = document.querySelector("html");
const headerUl = document.querySelector("header ul");
const contactLis = document.querySelectorAll("#contact li");

function scrollWork() {
    // 스크롤이 어느정도 되면 headerA들에 하나씩 class on을 붙인다
    // 스크롤탑이 740은 넘고 1630이하까지 되면 첫번째 A에 on을 붙인다
    // 1640이 되면 두번째 A에 on을 붙인다
    // 3215가 되면 세번째 A에 on을 붙인다

    console.log(html.scrollTop);

    if (html.scrollTop > 600 && html.scrollTop < 1000) {
        headerUl.children[0].children[0].className = "on";
    } else {
        headerUl.children[0].children[0].className = "";
    }

    if (html.scrollTop > 1000 && html.scrollTop < 2000) {
        headerUl.children[1].children[0].className = "on";
    } else {
        headerUl.children[1].children[0].className = "";
    }

    if (html.scrollTop > 2000) {
        headerUl.children[2].children[0].className = "on";
        for (let i = 0; i < contactLis.length; i++) {
            contactLis[i].classList.add("ani");
        }
    } else {
        headerUl.children[2].children[0].className = "";
        for (let i = 0; i < contactLis.length; i++) {
            contactLis[i].classList.remove("ani");
        }
    }
}

const headerABtn = document.querySelector("header .hambuger");
// console.log(headerABtn)

headerABtn.addEventListener("click", headerBtn);

function headerBtn(e) {
    e.preventDefault();
    if (headerABtn.classList.contains("on")) {
        headerABtn.classList.remove("on");
        headerUl.classList.remove("on");
    } else {
        headerABtn.classList.add("on");
        headerUl.classList.add("on");
    }
}

const skillCircleWrap = document.querySelector(".circle_wrap");
const portfolioWrap = document.querySelector(".portfolio_wrap");

// 스킬 요소 추가
const skillsArr = ["html", "css", "javscript", "dart"];
const skillsPoint = ["90", "80", "70", "50"];

for (let i = 0; i < skillsArr.length; i++) {
    const skillLi = document.createElement("li");
    const skillDiv = document.createElement("div");
    const skillTextDiv = document.createElement("div");
    const skillSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const skillCircle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    const skillCircle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    skillCircleWrap.appendChild(skillLi);
    skillLi.appendChild(skillDiv);
    skillLi.appendChild(skillTextDiv);
    skillDiv.appendChild(skillSvg);
    skillSvg.appendChild(skillCircle1);
    skillSvg.appendChild(skillCircle2);

    // console.log(circleTextDivs[0]);
}

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
    circleTextDivs[i].textContent = `${skillsArr[i]}`;
}

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

// 포트폴리오 요소 추가

const portfolioLi = document.createElement("li");
const portfolioImgDiv = document.createElement("div");
const portfolioTextDiv = document.createElement("div");
const portfolioImg = document.createElement("img");

const portfolioList = ["unnis", "mbti", "admin", "ediya", "line", "29cm"];
const portfolioTextList = [
    "언니스 홈페이지",
    "MBTI 테스트",
    "언니스 어드민 페이지",
    "클론 / 이디야",
    "클론 / 라인프렌즈",
    "클론 / 29cm",
];
const portfolioLinkList = [
    "https://yesoljeong.github.io/unnis_info",
    "https://yesoljeong.github.io/unnis_spti",
    "https://www.notion.so/admin-page-03e7104c1fdb4e419524bce24d18aeca",
    "https://yesoljeong.github.io/ediya",
    "https://yesoljeong.github.io/line-friends",
    "https://yesoljeong.github.io/29CM",
];

for (let i = 0; i < portfolioList.length; i++) {
    const portfolioLi = document.createElement("li");
    const portfolioImgDiv = document.createElement("div");
    const portfolioTextDiv = document.createElement("div");
    const portfolioImg = document.createElement("img");

    portfolioWrap.appendChild(portfolioLi);
    portfolioLi.appendChild(portfolioImgDiv);
    portfolioImgDiv.appendChild(portfolioImg);
    portfolioLi.appendChild(portfolioTextDiv);
}

const portfolioImgs = portfolioWrap.querySelectorAll("img");
const portfolioTexts = portfolioWrap.querySelectorAll("div:nth-child(2)");
const portfolioDivs = portfolioWrap.querySelectorAll("div:nth-child(1)");

console.log(portfolioDivs[0].setAttribute);

let path = window.location.origin.includes("127.0.0.1") ? "" : "/portfolio";
for (let i = 0; i < portfolioImgs.length; i++) {
    portfolioImgs[i].src = path + `/img/${portfolioList[i]}.png`;
    portfolioTexts[i].textContent = `${portfolioTextList[i]}`;
    portfolioDivs[i].setAttribute("onClick", `location.href='${portfolioLinkList[i]}';`);
}

// const portfolioImgs = portfolioWrap.querySelectorAll("img");
// console.log(portfolioImgs);
