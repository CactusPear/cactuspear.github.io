// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onload = function () {
    var top = window.scrollY;
    if (top == 0) {
        header.classList.add('navbarDark');
    }
}
