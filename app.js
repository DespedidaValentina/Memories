/* ========================================
   PARA TINA - Interactive Photo Slideshow
   Optimized JavaScript
   ======================================== */

// ========================================
// CONFIGURATION - Photo and Sticker Lists
// ========================================

const photos = [
    "IMG-20240930-WA0068.jpg",
    "IMG-20241001-WA0003.jpg",
    "IMG-20241002-WA0008.jpg",
    "IMG-20241004-WA0024.jpg",
    "IMG-20241004-WA0025.jpg",
    "IMG-20241004-WA0038.jpg",
    "IMG-20241007-WA0001.jpg",
    "IMG-20241007-WA0002.jpg",
    "IMG-20241008-WA0004.jpg",
    "IMG-20241009-WA0013.jpg",
    "IMG-20241009-WA0019.jpg",
    "IMG-20241010-WA0035.jpg",
    "IMG-20241011-WA0006.jpg",
    "IMG-20241014-WA0016.jpg",
    "IMG-20241015-WA0002.jpg",
    "IMG-20241016-WA0003.jpg",
    "IMG-20241017-WA0001.jpg",
    "IMG-20241018-WA0006.jpg",
    "IMG-20241021-WA0003.jpg",
    "IMG-20241023-WA0005.jpg",
    "IMG-20241023-WA0006.jpg",
    "IMG-20241023-WA0007.jpg",
    "IMG-20241024-WA0003.jpg",
    "IMG-20241025-WA0001.jpg",
    "IMG-20241028-WA0008.jpg",
    "IMG-20241029-WA0036.jpg",
    "IMG-20241030-WA0002.jpg",
    "IMG-20241031-WA0002.jpg",
    "IMG-20241101-WA0000.jpg",
    "IMG-20241105-WA0002.jpg",
    "IMG-20241105-WA0003.jpg",
    "IMG-20241106-WA0000.jpg",
    "IMG-20241106-WA0009.jpg",
    "IMG-20241107-WA0018.jpg",
    "IMG-20241111-WA0014.jpg",
    "IMG-20241113-WA0000.jpg",
    "IMG-20241113-WA0003.jpg",
    "IMG-20241114-WA0002.jpg",
    "IMG-20241118-WA0011.jpg",
    "IMG-20241119-WA0001.jpg",
    "IMG-20241120-WA0011.jpg",
    "IMG-20241121-WA0002.jpg",
    "IMG-20241121-WA0003.jpg",
    "IMG-20241122-WA0005.jpg",
    "IMG-20241123-WA0009.jpg",
    "IMG-20241125-WA0002.jpg",
    "IMG-20241125-WA0003.jpg",
    "IMG-20241127-WA0000.jpg",
    "IMG-20241128-WA0000.jpg",
    "IMG-20241129-WA0010.jpg",
    "IMG-20241129-WA0011.jpg",
    "IMG-20241202-WA0001.jpg",
    "IMG-20241204-WA0001.jpg",
    "IMG-20241204-WA0003.jpg",
    "IMG-20241206-WA0010.jpg",
    "IMG-20241206-WA0011.jpg",
    "IMG-20241206-WA0012.jpg",
    "IMG-20241206-WA0013.jpg",
    "IMG-20241206-WA0014.jpg",
    "IMG-20241208-WA0020.jpg",
    "IMG-20241210-WA0010.jpg",
    "IMG-20241210-WA0012.jpg",
    "IMG-20250113-WA0002.jpg",
    "IMG-20250113-WA0003.jpg",
    "IMG-20250116-WA0001.jpg",
    "IMG-20250121-WA0004.jpg",
    "IMG-20250121-WA0005.jpg",
    "IMG-20250121-WA0006.jpg",
    "IMG-20250123-WA0000.jpg",
    "IMG-20250124-WA0003.jpg",
    "IMG-20250128-WA0003.jpg",
    "IMG-20250129-WA0003.jpg",
    "IMG-20250130-WA0004.jpg",
    "IMG-20250131-WA0009.jpg",
    "IMG-20250205-WA0003.jpg",
    "IMG-20250205-WA0012.jpg",
    "IMG-20250206-WA0003.jpg",
    "IMG-20250207-WA0000.jpg",
    "IMG-20250211-WA0019.jpg",
    "IMG-20250211-WA0020.jpg",
    "IMG-20250211-WA0021.jpg",
    "IMG-20250212-WA0011.jpg",
    "IMG-20250213-WA0008.jpg",
    "IMG-20250215-WA0001.jpg",
    "IMG-20250218-WA0000.jpg",
    "IMG-20250219-WA0030.jpg",
    "IMG-20250219-WA0031.jpg",
    "IMG-20250225-WA0000.jpg",
    "IMG-20250225-WA0001.jpg",
    "IMG-20250226-WA0013.jpg",
    "IMG-20250227-WA0005.jpg",
    "IMG-20250306-WA0000.jpg",
    "IMG-20250307-WA0000.jpg",
    "IMG-20250308-WA0002.jpg",
    "IMG-20250310-WA0003.jpg",
    "IMG-20250311-WA0004.jpg",
    "IMG-20250312-WA0000.jpg",
    "IMG-20250312-WA0001.jpg",
    "IMG-20250313-WA0017.jpg",
    "IMG-20250313-WA0018.jpg",
    "IMG-20250313-WA0019.jpg",
    "IMG-20250313-WA0020.jpg",
    "IMG-20250313-WA0021.jpg",
    "IMG-20250314-WA0011.jpg",
    "IMG-20250319-WA0002.jpg",
    "IMG-20250319-WA0003.jpg",
    "IMG-20250319-WA0004.jpg",
    "IMG-20250324-WA0006.jpg",
    "IMG-20250324-WA0007.jpg",
    "IMG-20250327-WA0005.jpg",
    "IMG-20250327-WA0006.jpg",
    "IMG-20250327-WA0007.jpg",
    "IMG-20250402-WA0007.jpg",
    "IMG-20250402-WA0008.jpg",
    "IMG-20250402-WA0009.jpg",
    "IMG-20250402-WA0010.jpg",
    "IMG-20250408-WA0025.jpg",
    "IMG-20250408-WA0026.jpg",
    "IMG-20250430-WA0006.jpg",
    "IMG-20250430-WA0007.jpg",
    "IMG-20250430-WA0008.jpg",
    "IMG-20250430-WA0009.jpg",
    "IMG-20250506-WA0001.jpg",
    "IMG-20250519-WA0016.jpg",
    "IMG-20250519-WA0017.jpg",
    "IMG-20250520-WA0001.jpg",
    "IMG-20250520-WA0002.jpg",
    "IMG-20250521-WA0031.jpg",
    "IMG-20250521-WA0032.jpg",
    "IMG-20250604-WA0002.jpg",
    "IMG-20250604-WA0005.jpg",
    "IMG-20250604-WA0006.jpg",
    "IMG-20250613-WA0023.jpg",
    "IMG-20250613-WA0024.jpg",
    "IMG-20250613-WA0025.jpg",
    "IMG-20250613-WA0026.jpg",
    "IMG-20250613-WA0135.jpg",
    "IMG-20250613-WA0137.jpg",
    "IMG-20250613-WA0139.jpg",
    "IMG-20251221-WA0003.jpg",
    "IMG-20251221-WA0004.jpg"
];

