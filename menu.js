// 1. Vi gemmer al HTML til header, sidemenu og overlay i en variabel
const headerHTML = `
    <header>
        <a href="index.html" style="text-decoration: none; display: flex; align-items: center;">
            <img src="logo.svg" alt="True Control Logo" style="height: 60px;" onerror="this.style.display='none'">
            <span class="header-slogan">True Control: Smart systems. Simple operations.</span>
        </a>
        
        <div class="header-right">
            <div class="lang-switch">
                <a href="index.html" class="lang-dk">DK</a>
                <span class="lang-divider">|</span>
                <a href="index_en.html" class="lang-en">EN</a>
            </div>
            
            <button class="hamburger" id="hamburgerBtn" aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>

    <nav class="side-menu" id="sideMenu">
        <ul class="menu-list">
            <li><a href="index.html" class="menu-item nav-link">Gå til Forsiden</a></li>
            <li>
                <div class="menu-item" id="expertiseToggle">
                    Ekspertiser <span class="arrow">▼</span>
                </div>
                <ul class="sub-menu" id="expertiseSub">
                    <li><a href="lokal-ai.html" class="nav-link">AI review af håndskrift</a></li>
                </ul>
            </li>
            <li><a href="index.html#kontakt" class="menu-item nav-link">Kontakt</a></li>
        </ul>
    </nav>
    
    <div class="overlay" id="overlay"></div>
`;

// 2. Vi indsætter automatisk HTML'en helt i toppen af siden (indeni <body>)
document.body.insertAdjacentHTML('afterbegin', headerHTML);

// 3. Nu hvor HTML'en er på siden, aktiverer vi menuens funktionalitet (dit tidligere script)
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');
const expertiseToggle = document.getElementById('expertiseToggle');
const expertiseSub = document.getElementById('expertiseSub');
const navLinks = document.querySelectorAll('.nav-link');

function toggleMenu() {
    hamburgerBtn.classList.toggle('active');
    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
}

hamburgerBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

expertiseToggle.addEventListener('click', function() {
    this.classList.toggle('open');
    if (expertiseSub.style.maxHeight) {
        expertiseSub.style.maxHeight = null;
        this.querySelector('.arrow').style.transform = 'rotate(0deg)';
    } else {
        expertiseSub.style.maxHeight = expertiseSub.scrollHeight + "px";
        this.querySelector('.arrow').style.transform = 'rotate(180deg)';
        this.querySelector('.arrow').style.transition = '0.3s';
    }
});

// Scroll-effekt til at skjule headeren
let lastScrollTop = 0;
const mainHeader = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        mainHeader.classList.add('hidden');
    } else {
        mainHeader.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});
