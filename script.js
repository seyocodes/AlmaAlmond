const button = document.querySelector("button");

button.addEventListener("click", function() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "💗";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        heart.style.fontSize = "30px";
        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
});