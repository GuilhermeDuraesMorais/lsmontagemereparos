

// Mobile Hamburger Menu Logic
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Formulário de Contato via WhatsApp
const formContato = document.getElementById('form-contato');
if (formContato) {
    formContato.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('form-nome').value;
        const telefone = document.getElementById('form-telefone').value;
        const mensagem = document.getElementById('form-mensagem').value;
        
        const texto = `Olá Luciano! Me chamo ${nome}.%0A%0A${mensagem}%0A%0AMeu telefone: ${telefone}`;
        
        const whatsappUrl = `https://wa.me/5517992320436?text=${texto}`;
        
        window.open(whatsappUrl, '_blank');
    });
}

// Parallax Zoom and Blur on Scroll for Hero Background
const bgContainer = document.querySelector('.fixed-bg-container');
if (bgContainer) {
    window.addEventListener('scroll', () => {
        // Use requestAnimationFrame for smoother performance
        window.requestAnimationFrame(() => {
            const scrolled = window.scrollY;
            // Subtle zoom effect (e.g. max scale 1.2 or 1.15)
            // It scales up as you scroll down
            const scale = 1 + (scrolled * 0.0003);
            
            // Gradual blur effect
            const blurValue = Math.min(scrolled * 0.015, 12); // Caps at 12px blur
            
            bgContainer.style.transform = `scale(${scale})`;
            bgContainer.style.filter = `blur(${blurValue}px)`;
        });
    });
}

// Scroll Animations using Intersection Observer
const scrollElements = document.querySelectorAll('.animate-on-scroll');
if (scrollElements.length > 0) {
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100));
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 95)) {
                displayScrollElement(el);
            }
        })
    }
    
    // Check elements on load
    handleScrollAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', () => {
        window.requestAnimationFrame(handleScrollAnimation);
    });
}

// Highlight current day in Business Hours
const hoursList = document.getElementById('hours-list');
if (hoursList) {
    const today = new Date().getDay(); // 0 is Sunday, 1 is Monday, etc.
    const items = hoursList.querySelectorAll('li');
    items.forEach(item => {
        if (parseInt(item.getAttribute('data-day')) === today) {
            item.classList.add('today');
            // Change text to add "(Hoje)"
            const dayNameSpan = item.querySelector('span:first-child');
            dayNameSpan.textContent = "Hoje (" + dayNameSpan.textContent + ")";
        }
    });
}
