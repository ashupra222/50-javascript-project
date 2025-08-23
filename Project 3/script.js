function rotate(){
    let page = document.querySelector('.page');
    page.classList.toggle('rotated');
    let nav = document.querySelector('.nav');
    nav.classList.toggle('nav-open');
    this.classList.toggle('menu-open');
}

let menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', rotate);