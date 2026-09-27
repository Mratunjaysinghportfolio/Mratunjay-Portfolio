/* =========================================
   EYEBALL BACKGROUND
========================================= */

const eyeBackground = document.getElementById("eyeBackground");

const numberOfEyes = 22;

const eyes = [];


// Create eyeballs

for (let i = 0; i < numberOfEyes; i++) {

    const eye = document.createElement("div");

    eye.classList.add("eye");

    // Random position

    eye.style.left = `${Math.random() * 100}%`;

    eye.style.top = `${Math.random() * 100}%`;

    // Random size

    const size = 45 + Math.random() * 65;

    eye.style.width = `${size}px`;

    eye.style.height = `${size * 0.62}px`;

    // Random opacity

    eye.style.opacity = 0.10 + Math.random() * 0.18;

    // Slight random rotation

    eye.style.rotate = `${-15 + Math.random() * 30}deg`;

    eyeBackground.appendChild(eye);

    eyes.push(eye);
}


/* =========================================
   MOUSE TRACKING
========================================= */

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let currentX = mouseX;
let currentY = mouseY;


document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

});


/* =========================================
   SMOOTH ANIMATION
========================================= */

function animateEyes() {

    // Smooth cursor movement

    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;


    eyes.forEach((eye) => {

        const rect = eye.getBoundingClientRect();

        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;


        const deltaX = currentX - eyeCenterX;
        const deltaY = currentY - eyeCenterY;


        const distance = Math.sqrt(
            deltaX * deltaX +
            deltaY * deltaY
        );


        /*
            Maximum pupil movement
        */

        const maxMovement = 12;


        let pupilX = 0;
        let pupilY = 0;


        if (distance > 0) {

            pupilX =
                (deltaX / distance) *
                Math.min(distance / 15, maxMovement);

            pupilY =
                (deltaY / distance) *
                Math.min(distance / 15, maxMovement);

        }


        eye.style.setProperty(
            "--pupil-x",
            `${pupilX}px`
        );

        eye.style.setProperty(
            "--pupil-y",
            `${pupilY}px`
        );

    });


    requestAnimationFrame(animateEyes);
}


animateEyes();


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* Close menu after clicking a link */

document
    .querySelectorAll(".nav-links a")
    .forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });


/* =========================================
   CURRENT YEAR
========================================= */

const currentYear =
    document.getElementById("currentYear");

currentYear.textContent =
    new Date().getFullYear();


/* =========================================
   SIMPLE SCROLL EFFECT
========================================= */

window.addEventListener("scroll", () => {

    const header =
        document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(7, 7, 10, 0.92)";

    } else {

        header.style.background =
            "rgba(7, 7, 10, 0.7)";

    }

});
