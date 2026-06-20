// ==========================
// VINZCRED PREMIUM SCRIPT
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // HEADER SCROLL EFFECT
    // ==========================
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("header-scroll");
        } else {
            header.classList.remove("header-scroll");
        }
    });

    // ==========================
    // FAQ ACCORDION
    // ==========================
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            faqItems.forEach(other => {
                if (other !== item) {
                    other.classList.remove("active");
                }
            });

            item.classList.toggle("active");
        });

    });

    // ==========================
    // SCROLL SUAVE MENU
    // ==========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                window.scrollTo({
                    top: target.offsetTop - 90,
                    behavior: "smooth"
                });

            }

        });

    });

    // ==========================
    // ANIMAÇÃO AO ENTRAR
    // ==========================
    const reveals = document.querySelectorAll(
        ".card, .testimonial-card, .stats-box, .about-image"
    );

    const revealOnScroll = () => {

        reveals.forEach(element => {

            const windowHeight = window.innerHeight;

            const revealTop =
                element.getBoundingClientRect().top;

            if (revealTop < windowHeight - 100) {

                element.classList.add("show");

            }

        });

    };

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

});


// ==========================
// CONTADOR ESTATÍSTICAS
// ==========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / 80;

        if (count < target) {

            counter.innerText =
                `${Math.ceil(count + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});
