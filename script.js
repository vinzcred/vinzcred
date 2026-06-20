// Scroll suave para links internos

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        if(destino){

            destino.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});

// Header muda ao rolar a página

window.addEventListener('scroll', () => {

    const header = document.querySelector('header');

    if(window.scrollY > 80){

        header.classList.add('header-scroll');

    } else {

        header.classList.remove('header-scroll');

    }

});

// Revelação dos elementos ao aparecerem

const elementos = document.querySelectorAll(
'.card, .stat, .sobre-grid, .faq-item'
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

},{
    threshold:0.15
});

elementos.forEach(el=>{
    observer.observe(el);
});

console.log('VinzCred Premium carregada.');
