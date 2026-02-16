const colors = ["red", "orange", "yellow", "green", "blue", "violet"];
let index = 0;

function rainbow() {
    document.querySelector("#name").style.color = colors[index];
    index = (index + 1) % colors.length;
}

setInterval(rainbow, 500);