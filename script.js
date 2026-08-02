// Pak Knives Javed Brother Website

document.addEventListener("DOMContentLoaded", function () {

    console.log("Website Loaded Successfully");

    // Smooth scroll for menu links
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {

            const target = this.getAttribute("href");

            if (target.startsWith("#")) {
                e.preventDefault();

                document.querySelector(target).scrollIntoView({
                    behavior: "smooth"
                });
            }

        });
    });

});

// Welcome Message
setTimeout(function () {
    alert("Welcome to Pak Knives Javed Brother");
}, 1000);
