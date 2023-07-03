new Gallery(document.getElementById('gallery'), {
    margin: 60,
    dots: true
});

/* burgerMenu */

const BODY_BURGER_OPENED = "body_burger-opened";

const bodyNode = document.querySelector('body'); 
const burgerControlNode = document.querySelector('.burger-menu__control');
const burgerSpaceCoverNode = document.querySelector('.space-cover__burger');

burgerControlNode.addEventListener('click', (event) => {
    if (bodyNode.classList.contains(BODY_BURGER_OPENED)) {
        bodyNode.classList.remove(BODY_BURGER_OPENED);
    } else {
        bodyNode.classList.add(BODY_BURGER_OPENED);
    }
})

burgerSpaceCoverNode.addEventListener('click', (event) => {
    bodyNode.classList.remove(BODY_BURGER_OPENED);
})