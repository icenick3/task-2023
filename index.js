
const menu = document.getElementById('mobile-menu');
const navBar = document.getElementById('mobile-navbar');
const exit = document.getElementById('exit');
const exitLogin = document.getElementById('exit-login');
const exitRegister = document.getElementById('exit-register');
const signIn = document.getElementById('sign_in');
const startTrial = document.getElementById('start_trial');
const modalLogin = document.getElementById('login');
const modalRegister = document.getElementById('register');
const formLogin = document.getElementById('form_login');
const formRegister = document.getElementById('form_register');
const mobileLogin = document.getElementById('mobile_signIn');
const mobileStartTrial = document.getElementById('mobile_startTrial');

menu.onclick = () => {
    navBar.classList.add('active')
};
exit.onclick = () => {
    navBar.classList.remove('active')
};

signIn.onclick = () => {
    modalLogin.classList.add('active')
};
startTrial.onclick = () => {
    modalRegister.classList.add('active')
};


exitLogin.onclick = () => {
    modalLogin.classList.remove('active')
};


exitRegister.onclick = () => {
    modalRegister.classList.remove('active')
};

formLogin.onsubmit = (e) => {
    e.preventDefault()
};
formRegister.onsubmit = (e) => {
    e.preventDefault()
};

mobileLogin.onclick = () => {
    modalLogin.classList.add('active')
    navBar.classList.remove('active')

};

mobileStartTrial.onclick = () => {
    modalRegister.classList.add('active')
    navBar.classList.remove('active')
};












