let panels = document.querySelectorAll('.panel');
let activePanel = document.querySelector('.active');

panels.forEach(panel => {
    panel.addEventListener('mouseover', () => {
        if (activePanel) {
            activePanel.classList.remove('active');
        }
        panel.classList.add('active');
        activePanel = panel;
    });
})
