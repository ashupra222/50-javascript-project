let searchbox = document.querySelector('.search-box');
let searchbtn = document.querySelector('.search-btn');
let searchinput = document.querySelector('.search-input');

searchbtn.addEventListener('click',()=>{
    searchbox.classList.toggle('active');
    searchinput.focus();
});