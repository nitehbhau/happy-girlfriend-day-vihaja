// Smooth Scroll
function scrollGallery() {
    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });
}

// Floating Hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💗";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);

}

setInterval(createHeart, 300);

// Music

const music = document.getElementById("music");

const btn = document.getElementById("musicBtn");

btn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        btn.innerHTML = "⏸ Pause Music";

    } else {

        music.pause();

        btn.innerHTML = "🎵 Play Music";

    }

});

// Click Photo to Zoom

document.querySelectorAll(".photo-grid img").forEach(photo => {

    photo.addEventListener("click", () => {

        if (photo.style.transform == "scale(1.5)") {

            photo.style.transform = "scale(1)";

            photo.style.zIndex = "1";

        } else {

            photo.style.transform = "scale(1.5)";

            photo.style.zIndex = "1000";

        }

    });

});

// Welcome Animation

window.onload = () => {

    document.body.style.opacity = "1";

};