const stickers = [
    "STK-20231225-WA0331.webp",
    "STK-20231225-WA0606.webp",
    "STK-20231225-WA0615.webp",
    "STK-20231225-WA0711.webp",
    "STK-20231228-WA0050.webp",
    "STK-20240505-WA0060.webp",
    "STK-20240528-WA0042.webp",
    "STK-20240614-WA0005.webp",
    "STK-20240702-WA0142.webp",
    "STK-20240705-WA0220.webp",
    "STK-20240713-WA0041.webp",
    "STK-20240729-WA0002.webp",
    "STK-20240812-WA0053.webp",
    "STK-20240823-WA0000.webp",
    "STK-20240825-WA0004.webp",
    "STK-20240905-WA0011.webp",
    "STK-20240928-WA0035.webp",
    "STK-20241001-WA0095.webp",
    "STK-20241001-WA0168.webp",
    "STK-20241001-WA0189.webp",
    "STK-20241004-WA0000.webp",
    "STK-20241207-WA0005.webp",
    "STK-20241215-WA0029.webp",
    "STK-20241219-WA0000.webp",
    "STK-20241227-WA0141.webp",
    "STK-20241229-WA0024.webp",
    "STK-20250105-WA0011.webp",
    "STK-20250113-WA0007.webp",
    "STK-20250113-WA0048.webp",
    "STK-20250117-WA0005.webp",
    "STK-20250117-WA0011.webp",
    "STK-20250122-WA0024.webp",
    "STK-20250129-WA0002.webp",
    "STK-20250210-WA0002.webp",
    "STK-20250309-WA0038.webp",
    "STK-20250310-WA0006.webp"
];

