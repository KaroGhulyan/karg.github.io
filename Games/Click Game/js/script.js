const output = document.querySelector(".output");
const messageOut = document.querySelectorAll(".message span");
let score = 0;

output.addEventListener("mouseenter", () => {
    output.style.backgroundColor = "blue";
});

output.addEventListener("mouseleave", () => {
    output.style.backgroundColor = "white";
});

output.addEventListener("mousemove", e => {
    //   console.log(e.x);
    //   console.log(e.y);
    messageOut[0].innerText = e.x;
    messageOut[1].innerText = e.y;
});

document.addEventListener("DOMContentLoaded", function () {
    let div = document.createElement("div");
    div.classList.add("circle");
    output.appendChild(div);
    div.x = div.offsetLeft;
    div.y = div.offsetTop;
    div.tempColor =
        "#" +
        Math.random()
            .toString(16)
            .substr(-6);
    div.style.backgroundColor = div.tempColor;
    div.addEventListener("mouseenter", e => {
        div.style.backgroundColor = "red";
    });
    div.addEventListener("mouseleave", e => {
        div.style.backgroundColor = div.tempColor;
    });
    div.addEventListener("click", e => {
        div.tempColor =
            "#" +
            Math.random()
                .toString(16)
                .substr(-6);
        div.style.backgroundColor = div.tempColor;
        score++;
        messageOut[2].innerText = score;
    });
    div.steps = Math.random() * 20;
    div.direction = Math.floor(Math.random() * 4);
    window.requestAnimationFrame(move);
});

function move() {
    let speed = Math.random() * 5 + 7;
    const circle = document.querySelector(".circle");
    let bounds = output.getBoundingClientRect();
    //   console.log(bounds);
    circle.steps--;
    if (circle.steps < 0) {
        circle.direction = Math.floor(Math.random() * 4);
        circle.steps = Math.random() * 20;
    }
    if (circle.direction == 0 && circle.x < bounds.right - 100) {
        circle.x += speed;
    }
    if (circle.direction == 1 && circle.x > bounds.left) {
        circle.x -= speed;
    }
    if (circle.direction == 2 && circle.y < bounds.bottom - 100) {
        circle.y += speed;
    }
    if (circle.direction == 3 && circle.y > bounds.top) {
        circle.y -= speed;
    }
    circle.style.top = circle.y + "px";
    circle.style.left = circle.x + "px";
    window.requestAnimationFrame(move);
}