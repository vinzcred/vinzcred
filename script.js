document.addEventListener('DOMContentLoaded', function () {

    // Rolagem suave dos links internos
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener('click', function (e) {

            const destino = document.querySelector(this.getAttribute('href'));

            if (destino) {

                e.preventDefault();

                destino.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

            }

        });

    });

    // Animação simples ao carregar
    const cards = document.querySelectorAll(
        '.product-card, .number-card, .testimonial, .faq-item'
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

            }

        });

    }, {
        threshold: 0.15
    });

    cards.forEach(card => {

        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';

        observer.observe(card);

    });

});