const messages = [
    "Cada momento contigo es un tesoro ✨",
    "Tu sonrisa ilumina nuestros días",
    "Gracias por ser parte de nuestras vidas 💕",
    "Momentos que el corazón nunca olvida",
    "La felicidad tiene tu nombre",
    "Recuerdos que brillan como estrellas",
    "Juntos, cada día es una aventura",
    "Tu alegría es contagiosa",
    "Eres una luz en nuestras vidas",
    "Momentos mágicos, personas especiales",
    "La amistad se mide en sonrisas compartidas",
    "Cada foto cuenta una historia hermosa",
    "Eres increíble, no lo olvides nunca",
    "Los mejores momentos son los inesperados",
    "Tu presencia hace todo mejor",
    "Risas que quedan grabadas en el alma",
    "Eres más especial de lo que imaginas",
    "Momentos simples, felicidad infinita",
    "Gracias por existir en nuestra vida",
    "Cada segundo contigo vale oro",
    "Eres una bendición caminando",
    "Tu energía positiva nos inspira",
    "Recuerdos que calientan el corazón",
    "La vida es más bonita contigo",
    "Eres pura magia",
    "Momentos que se convierten en eternidad",
    "Tu risa es la mejor melodía",
    "Eres única e irrepetible",
    "Gracias por los momentos compartidos",
    "Eres un regalo del cielo",
    "Cada día contigo es especial",
    "Tu amistad es un tesoro invaluable",
    "Momentos que definen la felicidad",
    "Eres la definición de increíble",
    "Gracias por ser tú",
    "Contigo, todo es más divertido",
    "Eres una estrella brillante",
    "Momentos perfectos con personas perfectas",
    "Tu presencia alegra cualquier lugar",
    "Eres simplemente maravillosa",
    "Recuerdos que atesoramos por siempre",
    "Cada momento juntos es pura alegría",
    "Eres un sol que ilumina todo",
    "Gracias por las risas compartidas",
    "Eres extraordinaria",
    "Momentos que llenan el corazón",
    "Tu sonrisa vale más que mil palabras",
    "Eres una persona increíble",
    "Cada foto es un pedacito de felicidad",
    "Eres luz, alegría y amor",
    "Momentos que brillan en la memoria",
    "Gracias por tantas alegrías",
    "Eres un ángel terrenal",
    "Contigo los días son mejores",
    "Tu esencia es única",
    "Momentos que el tiempo no puede borrar",
    "Eres pura bondad",
    "Gracias por existir",
    "Eres una joya rara",
    "Momentos de pura magia",
    "Tu corazón es enorme",
    "Eres inspiración pura",
    "Recuerdos que nos hacen sonreír",
    "Eres la mejor compañía",
    "Momentos llenos de amor",
    "Tu alegría es un regalo",
    "Eres simplemente lo máximo",
    "Gracias por ser tan especial",
    "Momentos inolvidables",
    "Eres hermosa por dentro y por fuera",
    "Tu amistad es invaluable",
    "Momentos que valen la pena recordar",
    "Eres un tesoro",
    "Gracias por las memorias",
    "Eres una fuente de alegría",
    "Momentos perfectamente imperfectos",
    "Tu presencia es un regalo",
    "Eres luz en días oscuros",
    "Momentos que llenan el alma",
    "Gracias por tu cariño",
    "Eres increíblemente especial",
    "Momentos dorados",
    "Tu sonrisa es medicina para el alma",
    "Eres una bendición",
    "Momentos que hacen latir el corazón",
    "Gracias por ser genuina",
    "Eres un arcoíris después de la lluvia",
    "Momentos que brillan",
    "Tu energía es contagiosa",
    "Eres una persona excepcional",
    "Momentos de felicidad pura",
    "Gracias por tu linda amistad",
    "Eres maravillosa en todos los sentidos",
    "Momentos que guardamos en el corazón",
    "Tu risa es lo mejor",
    "Eres una estrella fugaz",
    "Momentos compartidos, lazos fortalecidos",
    "Gracias por todo",
    "Eres un ejemplo a seguir",
    "Momentos que definen nuestra amistad",
    "Tu bondad no tiene límites",
    "Eres una persona admirable",
    "Momentos llenos de risas",
    "Gracias por tu apoyo incondicional",
    "Eres simplemente genial",
    "Momentos que nos unen",
    "Tu corazón es de oro",
    "Eres una amiga increíble",
    "Momentos preciosos",
    "Gracias por las aventuras",
    "Eres una persona fantástica",
    "Momentos que atesoramos",
    "Tu amistad es un regalo del cielo",
    "Eres única",
    "Momentos de alegría infinita",
    "Gracias por ser nuestra amiga",
    "Eres una luz resplandeciente",
    "Momentos que llenan de amor",
    "Tu presencia hace la diferencia",
    "Eres extraordinariamente especial",
    "Momentos que nos inspiran",
    "Gracias por compartir tu vida con nosotros",
    "Eres una persona maravillosa",
    "Momentos de pura felicidad",
    "Tu sonrisa ilumina el mundo",
    "Eres el mejor regalo",
    "Momentos que valen oro",
    "Gracias por ser tan linda",
    "Eres simplemente perfecta siendo tú",
    "Momentos mágicos contigo",
    "Tu amistad es eterna",
    "Eres una joya invaluable",
    "Momentos que nos hacen felices",
    "Gracias por existir en nuestras vidas",
    "Eres un sol radiante",
    "Momentos que brillan para siempre",
    "Tu alegría es un regalo diario",
    "Eres increíblemente maravillosa",
    "Momentos que el corazón guarda",
    "Gracias, simplemente gracias",
    "Eres todo y más",
    "Momentos que definen la amistad verdadera"
];

