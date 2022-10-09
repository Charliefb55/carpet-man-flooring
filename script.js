const fadeElements = document.querySelectorAll('.card');

scrollAnimation = () => {
    let winHT = window.innerHeight;
    fadeElements.forEach(element => {
        let elementPos = element.getBoundingClientRect().top;
        if (elementPos <= winHT / 1.5) {
            element.classList.add('faded-in');
        }
    });
}

document.addEventListener('DOMContentLoaded', scrollAnimation);

window.addEventListener('scroll', scrollAnimation);