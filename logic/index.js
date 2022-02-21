

// Sidebar
const desktopToggle = document.querySelector('.toggle');
const mobileSidebar = document.querySelector('.sidebar');
const backdrop =document.querySelector('.backdrop');
const body = document.body;

desktopToggle && desktopToggle.addEventListener('click', () => {
    mobileSidebar.classList.toggle('slideIn');
    body.classList.toggle('noscroll');
});
    
backdrop && backdrop.addEventListener('click', () => {
    mobileSidebar.classList.toggle('slideIn');
    body.classList.toggle('noscroll');
});

// Mobile Sidebar

const mobileToggle = document.querySelector('.nav-mobile-toggle');
const sidiebar = document.querySelector('.mobile-sidebar-bd');
const mbackdrop = document.querySelector('.mobile-backdrop')

mobileToggle.addEventListener('click', () => {
    sidiebar.classList.toggle('m-slide-in');
    body.classList.toggle('noscroll');
});

mbackdrop.addEventListener('click', () => {
    sidiebar.classList.toggle('m-slide-in');
    body.classList.toggle('noscroll');
});



// Nav account Flyout
const navEle = document.querySelector('.account');
const navAccFlyout = document.querySelector('.hover-element');

navEle.addEventListener('mouseover', () => {
    navAccFlyout.style.display = 'flex';

});

navEle.addEventListener('mouseout', () => {
    navAccFlyout.style.display = 'none';

});

// Nav Currency Flyout

const navCur = document.querySelector('.currency');
const navCurFlyout = document.querySelector('.nav-currency-flyout');

navCur.addEventListener('mouseover', () => {
    navCurFlyout.style.display = 'block';

});

navCur.addEventListener('mouseout', () => {
    navCurFlyout.style.display = 'none';

});

// Back to top
const backToTop = document.querySelector('.to-top');
backToTop.addEventListener('click', () => {
    window.scrollTo(0, 0)
});

// My orders
const orderLinks = document.querySelectorAll('.myorders-link');

orderLinks.forEach((ol) => {
    ol.addEventListener('click', () => {
        ol.classList.add('highlight');
    });
});

// Payments 
const scr = document.querySelector('.firstscreen');
const card = document.querySelectorAll('.mypayments-card');

card.forEach(c => {
    c.addEventListener('click', () => {
        document.body.querySelectorAll('div').forEach(i => {
            i.classList.remove('clicked')
        });
        c.classList.add('clicked');
        scr.innerHTML = c.innerHTML;
        scr.style.height = '150px';
        addCard.style.display = 'none';
    });
});


// Add payment btn
const addCard = document.querySelector('.secondscreen');
const addCardBtn = document.querySelector('.add-payment-card-link');

addCardBtn.addEventListener('click', () => {
    document.body.querySelectorAll('div').forEach(i => {
        i.classList.remove('clicked')
    });
    scr.style.height = '200px';
    addCard.style.display = 'block';
});

// Hide add card Popup
const cardForm = document.querySelector('.card-form-popup');
const cross = document.querySelector('.abs');
const cancel = document.querySelector('.cancel-btn');
const enablePopup = document.querySelector('.enable-popup');

enablePopup.addEventListener('click', () => {
    cardForm.style.display = 'flex';
    body.classList.add('noscroll');
});

cross.addEventListener('click', () => {
    cardForm.style.display = 'none';
    body.classList.add('noscroll');
});

cancel.addEventListener('click', () => {
    cardForm.style.display = 'none';
    body.classList.add('noscroll');
});

