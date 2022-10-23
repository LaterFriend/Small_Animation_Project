let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeButton = document.getElementById('close-btn');

openBtn.addEventListener('click', () => {
    modalContainer.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    modalContainer.style.display = 'none';
});

window.addEventListener('click', (e) => {

    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});