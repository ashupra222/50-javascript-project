let conents = document.querySelectorAll('.content');

window.addEventListener('scroll', () => checkConents());

checkConents();

function checkConents() {   
    for(let content of conents) {
        let contentTop = content.getBoundingClientRect().top;
        let contentBottom = content.getBoundingClientRect().bottom;
        let screenHeight = window.innerHeight;
        console.log('count');
        if(contentTop < screenHeight * 5 / 4) {
            content.classList.add('show');
        }
        else {return}
        if (contentBottom < 0 || contentTop > screenHeight) {
            content.classList.remove('show');
        }
    }
}