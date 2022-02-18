// Sign In Popup
const emailForm = document.querySelector('.email-external');
const phoneForm = document.querySelector('.phone-external');
const select = document.querySelector('.honclick');
const input = document.querySelector('.honclick2');
const email = document.querySelector('.email-form');
const signinForm = document.querySelector('.signin-form');

emailForm.addEventListener('click', () => {
    select.style.display = 'none';
    input.style.display = 'none';
    email.style.display = 'block';
    emailForm.style.display = 'none';
    phoneForm.style.display = 'flex';
});

phoneForm.addEventListener('click', ()=> {
    select.style.display = 'block';
    input.style.display = 'block';
    email.style.display = 'none';
    emailForm.style.display = 'flex';
    phoneForm.style.display = 'none';
})