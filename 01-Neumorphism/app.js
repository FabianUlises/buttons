// Selectors
const toggleThemeBtn = document.querySelector('.fa-circle-half-stroke');
const powerBtn = document.querySelector('#powerBtn');
const powerBtnContent = document.querySelector('.fa-power-off');
const contentCtn = document.querySelector('.container');
// Adding eventlistener to button for toggle theme
toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('toggleTheme');
    toggleThemeBtn.classList.toggle('toggleThemeBtn');
    contentCtn.classList.toggle('toggleThemeCtn');
});
powerBtn.addEventListener('mouseover', () => {
   powerBtnContent.classList.add('toggleThemeBtn');
});
powerBtn.addEventListener('mouseout', () => {
   powerBtnContent.classList.remove('toggleThemeBtn');
});