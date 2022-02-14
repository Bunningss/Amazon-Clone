
    const desktopToggle = document.querySelector('.toggle');
    const mobileToggle = document.querySelector('.nav-mobile-toggle');
    const mobileSidebar = document.querySelector('.sidebar');
    const backdrop =document.querySelector('.backdrop');

    desktopToggle && desktopToggle.addEventListener('click', () => {
        mobileSidebar.classList.toggle('slideIn');
    });
    
    mobileToggle && mobileToggle.addEventListener('click', () => {
        mobileSidebar.classList.toggle('slideIn');
    });
    
    backdrop && backdrop.addEventListener('click', () => {
        mobileSidebar.classList.toggle('slideIn');
    });
