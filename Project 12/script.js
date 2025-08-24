let btns = document.querySelectorAll('button')

btns.forEach((btn) => {
    btn.addEventListener('click', ()=> btn.parentElement.classList.toggle('active'))
})