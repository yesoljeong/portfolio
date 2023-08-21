const circles = document.querySelectorAll(".circle");

console.log(window.scrollY);

// window.addEventListener("scroll", function () {

// });

window.addEventListener("scroll", function () {
    if (900 < window.scrollY) {
        console.log("넘었어");
        for (let i = 0; i < circles.length; i++) {
            circles[i].classList.add("on");
        }
    }
});
