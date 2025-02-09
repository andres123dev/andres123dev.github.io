/** Andrés Fernández Burón
 *  Noviembre de 2020
 *
 *
 *  Aplicación web: Mi sitio web
 *
 *  Fichero con el script JS Principal de mi sitio web.
 *
 */
"use strict";
function isIosDevice() {
    if (/^(iPhone|iPod|iPad)/.test(navigator.userAgent)) {
        return true;
    }
    return false;
}
function isAppleDevice() {
    if (/^(iPhone|iPod|iPad|Mac OS)/.test(navigator.userAgent)) {
        return true;
    }
    return false;
}
var mainMenuPanel;
var menuSwitchButton;
var closerElements;
function addListenerBtnMenu() {
    mainMenuPanel = document.querySelector('nav');
    if (mainMenuPanel)
        mainMenuPanel.style.display = 'none';
    menuSwitchButton = document.querySelector('header button');
    if (mainMenuPanel && menuSwitchButton) {
        menuSwitchButton.addEventListener('click', function () {
            mainMenuPanel.style.display = (mainMenuPanel.style.display == 'none') ? 'block' : 'none';
            closerElements = document.querySelectorAll('figure, main, footer');
            for (let i = 0; i < closerElements.length; i++) {
                closerElements[i].addEventListener('click', function () {
                    mainMenuPanel.style.display = 'none';
                });
            }
        });
    }
}
var menuSubPanelSwitchButtons;
var submenuPanels;
function addListenerBtnSubmenu() {
    menuSubPanelSwitchButtons = document.querySelectorAll('.boton-mostrar-submenu');
    submenuPanels = Array();
    if (menuSubPanelSwitchButtons) {
        for (let i = 0; i < menuSubPanelSwitchButtons.length; i++) {
            submenuPanels[i] = menuSubPanelSwitchButtons[i].nextElementSibling;
            if (menuSubPanelSwitchButtons[i].nextElementSibling) {
                submenuPanels[i].style.display = 'none';
            }
            if (menuSubPanelSwitchButtons[i]) {
                menuSubPanelSwitchButtons[i].addEventListener('click', function (evt) {
                    if (submenuPanels[i]) {
                        menuSubPanelSwitchButtons[i].innerText = (submenuPanels[i].style.display == 'none') ? '^' : 'v';
                        submenuPanels[i].style.display = (submenuPanels[i].style.display == 'none') ? 'block' : 'none';
                    }
                });
            }
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    addListenerBtnMenu();
    addListenerBtnSubmenu();
    if (isAppleDevice()) {
        let message = `Aún hace falta ajustar el diseño responsivo del sitio 
        para que se vea correctamente en los dispositivos de Apple.`;
        let paragraph = document.createElement('p');
        paragraph.innerText = message;
        let container = document.querySelector('main > section > article:nth-of-type(2)');
        if (container) {
            container.appendChild(paragraph);
        }
    }
    document.oncopy = function () {
        alert('Andres Fernandez Buron\nCopyright 2020\nTodos los derechos reservados');
        return false;
    };
    document.oncut = function () {
        alert('Andres Fernandez Buron\nCopyright 2020\nTodos los derechos reservados');
        return false;
    };
    window.onload = function () { document.onselectstart = function () { return false; }; };
    document.oncontextmenu = function () { return false; };
    window.onload = function () { document.onmousedown = function () { return false; }; };

});
