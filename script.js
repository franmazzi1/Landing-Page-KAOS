document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("active");
});
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("socialmedia").classList.toggle("active");
});

let currentIndex = 0;
const sections = document.querySelectorAll("section");

function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({ behavior: "smooth" });
        currentIndex = index;
    }
}

function scrollUp() {
    scrollToSection(currentIndex - 1);
}

function scrollDown() {
    scrollToSection(currentIndex + 1);
}


document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
        scrollDown();
    } else if (event.key === "ArrowUp") {
        scrollUp();
    }
});


