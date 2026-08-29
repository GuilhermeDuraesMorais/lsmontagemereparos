

// Lógica do Menu Hambúrguer para Mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Fechar menu mobile ao clicar em um link
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

// Efeito Parallax de Zoom e Desfoque na Rolagem para a Imagem de Fundo Principal
const bgContainer = document.querySelector('.fixed-bg-container');
if (bgContainer) {
    window.addEventListener('scroll', () => {
        // Usar requestAnimationFrame para desempenho mais suave
        window.requestAnimationFrame(() => {
            const scrolled = window.scrollY;
            // Efeito sutil de zoom (ex: escala máxima 1.2 ou 1.15)
            // Aumenta a escala conforme você rola para baixo
            const scale = 1 + (scrolled * 0.0003);
            
            // Efeito de desfoque gradual
            const blurValue = Math.min(scrolled * 0.015, 12); // Limite de 12px de desfoque
            
            bgContainer.style.transform = `scale(${scale})`;
            bgContainer.style.filter = `blur(${blurValue}px)`;
        });
    });
}

// Animações de Rolagem usando Intersection Observer
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
    
    // Verificar elementos no carregamento
    handleScrollAnimation();
    
    // Adicionar ouvinte de evento de rolagem
    window.addEventListener('scroll', () => {
        window.requestAnimationFrame(handleScrollAnimation);
    });
}

// Destacar dia atual no Horário de Funcionamento
const hoursList = document.getElementById('hours-list');
if (hoursList) {
    const today = new Date().getDay(); // 0 é Domingo, 1 é Segunda, etc.
    const items = hoursList.querySelectorAll('li');
    items.forEach(item => {
        if (parseInt(item.getAttribute('data-day')) === today) {
            item.classList.add('today');
            // Alterar texto para adicionar "(Hoje)"
            const dayNameSpan = item.querySelector('span:first-child');
            dayNameSpan.textContent = "Hoje (" + dayNameSpan.textContent + ")";
        }
    });
}
