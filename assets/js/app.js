//! === ADD HEADER STYLES ON SCROLL ===
const headerScroll = () => {
    const headerElement = document.querySelector('.header');
    this.scrollY >= 30 ? headerElement.classList.add('headActive') : headerElement.classList.remove('headActive');
}

// Tracker

const moveElements = (e) => {
    const shapes = document.querySelectorAll(".shape");
    const tracker = document.querySelector(".tracker");


    tracker.style.top = `${e.clientY}px`;
    tracker.style.left = `${e.clientX}px`;
    tracker.style.opacity = 1;


    shapes.forEach((shape) => {
        const shapeOffset = shape.getAttribute("dataoffset");

        let offsetX = (window.innerWidth - e.clientX) * shapeOffset;
        let offsetY = (window.innerHeight - e.clientY) * shapeOffset;

        shape.style.translate = `${offsetX}px ${offsetY}px`;
    });
};

document.addEventListener("mousemove", moveElements);

window.addEventListener('scroll', headerScroll);
//! === OPEN AND CLOSE THE MENU ON HAMBURGER ICON CLICK ===
const menuToggler = document.querySelector('#menu-toggler');
const navbarMenu = document.querySelector('.navbar__menu');

const toggleMenu = () => {
    navbarMenu.classList.toggle('navActive');
}
menuToggler.addEventListener('click', toggleMenu);
// --- CLOSE MENU WHEN NAV-LINKS ARE CLICKED ---
const linksToggleMenu = (e) => {
 if(e.target.classList.contains('navbar__list-link')) navbarMenu.classList.remove('navActive');
}

window.addEventListener('click', linksToggleMenu);
//! === SWIPER ===
const swiper = new Swiper('.myswiper', {
    effect: 'coverflow', 
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverFlowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    },
    pagination: {
        el: '.swiper-pagination'
    }
});
//! === SCROLL REVEAL ===

const sr = ScrollReveal({
    distance: '50px',
    duration: 1500,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' 
});

sr.reveal('.showcase__title, .showcase__image, .section-metadata, .swiper',
{
    origin: 'top',
    interval: 250
});

sr.reveal('.services__image-wrapper, .about__information, .post--left',
{
    origin: 'left',
});

sr.reveal('.services__list, .about__images, .post--right',
{
    origin: 'right',
});

sr.reveal('.footer__container', {
    origin: 'top'
});

// Dynamic Project Cards Display

const cards = [
    {
        link: 'https://www.behance.net/gallery/166251397/home',
        source: './assets/images/first.png'
    },
    {
        link: 'https://www.behance.net/gallery/173987441/Muscle',
        source: './assets/images/second.png'
    },
    {
        link: 'https://www.behance.net/gallery/166418749/Kasarani',
        source: './assets/images/third.png'
    },
    {
        link: 'https://www.behance.net/gallery/168644369/Go-Hard-or-Go-Home',
        source: './assets/images/fourth.png'
    },
    {
        link: 'https://www.behance.net/gallery/177705045/Me',
        source: './assets/images/fifth.png'
    },
    {
        link: 'https://www.behance.net/gallery/174025151/Samurai',
        source: './assets/images/sixth.png'
    },
    {
        link: 'https://www.behance.net/gallery/177643669/Ninja',
        source: './assets/images/seventh.PNG'
    },
    {
        link: 'https://www.behance.net/gallery/177644861/Golden-Child',
        source: './assets/images/eighth.PNG'
    },
    {
        link: 'https://www.behance.net/gallery/177353575/Dokkodo-Vol2',
        source: './assets/images/ninth.PNG'
    },
    {
        link: 'https://www.behance.net/gallery/177644591/Dark-Warrior',
        source: './assets/images/tenth.PNG'
    }
]

const projectSection = document.querySelector('#swiper');

let projects = '';

for(let i = 0; i < cards.length; i++){
    projects += `
    <div class="swiper-slide">
        <a href="${cards[i].link}" target="_blank">
            <img src="${cards[i].source}" alt="">
        </a> 
    </div>
    `;
}

projectSection.innerHTML += projects;