// ========================================
// DOM ELEMENTS
// ========================================
const landing = document.getElementById('landing');
const startBtn = document.getElementById('start-btn');
const slideshow = document.getElementById('slideshow');
const slidesContainer = document.getElementById('slides-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtnArrow = document.getElementById('prev-btn-arrow');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const backToStartBtn = document.getElementById('back-to-start');
const endScreen = document.getElementById('end-screen');
const restartBtn = document.getElementById('restart-btn');
const floatingContainer = document.getElementById('floating-container');

// ========================================
// STATE
// ========================================
let currentSlide = 0;
let shuffledPhotos = [];
let shuffledMessages = [];
let totalSlides = 0;
let isTransitioning = false;
let slidesGenerated = false;

// ========================================
// UTILITY FUNCTIONS
// ========================================
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

// ========================================
// FLOATING IMAGES - Optimized, Full Screen
// ========================================
function createFloatingImages() {
    // Use fewer images for better performance
    const floatingPhotos = shuffleArray(photos).slice(0, 8);
    const floatingStickers = shuffleArray(stickers).slice(0, 6);

    const allFloating = [
        ...floatingPhotos.map(p => ({ src: `Fotos/${p}`, type: 'photo' })),
        ...floatingStickers.map(s => ({ src: `stickers/${s}`, type: 'sticker' }))
    ];

    // Distribute images across a grid for full screen coverage
    const cols = 4;
    const rows = 4;

    allFloating.forEach((img, index) => {
        const floatingImg = document.createElement('img');
        floatingImg.src = img.src;
        floatingImg.className = `floating-image ${img.type === 'sticker' ? 'sticker' : ''}`;
        floatingImg.alt = '';
        floatingImg.loading = 'lazy';
        floatingImg.decoding = 'async';

        // Calculate grid position for full screen distribution
        const col = index % cols;
        const row = Math.floor(index / cols) % rows;

        const baseX = (col / cols) * 100;
        const baseY = (row / rows) * 100;

        // Add some randomness to position within grid cell
        const x = baseX + randomInRange(-5, 15);
        const y = baseY + randomInRange(-5, 15);

        const size = img.type === 'sticker' ? randomInRange(50, 80) : randomInRange(70, 110);
        const rotation = randomInRange(-15, 15);
        const duration = randomInRange(15, 25);
        const delay = randomInRange(0, 5);
        const moveX = randomInRange(-30, 30);
        const moveY = randomInRange(-30, 30);

        floatingImg.style.cssText = `
            width: ${size}px;
            height: auto;
            left: ${x}%;
            top: ${y}%;
            --rotation: ${rotation}deg;
            --duration: ${duration}s;
            --delay: ${delay}s;
            --move-x: ${moveX}px;
            --move-y: ${moveY}px;
        `;

        floatingContainer.appendChild(floatingImg);
    });
}

// ========================================
// SLIDE GENERATION - Lazy Loading
// ========================================
function generateSlides() {
    if (slidesGenerated) return;

    // Shuffle photos and messages
    shuffledPhotos = shuffleArray(photos);
    shuffledMessages = shuffleArray(messages);

    // Extend messages if needed
    while (shuffledMessages.length < shuffledPhotos.length) {
        shuffledMessages = [...shuffledMessages, ...shuffleArray(messages)];
    }

    totalSlides = shuffledPhotos.length;

    // Only create first few slides initially for performance
    const initialSlides = Math.min(5, totalSlides);

    for (let i = 0; i < initialSlides; i++) {
        createSlide(i);
    }

    slidesGenerated = true;
}

function createSlide(index) {
    if (document.querySelector(`.slide[data-index="${index}"]`)) return;

    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.dataset.index = index;

    slide.innerHTML = `
        <div class="slide-image-container">
            <img src="Fotos/${shuffledPhotos[index]}" alt="Foto ${index + 1}" class="slide-image" loading="lazy" decoding="async">
        </div>
        <p class="slide-message">${shuffledMessages[index]}</p>
    `;

    slidesContainer.appendChild(slide);
}

// Preload next slides for smooth navigation
function preloadNearbySlides(currentIndex) {
    const range = 2;
    for (let i = currentIndex - range; i <= currentIndex + range; i++) {
        if (i >= 0 && i < totalSlides) {
            createSlide(i);
        }
    }
}

// ========================================
// NAVIGATION
// ========================================
function goToSlide(index) {
    if (isTransitioning) return;
    if (index < 0 || index >= totalSlides) return;

    isTransitioning = true;

    // Ensure slide exists
    createSlide(index);
    preloadNearbySlides(index);

    const slides = document.querySelectorAll('.slide');
    const prevSlideEl = document.querySelector('.slide.active');
    const nextSlideEl = document.querySelector(`.slide[data-index="${index}"]`);

    if (prevSlideEl) {
        if (index > currentSlide) {
            prevSlideEl.classList.add('prev');
        }
        prevSlideEl.classList.remove('active');
    }

    currentSlide = index;
    nextSlideEl.classList.remove('prev');
    nextSlideEl.classList.add('active');

    updateProgress();
    updateNavButtons();

    setTimeout(() => {
        isTransitioning = false;
        slides.forEach(s => {
            if (!s.classList.contains('active')) {
                s.classList.remove('prev');
            }
        });
    }, 400);
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        goToSlide(currentSlide + 1);
    } else {
        showEndScreen();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
    }
}

