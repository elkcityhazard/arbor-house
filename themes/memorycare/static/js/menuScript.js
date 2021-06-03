const menuToggle = document.querySelectorAll('.subToggle > a');

function slideToggle(el) {
    el.style.height = el.scrollHeight + 'px';
    el.scrollHeight = el.scrollHeight;

    el.classList.toggle('active');
    el.style.height = el.classList.contains('active') ? el.scrollHeight + 'px' : 0;
}



menuToggle.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const submenu = e.target.parentNode.parentNode.parentNode.children[3];
        slideToggle(submenu);

    })
})