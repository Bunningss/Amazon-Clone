
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

