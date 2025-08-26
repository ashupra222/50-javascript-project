let textInput = document.getElementById('choices-input');
let choicesContainer = document.querySelector('.choices-container');
let choices = [];

function createChoices(input) {
    choices = input.split(',').filter(choice => choice.trim() !== '');
    choicesContainer.innerHTML = '';
    choices.forEach(choice => {
        let choiceElement = document.createElement('div');
        choiceElement.classList.add('choice');
        choiceElement.innerText = choice;
        choicesContainer.appendChild(choiceElement);
    });
}

function randomSelect() {
    let timedelta = 200;
    let choicesElements = document.querySelectorAll('.choice');
    let i = 0;
    if (choicesElements.length === 0) {
        return;
    }
    let interval = setInterval(() => {
        if (i > 0) {
            choicesElements[i-1].classList.remove('selected');
        }
        if (i === choicesElements.length) {
            i = 0;
        }
        choicesElements[i].classList.add('selected');
        i++;
    }, timedelta);
    let clearIntervalTime = (Math.random()* (timedelta*choicesElements.length) );
    clearIntervalTime = Math.floor(clearIntervalTime);
    clearIntervalTime += timedelta*choicesElements.length;
    if (clearIntervalTime < 1000) {
        clearIntervalTime += 1000;
    }
    setTimeout(() => {
        clearInterval(interval);
    }, clearIntervalTime);

}
textInput.addEventListener('keyup', (e) => {
    createChoices(e.target.value);

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10);
        randomSelect();
    }
});