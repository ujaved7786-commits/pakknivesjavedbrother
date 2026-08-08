/* =========================================
   PAK KNIVES JAVED BROTHER
   WEBSITE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       SMOOTH SCROLLING
    ===================================== */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId !== "#") {

                const target = document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    /* =====================================
       SCROLL REVEAL ANIMATION
    ===================================== */

    const cards = document.querySelectorAll(".card");

    const revealCards = function () {

        const windowHeight = window.innerHeight;

        cards.forEach(function (card) {

            const position = card.getBoundingClientRect().top;

            if (position < windowHeight - 80) {

                card.style.opacity = "1";
                card.style.transform = "translateY(0)";

            }

        });

    };


    cards.forEach(function (card) {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    });

    window.addEventListener("scroll", revealCards);

    revealCards();


    /* =====================================
       CURRENT YEAR
    ===================================== */

    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {

        element.textContent = new Date().getFullYear();

    });


    /* =====================================
       REQUEST QUOTE BUTTONS
    ===================================== */

    const quoteButtons = document.querySelectorAll(".button");

    quoteButtons.forEach(function (button) {

        const text = button.textContent.toLowerCase();

        if (
            text.includes("request quote") ||
            text.includes("contact us")
        ) {

            button.addEventListener("click", function () {

                console.log("Customer is interested in a product.");

            });

        }

    });

});
