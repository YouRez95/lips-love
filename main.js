const navbar = document.querySelector('.navbar__fixed ');
const menu = document.querySelector('.icone__menu');
const menuIcon = document.querySelector('.bx__menu');
const lineOne = document.querySelector('.line__one');
const lineThree = document.querySelector('.line__three');

const listItems = document.querySelectorAll('.list__lien ul li a');

const listCoor = document.querySelector('.list__coor');
const imgRotate = document.querySelector('.rotate__fixed img');

menu.addEventListener('click', () => {
    navbarProp()

})

navbar.addEventListener('click', (e) => {
    navbarProp()
    if (e.target.tagName === "SPAN") {
        navbar.classList.remove("active")
    }

})

function navbarProp() {
    navbar.classList.toggle('active');
    lineOne.classList.toggle('disabled');
    lineThree.classList.toggle('disabled');
    images[0].classList.toggle('active')

    listItems.forEach(item => {
        item.classList.toggle('lien__enabled')
    })

    listCoor.classList.toggle('coor__enabled')
    imgRotate.classList.toggle('enabled')

    if (navbar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    }
}



// ==========================DOMLOADED
const titleLips = document.querySelector('.lips__info h1');
const paraLips = document.querySelector('.lips__info p');

const lipsImg = document.querySelector('.lips__img');
const imgLips = document.querySelector('.lips__img img')
const cercle = document.querySelector('.lips__img .enable')
const paraTwoLips = document.querySelector('.lips__content-two p')
const categLips = document.querySelector('.lips__categories ')


const navbarTop = document.querySelector('.header .navbar')
window.addEventListener('DOMContentLoaded', () => {
    navbarTop.classList.add('onload');
    // for (let i = 0; i < myVar.length; i++) {
    //     myVar[i].classList.add('enabled')
    // }
    const lipsInfo = document.querySelector(".lips__info")
    lipsInfo.classList.add('line')
})


/*==============IMAGESNAVBAR===============*/
const list = document.querySelectorAll('.list__lien ul li a');

const images = document.querySelectorAll('.images__navbar img');
for (let i = 1; i < images.length; i++) {
    list[i].addEventListener('mouseenter', () => {
        images[i].classList.add('active')
    })

    list[i].addEventListener('mouseleave', () => {
        images[i].classList.remove('active')
    })
}