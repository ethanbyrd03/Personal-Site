// ===== MOBILE MENU =====
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

if (menu && menuLinks) {
    menu.addEventListener('click', function () {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });

    menuLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('is-active');
            menuLinks.classList.remove('active');
        });
    });
}

// ===== PROJECT FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projCards = document.querySelectorAll('.proj-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        projCards.forEach(card => {
            const cat = card.dataset.category;
            if (filter === 'all' || cat === filter || cat === 'all') {
                card.style.display = '';
                card.style.animation = 'fadeUp 0.35s ease both';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ===== CONTACT FORM =====
function handleFormSubmit(e) {
    e.preventDefault();
    const status = document.getElementById('form-status');
    const btn = e.target.querySelector('.form-submit');

    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
        status.textContent = '✓ Message sent! I\'ll be in touch soon.';
        btn.textContent = 'Sent!';
        e.target.reset();
        setTimeout(() => {
            btn.textContent = 'Send Message →';
            btn.disabled = false;
        }, 3000);
    }, 1000);
}

// ===== SCROLL FADE-IN OBSERVER =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.proj-card, .resume-item, .about-body').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});