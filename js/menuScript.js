const menuToggle = document.querySelectorAll('.subToggle > a');

menuToggle.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const submenu = e.target.parentNode.parentNode.parentNode.children[3];
        const expanded = submenu.getBoundingClientRect().height;
        submenu.style.height = 0;
        submenu.style.height = expanded + 'px';
    })
})