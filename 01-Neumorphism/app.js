// Selectors
const toggleThemeBtn = document.querySelector('.fa-circle-half-stroke');
// Adding eventlistener to button for toggle theme
toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('toggleTheme');
    toggleThemeBtn.classList.toggle('toggleThemeBtn');
});
