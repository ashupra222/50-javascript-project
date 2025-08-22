function next() {
    const progressBar = document.getElementsByClassName('progress-fill')[0];
    let currentWidth = parseInt(progressBar.style.width) || 0;
    currentWidth += 30; 
    progressBar.style.width = currentWidth + '%';
    if (currentWidth == 30) {
        document.getElementById('progressText2').classList.add('completed');
    }
    else if (currentWidth == 60) {
        document.getElementById('progressText3').classList.add('completed');
    }
    else if (currentWidth == 90) {
        document.getElementById('progressText4').classList.add('completed');
    }
    if (currentWidth == 90) {
        document.getElementById('next').disabled = true;
        document.getElementById('previous').disabled = false;
    }
    if (currentWidth > 0) {
        document.getElementById('previous').disabled = false;
    }
}

function previous() {
    const progressBar = document.getElementsByClassName('progress-fill')[0];
    let currentWidth = parseInt(progressBar.style.width) || 0;
    if (currentWidth == 30) {
        document.getElementById('progressText2').classList.remove('completed');
    }
    else if (currentWidth == 60) {
        document.getElementById('progressText3').classList.remove('completed');
    }
    else if (currentWidth == 90) {
        document.getElementById('progressText4').classList.remove('completed');
    }
    currentWidth -= 30;
    progressBar.style.width = currentWidth + '%';
    if (currentWidth == 0) {
        document.getElementById('previous').disabled = true;
        document.getElementById('next').disabled = false;
    }
    if (currentWidth < 90) {
        document.getElementById('next').disabled = false;
    }
}