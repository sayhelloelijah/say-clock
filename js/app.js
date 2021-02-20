import { clock } from "./components/clock.js";

function setBackgroundImage() {
    const header = document.querySelector(".say-clock");
    const image = header.getAttribute("data-image");
    const time = clock.getTime();

    if (time.hours >= 8 && time.meridian === "pm") {
        header.style.backgroundImage =
            "url('https://source.unsplash.com/daily?space,stars,moon,night,planets')";
    } else {
        header.style.backgroundImage = `url(${image})`;
    }
    document
        .querySelector(".background-overlay")
        .classList.remove("animated-background");
}

function init() {
    clock.displayTime();
    setBackgroundImage();
    clock.updateTime();
}

document.addEventListener("DOMContentLoaded", function () {
    init();
});
