// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {

    // 1. Controle do Menu Mobile
    const mobileBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Fecha o menu ao clicar em qualquer link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 2. Efeito de Scroll no Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Lógica do Formulário de Contato
    const contactForm = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const btnSubmit = contactForm.querySelector('button');
            const originalText = btnSubmit.innerText;

            // Estado de carregamento
            btnSubmit.innerText = 'Enviando...';
            btnSubmit.disabled = true;

            // Simulação de requisição AJAX/API
            setTimeout(() => {
                feedback.innerText = 'Sucesso! Entraremos em contato em breve.';
                feedback.className = 'mt-4 p-4 rounded-xl text-center font-medium bg-green-100 text-green-700';
                feedback.classList.remove('hidden');

                contactForm.reset();
                btnSubmit.innerText = originalText;
                btnSubmit.disabled = false;

                // Esconde o feedback após 5 segundos
                setTimeout(() => {
                    feedback.classList.add('hidden');
                }, 5000);
            }, 1500);
        });
    }
});