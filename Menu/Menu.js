
const toggleMenu = () => {
    // Toggle the "menu--open" class on your menu reference.
    menu.classList.toggle('menu--open');
    if(menu.classList.length > 1) TweenMax.to(menu, 1, {left: 0});
    else TweenMax.to(menu, 1, {left: '-400px'});
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => toggleMenu());
// Using your menuButton reference, add a click handler that calls toggleMenu
const allArticles = document.querySelector('.articles');
allArticles.addEventListener('click', () => TweenMax.to(menu, 1, {left: '-400px'}));
