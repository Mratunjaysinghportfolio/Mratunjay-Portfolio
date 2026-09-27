js/
└── eye-tracking.js
/* ==========================================
   EYE BALL CURSOR TRACKING EFFECT
   ========================================== */

const eyes = document.querySelectorAll(".eye");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let currentMouseX = mouseX;
let currentMouseY = mouseY;


/* ------------------------------------------
   GET CURSOR POSITION
------------------------------------------ */

document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

});


/* ------------------------------------------
   EYE ANIMATION
------------------------------------------ */

function moveEyes() {

    /*
     * Smooth cursor movement
     * This prevents the pupils from moving
     * suddenly or looking robotic.
     */

    currentMouseX +=
        (mouseX - currentMouseX) * 0.12;

    currentMouseY +=
        (mouseY - currentMouseY) * 0.12;


    eyes.forEach((eye) => {

        /*
         * Get the exact position of
         * each eye on the screen.
         */

        const eyePosition =
            eye.getBoundingClientRect();


        /*
         * Find the center of the eye.
         */

        const eyeCenterX =
            eyePosition.left +
            eyePosition.width / 2;

        const eyeCenterY =
            eyePosition.top +
            eyePosition.height / 2;


        /*
         * Calculate the distance between
         * the cursor and the eye.
         */

        const x =
            currentMouseX - eyeCenterX;

        const y =
            currentMouseY - eyeCenterY;


        /*
         * Calculate the angle/direction
         * towards the cursor.
         */

        const angle =
            Math.atan2(y, x);


        /*
         * Maximum distance the pupil
         * can move inside the eyeball.
         */

        const maxMovement = 30;


        /*
         * Move pupil towards cursor.
         */

        const pupilX =
            Math.cos(angle) * maxMovement;

        const pupilY =
            Math.sin(angle) * maxMovement;


        /*
         * Send the values to CSS.
         *
         * Your CSS should use:
         *
         * var(--pupil-x)
         * var(--pupil-y)
         */

        eye.style.setProperty(
            "--pupil-x",
            `${pupilX}px`
        );

        eye.style.setProperty(
            "--pupil-y",
            `${pupilY}px`
        );

    });


    /*
     * Keep animation running.
     */

    requestAnimationFrame(moveEyes);

}


/* ------------------------------------------
   START EFFECT
------------------------------------------ */

moveEyes();
