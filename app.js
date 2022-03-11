const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-img');
const caption = document.querySelector('.caption');

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add('open');
        original.classList.add('open');
        // Dynamically change image and text acc to clicks
        const newOriginalImg = preview.getAttribute('data-original');
        original.src =`./img/${newOriginalImg}`;
        const altText = preview.alt;
        original.alt = altText;
        caption.textContent = altText;
    })
})

modal.addEventListener('click', (e) => {
    // console.log(e.target.classList);
    if (e.target.classList.contains('open')) {
        modal.classList.remove('open');
        original.classList.remove('open');
    }
})