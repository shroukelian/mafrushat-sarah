document.addEventListener('DOMContentLoaded', () => {
    
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.background = '#fff';
            header.classList.add('header-scrolled');
        } else {
            header.style.padding = '15px 0';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.classList.remove('header-scrolled');
        }
    });

    const menuBtn = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('close-menu');
    const navLinks = document.getElementById('nav-links');
    
    let overlay = document.querySelector('.menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        });
    }

    const hideMenu = () => {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto'; 
    };

    if (closeBtn) closeBtn.addEventListener('click', hideMenu);
    if (overlay) overlay.addEventListener('click', hideMenu);

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', hideMenu);
    });

    window.moveSlider = function(value) {
        const afterImg = document.querySelector('.after-img');
        const sliderLine = document.querySelector('.slider-line');
        const sliderBtn = document.querySelector('.slider-button');
        if(afterImg) afterImg.style.width = value + "%";
        if(sliderLine) sliderLine.style.left = value + "%";
        if(sliderBtn) sliderBtn.style.left = value + "%";
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.category-card, .g-card, .reveal, .reveal-section, .step-item, .testi-card').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        observer.observe(el);
    });

    document.querySelectorAll('.faq-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            item.classList.toggle('active');
        });
    });
});