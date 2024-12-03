const colorSection = document.getElementById('colour__care');
const itemsColor = document.querySelectorAll('.color__item')
const cat = document.querySelector('.color__categories')

const intro = document.querySelector('.colour__care-content')

const controller = new ScrollMagic.Controller();


if (window.innerWidth >= 1000) {

    let parallaxTl = new TimelineMax();
    parallaxTl
        .to(itemsColor, { x: "-1000", duration: 4, ease: Linear.easeNone });
    const scene = new ScrollMagic.Scene({
        duration: 1500,
        triggerElement: colorSection,
        triggerHook: 0
    })
        // .addIndicators()
        .setPin(colorSection)
        .setTween(parallaxTl)
        .addTo(controller)
}




itemsColor.forEach(item => {


    const hover = gsap.to(item, {
        y: 10,
        duration: .001,
        paused: true,
        ease: "power1.inOut"
    })

    item.addEventListener('mouseenter', () => {
        hover.play()
    })

    item.addEventListener('mouseleave', () => {
        hover.reverse()
    })
})





const sceneOne = new ScrollMagic.Scene({
    triggerElement: '#about__content',
    triggerHook: 0.6,
    reverse: false
})
    .setClassToggle('#about__content', 'gsap_x')
    .addTo(controller)


const sceneTwo = new ScrollMagic.Scene({
    triggerElement: '#colour__care',
    triggerHook: 0.6,
    reverse: false
})
    .setClassToggle('#colour__care', 'gsap_x')
    .addTo(controller)



const sceneThree = new ScrollMagic.Scene({
    triggerElement: '.footer__one',
    triggerHook: 0.6,
    reverse: false
})
    .setClassToggle('.footer__one-content', 'gsap_y')
    .addTo(controller)


const sceneFoor = new ScrollMagic.Scene({
    triggerElement: '.footer__two',
    triggerHook: 1,
    reverse: false
})
    .setClassToggle('.footer__two', 'gsap_y')
    .addTo(controller)


const sceneFive = new ScrollMagic.Scene({
    triggerElement: '.lips__content-two',
    triggerHook: 1,
    reverse: false
})
    .setTween(TweenMax.from('.lips__content-two p', { x: 2000, opacity: 0, duration: 1, ease: Back.easeOut }))
    .addTo(controller)


const sceneSix = new ScrollMagic.Scene({
    triggerElement: '.lips__content-two',
    triggerHook: 1,
    reverse: false
})
    .setTween(TweenMax.from('.lips__categories', { y: 300, opacity: 0, duration: 2 }))
    .addTo(controller)


const timeline = gsap.timeline({ duration: .5 })

timeline
    .fromTo('.promo__dektop', { opacity: 0, y: -100 }, { opacity: 1, y: 0 })
    .from(['.lips__info h1', '.lips__info p'], { opacity: 0, y: -70, stagger: .5 })
    .from('.lips__img', { y: -100, opacity: 0 })






