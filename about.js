// Auto-resize text area based on input
const text = document.querySelector(".center-textarea");

text.addEventListener("input", () => {
    text.style.height = "100px"; // Reset the height to default
    text.style.height = `${textarea.scrollHeight}px`; // Auto expand based on content
});

// Show an alert when an image is clicked
const teamMembers = document.querySelectorAll(".team-member img");

teamMembers.forEach(member => {
    member.addEventListener("click", () => {
        alert(`You clicked on ${member.alt}`);
    });
});
