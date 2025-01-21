// Function to add fade-in effect when elements come into view
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    function fadeInOnScroll() {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 100) {
                card.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Trigger once to check visibility on load
});

// Hover effect using JavaScript to add dynamic classes
const cardElements = document.querySelectorAll(".card");

cardElements.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.classList.add("hovered");
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("hovered");
    });
});

// Smooth scrolling effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        }
    });
});

// Add a bouncing effect to buttons on click
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.add("bounce");
        setTimeout(() => {
            button.classList.remove("bounce");
        }, 300);
    });
});
