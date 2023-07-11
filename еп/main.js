document.querySelector('.burger-menu__border_wrap').addEventListener('click', function() {
    document.querySelector('.burger-menu ul').classList.toggle('menu-open');
});

document.querySelectorAll('.burger-menu li a').forEach(function(item) {
    item.addEventListener('click', function(e) {
        var submenu = this.nextElementSibling;
        if (submenu) {
            submenu.classList.toggle('submenu-open');
        }
        e.stopPropagation();
    });
});