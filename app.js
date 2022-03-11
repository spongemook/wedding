const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-img');

var UserAgent = navigator.userAgent;

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add('open');
        original.classList.add('open');
        const newOriginalImg = preview.getAttribute('data-original');
        original.src =`./img/${newOriginalImg}`;
    })
})

modal.addEventListener('click', (e) => {
    // console.log(e.target.classList);
    if (e.target.classList.contains('open')) {
        modal.classList.remove('open');
        original.classList.remove('open');
    }
})