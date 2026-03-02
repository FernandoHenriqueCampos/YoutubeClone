let isOpen = true;

function openMenu() {
    const menu = document.getElementById("menu");
    const main = document.getElementById("main");
    const navFilterVideo = document.getElementById("navFilterVideo");
    if (isOpen) {
        menu.classList.remove("open");
        main.classList.remove("open");
        navFilterVideo.classList.remove("open");
        document.getElementById("menu").style.display = "none";
        isOpen = false;
    } else {
        menu.classList.add("open");
        main.classList.add("open");
        navFilterVideo.classList.add("open");
        document.getElementById("menu").style.display = "flex";
        isOpen = true;
    }
}

openMenu();