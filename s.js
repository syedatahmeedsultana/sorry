document.getElementById("yes").addEventListener("click", function() {
    document.getElementById("message").classList.remove("hidden");
});

document.getElementById("no").addEventListener("mouseover", function() {
    let x = Math.random() * window.innerWidth - 50;
    let y = Math.random() * window.innerHeight - 50;
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

/* Floating Hearts Effect */
function createHeart() {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    document.body.appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 500);
