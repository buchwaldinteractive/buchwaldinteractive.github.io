/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME SWIPER ===============*/
/*
let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
})
*/

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== NEW SWIPER ===============*/
/*
let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,
});
*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                      document.querySelectorAll('.nav__menu a[href*="' + sectionId + '"], .nav__menu div[data-href*="' + sectionId + '"]').forEach(function(el) {
              el.classList.add('active-link');
            });
        }else{
            document.querySelectorAll('.nav__menu a[href*="' + sectionId + '"], .nav__menu div[data-href*="' + sectionId + '"]').forEach(function(el) {
              el.classList.remove('active-link');
            });
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollAnim(){
    const scrollAsset = document.getElementById('scroll-up');
    scrollAsset.style.transform = 'rotate(' + window.scrollY / 2 + 'deg)';
}
window.addEventListener('scroll', scrollAnim)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`)
sr.reveal(`.category__data, .trick__content, .footer__content`,{interval: 100})
sr.reveal(`.about__data`,{origin: 'left'})
sr.reveal(`.about__img`,{origin: 'right'})
sr.reveal(`.faq__data`,{origin: 'left'})

// Youtube video abckground teaser
let player;
let hasChangedOpacity = false;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('teaser-video', {
    height: '390',
    width: '640',
    videoId: 'qP-reIh7ysU',

    playerVars: {
      playlist: 'qP-reIh7ysU',
      mute: 1,
      autoplay: 1,
      loop: 1,
      controls: 0,
      showinfo: 0,
      autohide: 0,
      enablejsapi: 1,
      modestbranding: 1,
      playsinline: 1,
      vq: 'hd1080'
    },
    allowfullscreen: 0,

    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerStateChange(el) {
  if (el.data === 1 && hasChangedOpacity === false) {
    hasChangedOpacity = true;

    setTimeout(function() {
      document.getElementById('teaser-video').style.opacity = "1.0";
      document.getElementById('teaser-video').parentElement.classList.add('teaser-loaded');
    }, 500);
  }
}