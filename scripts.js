const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const progress = document.getElementById("progress");
const current = document.getElementById("current");
const duration = document.getElementById("duration");

playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸";
    } else {
        audio.pause();
        playBtn.textContent = "▶";
    }
});

audio.addEventListener("loadedmetadata", () => {
    progress.max = audio.duration;
    duration.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
    progress.value = audio.currentTime;
    current.textContent = formatTime(audio.currentTime);
});

progress.addEventListener("input", () => {
    audio.currentTime = progress.value;
});

function show(m) {
    const data = {
        A: {
            name: "Nguyễn Văn A",
            info: "Leader - Nhiệt tình 💪",
            img: "img/a.jpg"
        },
        B: {
            name: "Trần Thị B",
            info: "Designer 🎨",
            img: "img/b.jpg"
        },
        C: {
            name: "Lê Văn C",
            info: "Developer 💻",
            img: "img/c.jpg"
        },
        D: {
            name: "Phạm Thị D",
            info: "Content ✍️",
            img: "img/d.jpg"
        }
    };

    document.getElementById("popup").style.display = "block";
    document.getElementById("popup-img").src = data[m].img;
    document.getElementById("popup-name").innerText = data[m].name;
    document.getElementById("popup-info").innerText = data[m].info;
}

function hide() {
    document.getElementById("popup").style.display = "none";
}