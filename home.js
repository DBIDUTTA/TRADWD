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
