
    const desktopToggle = document.querySelector('.toggle');
    const mobileToggle = document.querySelector('.nav-mobile-toggle');
    const mobileSidebar = document.querySelector('.sidebar');
    const backdrop =document.querySelector('.backdrop');
    const body = document.body;

    desktopToggle && desktopToggle.addEventListener('click', () => {
        mobileSidebar.classList.toggle('slideIn');
        body.classList.toggle('noscroll');
    });
    
    mobileToggle && mobileToggle.addEventListener('click', () => {
        mobileSidebar.classList.toggle('slideIn');
        body.classList.toggle('noscroll');
    });
    
    backdrop && backdrop.addEventListener('click', () => {
        mobileSidebar.classList.toggle('slideIn');
        body.classList.toggle('noscroll');
    });

// Nav account Flyout
const navEle = document.querySelector('.account');
const navAccFlyout = document.querySelector('.hover-element');

navEle.addEventListener('mouseover', () => {
    navAccFlyout.style.display = 'flex';
    body.classList.add('noscroll');
});

navEle.addEventListener('mouseout', () => {
    navAccFlyout.style.display = 'none';
    body.classList.remove('noscroll');
});

// Nav Currency Flyout

const navCur = document.querySelector('.currency');
const navCurFlyout = document.querySelector('.nav-currency-flyout');

navCur.addEventListener('mouseover', () => {
    navCurFlyout.style.display = 'block';
    body.classList.add('noscroll');
});

navCur.addEventListener('mouseout', () => {
    navCurFlyout.style.display = 'none';
    body.classList.remove('noscroll');
});