function updateProgress() {
    const progress = ((currentSlide + 1) / totalSlides) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}%`;
}

function updateNavButtons() {
    prevBtn.disabled = currentSlide === 0;

    if (currentSlide === totalSlides - 1) {
        nextBtn.innerHTML = `
            <span>Finalizar</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 13l4 4L19 7"/>
            </svg>
        `;
    } else {
        nextBtn.innerHTML = `
            <span>Siguiente</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
        `;
    }
}

// ========================================
// SCREEN TRANSITIONS
// ========================================
function startSlideshow() {
    generateSlides();
    landing.classList.add('hidden');
    floatingContainer.style.opacity = '0';

    setTimeout(() => {
        floatingContainer.style.display = 'none';
        slideshow.classList.remove('hidden');
        goToSlide(0);
    }, 600);
}

function showEndScreen() {
    slideshow.classList.add('hidden');

    setTimeout(() => {
        endScreen.classList.remove('hidden');
    }, 300);
}

function restartSlideshow() {
    endScreen.classList.add('hidden');

    // Reshuffle for new experience
    shuffledPhotos = shuffleArray(photos);
    shuffledMessages = shuffleArray(messages);
    while (shuffledMessages.length < shuffledPhotos.length) {
        shuffledMessages = [...shuffledMessages, ...shuffleArray(messages)];
    }

    // Clear and regenerate slides
    slidesContainer.innerHTML = '';
    slidesGenerated = false;
    generateSlides();
    currentSlide = 0;

    setTimeout(() => {
        slideshow.classList.remove('hidden');
        goToSlide(0);
    }, 300);
}

function backToLanding() {
    slideshow.classList.add('hidden');

    setTimeout(() => {
        landing.classList.remove('hidden');
        floatingContainer.style.display = 'block';

        requestAnimationFrame(() => {
            floatingContainer.style.opacity = '1';
        });

        currentSlide = 0;
        document.querySelectorAll('.slide').forEach(slide => {
            slide.classList.remove('active', 'prev');
        });
    }, 300);
}

// ========================================
// KEYBOARD NAVIGATION
// ========================================
function handleKeydown(e) {
    if (slideshow.classList.contains('hidden')) return;

    switch (e.key) {
        case 'ArrowRight':
        case ' ':
            e.preventDefault();
            nextSlide();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            prevSlide();
            break;
        case 'Escape':
            backToLanding();
            break;
    }
}

// ========================================
// TOUCH/SWIPE SUPPORT
// ========================================
let touchStartX = 0;

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
}

// ========================================
// EVENT LISTENERS
// ========================================
function initEventListeners() {
    startBtn.addEventListener('click', startSlideshow);
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    prevBtnArrow.addEventListener('click', nextSlide);
    backToStartBtn.addEventListener('click', backToLanding);
    restartBtn.addEventListener('click', restartSlideshow);

    document.addEventListener('keydown', handleKeydown);

    slidesContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
    slidesContainer.addEventListener('touchend', handleTouchEnd, { passive: true });
}

// ========================================
// INITIALIZATION
// ========================================
function init() {
    floatingContainer.style.transition = 'opacity 0.6s ease';
    createFloatingImages();
    initEventListeners();

    console.log(`📸 ${photos.length} photos ready`);
}

document.addEventListener('DOMContentLoaded', init);
