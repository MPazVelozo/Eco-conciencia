document.addEventListener("DOMContentLoaded", function() {
    const colors = ["red", "blue", "green", "orange", "purple", "pink", "yellow"];
    const title = document.getElementById("titulo");

    title.addEventListener("click", function() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        title.style.color = randomColor;
    });
});
