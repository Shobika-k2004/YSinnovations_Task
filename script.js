// Display an alert message when the contact form is submitted
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for reaching out! We will get back to you shortly.");
    form.reset();
});

// Change the background color of sections on hover
const sections = document.querySelectorAll("main section");
sections.forEach(section => {
    section.addEventListener("mouseover", function () {
        section.style.backgroundColor = "#dff0d8"; // Light green
    });

    section.addEventListener("mouseout", function () {
        section.style.backgroundColor = "#ffffff"; // White
    });
});

// Add smooth scrolling for navigation links
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});
