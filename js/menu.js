/** Andrés Fernández Burón
 *  Noviembre de 2020
 *
 *  Copyright 2020
 *  Todos los derechos reservados
 *
 *  Aplicación web: Mi sitio web frontend
 *  Fichero con las funciones JS para manejar el menú de mi sitio web.
 *
 */
"use strict";
var mainMenuPanel;
var menuSwitchButton;
var menuSubPanelSwitchButtons;
var submenuPanels;
var closerElements;
export function initMenuButtons() {
    addListenerBtnMenu();
    addListenerBtnSubmenu();
    setMenuClosers();
}
function closeAllSubMenus() {
    for (let j = 1; j < submenuPanels.length; j++) {
        if (submenuPanels[j].style.display != 'none') {
            submenuPanels[j].style.display = 'none';
            let btn = submenuPanels[j].previousElementSibling;
            if (btn && btn.classList.contains('pulsado')) {
                btn.classList.remove('pulsado');
                btn.innerHTML = 'v';
            }
            let cont = btn.parentElement;
            if (cont && cont.classList.contains('pulsado')) {
                cont.classList.remove('pulsado');
            }
        }
    }
}
function setMenuClosers() {
    closerElements = document.querySelectorAll('figure, main, footer');
    for (let i = 0; i < closerElements.length; i++) {
        closerElements[i].addEventListener('click', function () {
            mainMenuPanel.style.display = 'none';
            if (menuSwitchButton.classList.contains('pulsado')) {
                menuSwitchButton.classList.remove('pulsado');
            }
            closeAllSubMenus();
        });
    }
}
function switchMenu() {
    if (menuSwitchButton.classList.contains('pulsado')) {
        mainMenuPanel.style.display = 'none';
        menuSwitchButton.classList.remove('pulsado');
    }
    else {
        mainMenuPanel.style.display = 'block';
        menuSwitchButton.classList.add('pulsado');
    }
}
function addListenerBtnMenu() {
    mainMenuPanel = document.querySelector('nav');
    menuSwitchButton = document.querySelector('header button');
    if (mainMenuPanel && menuSwitchButton) {
        mainMenuPanel.style.display = 'none';
        menuSwitchButton.addEventListener('click', function () {
            switchMenu();
        });
    }
}
function switchSubMenu(btn, panel) {
    if (btn.classList.contains('pulsado')) {
        btn.innerText = 'v';
        btn.classList.remove('pulsado');
        if (btn.parentElement) {
            btn.parentElement.classList.remove('pulsado');
        }
        panel.style.display = 'none';
    }
    else {
        closeAllSubMenus();
        btn.innerText = '^';
        btn.classList.add('pulsado');
        if (btn.parentElement) {
            btn.parentElement.classList.add('pulsado');
        }
        panel.style.display = 'block';
    }
}
function addListenerBtnSubmenu() {
    menuSubPanelSwitchButtons = document.querySelectorAll('.boton-mostrar-submenu');
    submenuPanels = Array();
    if (menuSubPanelSwitchButtons) {
        for (let i = 0; i < menuSubPanelSwitchButtons.length; i++) {
            submenuPanels[i] = menuSubPanelSwitchButtons[i].nextElementSibling;
            if (menuSubPanelSwitchButtons[i]) {
                submenuPanels[i].style.display = 'none';
                menuSubPanelSwitchButtons[i].addEventListener('click', function () {
                    if (submenuPanels[i]) {
                        switchSubMenu(this, submenuPanels[i]);
                    }
                });
            }
        }
    }
}
