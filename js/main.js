/** Andrés Fernández Burón
 *  Noviembre de 2021
 *
 *
 *  Aplicación web: Mi sitio web
 *
 *  Fichero con el script JS Principal de mi sitio web.
 *
 */
"use strict";
function addListenerBtnMenu() {
    var mainMenuPanel;
    mainMenuPanel = document.querySelector('nav');
    if (mainMenuPanel)
        mainMenuPanel.style.display = 'none';
    var menuSwitchButton;
    menuSwitchButton = document.querySelector('header button');
    if (mainMenuPanel && menuSwitchButton) {
        menuSwitchButton.addEventListener('click', function (evt) {
            console.log('PULSADO');
            mainMenuPanel.style.display = (mainMenuPanel.style.display == 'none') ? 'block' : 'none';
        });
    }
}
function addListenerBtnSubmenu() {
    const menuSupanelSwitchButtons = document.querySelectorAll('.boton-mostrar-submenu');
    if (menuSupanelSwitchButtons) {
        for (let i = 0; i < menuSupanelSwitchButtons.length; i++) {
            var submenuPanel = menuSupanelSwitchButtons[i].nextElementSibling;
            if (submenuPanel)
                submenuPanel.style.display = 'none';
            menuSupanelSwitchButtons[i].addEventListener('click', function () {
                console.log('PULSADO');
                submenuPanel.style.display = (submenuPanel.style.display == 'none') ? 'block' : 'none';
            });
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    addListenerBtnMenu();
    addListenerBtnSubmenu();
});
