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
var mainMenuPanel;
var menuSwitchButton;
var closerElements;
export function addListenerBtnMenu() {
    closerElements = document.querySelectorAll('figure, main, footer');
    mainMenuPanel = document.querySelector('nav');
    if (mainMenuPanel)
        mainMenuPanel.style.display = 'none';
    menuSwitchButton = document.querySelector('header button');
    if (mainMenuPanel && menuSwitchButton) {
        menuSwitchButton.addEventListener('click', function () {
            mainMenuPanel.style.display = (mainMenuPanel.style.display == 'none') ? 'block' : 'none';
            for (let i = 0; i < closerElements.length; i++) {
                closerElements[i].addEventListener('click', function () {
                    mainMenuPanel.style.display = 'none';
                });
            }
        });
    }
}
export function addListenerBtnSubmenu() {
    const menuSupanelSwitchButtons = document.querySelectorAll('.boton-mostrar-submenu');
    if (menuSupanelSwitchButtons) {
        for (let i = 0; i < menuSupanelSwitchButtons.length; i++) {
            var submenuPanel = menuSupanelSwitchButtons[i].nextElementSibling;
            if (submenuPanel)
                submenuPanel.style.display = 'none';
            var btn = menuSupanelSwitchButtons[i];
            if (btn) {
                btn.addEventListener('click', function () {
                    submenuPanel.style.display = (submenuPanel.style.display == 'none') ? 'block' : 'none';
                    btn.style.backgroundColor = (btn.style.backgroundColor == 'whitesmoke') ? 'lightseagreen' : 'whitesmoke';
                });
            }
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    addListenerBtnMenu();
    addListenerBtnSubmenu();
});
