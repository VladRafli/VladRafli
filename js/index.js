/* Content */
const homeContent = document.querySelector('.home-content');
const aboutMeContent = document.querySelector('.aboutme-content');
const skillsContent = document.querySelector('.skills-content');
const myWorkContent = document.querySelector('.mywork-content');
const contactMeContent = document.querySelector('.contactme-content');
/* Slider */
const sliderHome = document.querySelector('.slider-home');
const sliderAboutMe = document.querySelector('.slider-aboutme');
const sliderSkills = document.querySelector('.slider-skills');
const sliderMyWork = document.querySelector('.slider-mywork');
const sliderContactMe = document.querySelector('.slider-contactme');
/* Carousel Slider */
const carouselSlide = document.querySelector('.project-list');
const carouselContent = document.querySelectorAll('.project-list .project');
// Carousel Button
const leftBtn = document.querySelector('#left-button');
const rightBtn = document.querySelector('#right-button');
// Counter
var counter = 1;
var size = 100;

leftBtn.addEventListener('click', () => {
    if (counter === 4) return;
    carouselContent[counter - 1].removeAttribute('style');
    carouselContent[counter].removeAttribute('style');
    carouselContent[counter - 1].setAttribute('style', `transform: translateX(-${size * (counter)}%) !important;`);
    carouselContent[counter].setAttribute('style', `transform: translateX(-${size * (counter)}%) !important;`);
    if(counter <= 3)
        counter++;
    console.log(`Counter: ${counter}`);
});

rightBtn.addEventListener('click', () => {
    if (counter === 1) return;
    carouselContent[counter - 2].removeAttribute('style');
    carouselContent[counter - 1].removeAttribute('style');
    carouselContent[counter - 2].setAttribute('style', `transform: translateX(-${size * (counter - 2)}%) !important;`);
    carouselContent[counter - 1].setAttribute('style', `transform: translateX(-${size * (counter - 2)}%) !important;`);
    if(counter >= 1)
    counter--;
    console.log(`Counter: ${counter}`);
});

/* Console Notification */
const logCSS = 'font-size: 20px;';
console.log('%cThis is debugger for akudeveloper website...\nPlease remain calm... and do not freak out!\nRaf-Fly', logCSS);

/* Functions */

function metaSet(content) {
    document.title = content;
    document.querySelector('meta[name="title"]').setAttribute('content', content);
    document.querySelector('meta[property="og:title"]').setAttribute('content', content);
    document.querySelector('meta[property="twitter:title"]').setAttribute('content', content);
}

function removeActiveClass(active, activeSectionFlex, activeSectionGrid) {
    active.classList.remove('active');
    if (activeSectionFlex !== null)
        activeSectionFlex.classList.remove('active-section-flex');
    if (activeSectionGrid !== null)
        activeSectionGrid.classList.remove('active-section-grid');
}

function addActiveClass(sliderClass, contentClass, pageDisplay) {
    sliderClass.classList.add('active');
    if (pageDisplay === 'flex')
        contentClass.classList.add('active-section-flex');
    if (pageDisplay === 'grid')
        contentClass.classList.add('active-section-grid');
}

/* Event Listener */
sliderHome.addEventListener('click', () => {
    /* Active Class Selector */
    const active = document.querySelector('.active');
    const activeSectionFlex = document.querySelector('.active-section-flex');
    const activeSectionGrid = document.querySelector('.active-section-grid');
    if (sliderHome.querySelector('.active') === null) {
        metaSet('Home | Akudeveloper');
        removeActiveClass(active, activeSectionFlex, activeSectionGrid);
        addActiveClass(sliderHome, homeContent, 'flex');
    }
});
sliderAboutMe.addEventListener('click', () => {
    /* Active Class Selector */
    const active = document.querySelector('.active');
    const activeSectionFlex = document.querySelector('.active-section-flex');
    const activeSectionGrid = document.querySelector('.active-section-grid');
    if (sliderHome.querySelector('.active') === null) {
        metaSet('About Me | Akudeveloper');
        removeActiveClass(active, activeSectionFlex, activeSectionGrid);
        addActiveClass(sliderAboutMe, aboutMeContent, 'flex');
    }
});
sliderSkills.addEventListener('click', () => {
    /* Active Class Selector */
    const active = document.querySelector('.active');
    const activeSectionFlex = document.querySelector('.active-section-flex');
    const activeSectionGrid = document.querySelector('.active-section-grid');
    if (sliderHome.querySelector('.active') === null) {
        metaSet('Skills | Akudeveloper');
        removeActiveClass(active, activeSectionFlex, activeSectionGrid);
        addActiveClass(sliderSkills, skillsContent, 'grid');
    }
});
sliderMyWork.addEventListener('click', () => {
    /* Active Class Selector */
    const active = document.querySelector('.active');
    const activeSectionFlex = document.querySelector('.active-section-flex');
    const activeSectionGrid = document.querySelector('.active-section-grid');
    if (sliderHome.querySelector('.active') === null) {
        metaSet('My Work | Akudeveloper');
        removeActiveClass(active, activeSectionFlex, activeSectionGrid);
        addActiveClass(sliderMyWork, myWorkContent, 'flex');
    }
});
sliderContactMe.addEventListener('click', () => {
    /* Active Class Selector */
    const active = document.querySelector('.active');
    const activeSectionFlex = document.querySelector('.active-section-flex');
    const activeSectionGrid = document.querySelector('.active-section-grid');
    if (sliderHome.querySelector('.active') === null) {
        metaSet('Contact Me | Akudeveloper');
        removeActiveClass(active, activeSectionFlex, activeSectionGrid);
        addActiveClass(sliderContactMe, contactMeContent, 'flex');
    }
});