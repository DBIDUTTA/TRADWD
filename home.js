document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            link.style.transform = "scale(1.1)";
            link.style.transition = "transform 0.3s ease-in-out";
        });

        link.addEventListener("mouseout", function() {
            link.style.transform = "scale(1)";
        });
    });
});
textArea.addEventListener("focus", function() {
    textArea.style.backgroundColor = "#fffae6";
});

textArea.addEventListener("blur", function() {
    textArea.style.backgroundColor = "#fff";
});

contentImage.addEventListener("mouseover", function() {
    contentImage.style.transform = "rotate(5deg) scale(1.05)";
    contentImage.style.transition = "transform 0.3s ease-in-out";
});

contentImage.addEventListener("mouseout", function() {
    contentImage.style.transform = "rotate(0deg) scale(1)";
});

