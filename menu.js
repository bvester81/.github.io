// ==========================================
// 1. HEADER & MENU HTML
// ==========================================
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
            <li>
                <div class="menu-item" id="downloadsToggle">
                    Downloads <span class="arrow">▼</span>
                </div>
                <ul class="sub-menu" id="downloadsSub">
                    <li><a href="download_logo.html" class="nav-link">Logo konverter</a></li>
                    <li><a href="farver.html" class="nav-link">Farvepalette</a></li>
                </ul>
            </li>


            <li><a href="index.html#kontakt" class="menu-item nav-link">Kontakt</a></li>
        </ul>
    </nav>
    
    <div class="overlay" id="overlay"></div>
`;

// Indsætter automatisk HTML'en i toppen af siden
document.body.insertAdjacentHTML('afterbegin', headerHTML);

// ==========================================
// 2. MENU LOGIK (ÅBNE/LUKKE)
// ==========================================
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.nav-link');

// Funktion til selve side-menuen
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

// Dropdown for "Ekspertiser"
const expertiseToggle = document.getElementById('expertiseToggle');
const expertiseSub = document.getElementById('expertiseSub');

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

// Dropdown for "Downloads"
const downloadsToggle = document.getElementById('downloadsToggle');
const downloadsSub = document.getElementById('downloadsSub');

downloadsToggle.addEventListener('click', function() {
    this.classList.toggle('open');
    if (downloadsSub.style.maxHeight) {
        downloadsSub.style.maxHeight = null;
        this.querySelector('.arrow').style.transform = 'rotate(0deg)';
    } else {
        downloadsSub.style.maxHeight = downloadsSub.scrollHeight + "px";
        this.querySelector('.arrow').style.transform = 'rotate(180deg)';
        this.querySelector('.arrow').style.transition = '0.3s';
    }
});

// Skjul header ved scroll ned, vis ved scroll op
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

// ==========================================
// 3. GLOBAL FOOTER LOGIK
// ==========================================
const contactHTML = `
    <div class="contact-info">
        <strong>Telefon:</strong> <a href="tel:+4500000000">+45 00 00 00 00</a><br>
        <strong>Email:</strong> <a href="mailto:kontakt@truecontrol.dk">kontakt@truecontrol.dk</a><br>
        <strong>LinkedIn:</strong> <a href="#" target="_blank">Min LinkedIn Profil</a>
    </div>
`;

// Finder pladsholderen og indsætter info
const contactPlaceholder = document.getElementById('global-contact');
if (contactPlaceholder) {
    contactPlaceholder.innerHTML = contactHTML;
}
