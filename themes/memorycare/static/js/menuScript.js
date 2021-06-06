const menuToggle = document.querySelectorAll('.subToggle > a');
const mainMenuToggle = document.querySelectorAll('.desktop-nav > a');
const submenu = document.querySelector('.sub')

function slideToggle(el) {
    const submenu = document.querySelector('.sub-menu')
    submenu.style.height = submenu.scrollHeight + 'px';
    submenu.scrollHeight = submenu.scrollHeight;

    submenu.classList.toggle('active');
    submenu.style.height = submenu.classList.contains('active') ? submenu.scrollHeight + 'px' : 0;
}



menuToggle.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const submenu = e.target.parentNode.parentNode.nextElementSibling;
        slideToggle(submenu);

    })
})
