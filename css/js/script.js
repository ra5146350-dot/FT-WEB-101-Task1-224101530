// Get the theme button
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");

// Change between light mode and dark mode
themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    const darkModeIsOn = document.body.classList.contains("dark");

    if (darkModeIsOn) {
        themeIcon.textContent = "☀";
        themeText.textContent = "Light mode";
    } else {
        themeIcon.textContent = "☾";
        themeText.textContent = "Dark mode";
    }
});

// Handle the contact form
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const visitorName = document.getElementById("name").value.trim();

    formMessage.textContent =
        `Thank you, ${visitorName}! Your details were entered successfully.`;

    contactForm.reset();
});
