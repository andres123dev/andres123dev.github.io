/** Andrés Fernández Burón
 *  Noviembre de 2020
 *
 *  Copyright 2020
 *  Todos los derechos reservados
 *
 *  Aplicación web: Mi sitio web
 *
 *  Fichero con las funciones JS para manejar el menú de mi sitio web.
 *
 */
"use strict";
import { addListenerBtnSubmenu, addListenerBtnSubsubmenu, closeAll } from './submenu.js';
var mainMenuPanel;
var menuSwitchButton;
var closerElements;
export function initMenuButtons() {
    addListenerBtnMenu();
    addListenerBtnSubmenu();
    addListenerBtnSubsubmenu();
    setMenuClosers();
}
function setMenuClosers() {
    closerElements = document.querySelectorAll('figure, main, footer');
    for (let i = 0; i < closerElements.length; i++) {
        closerElements[i].addEventListener('click', function () {
            if (mainMenuPanel.style.display != 'none') {
                mainMenuPanel.style.display = 'none';
                if (menuSwitchButton.classList.contains('pulsado')) {
                    menuSwitchButton.classList.remove('pulsado');
                }
                closeAll(0);
                closeAll(1);
            }
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
    mainMenuPanel = document.querySelector('body > nav');
    menuSwitchButton = document.querySelector('body > header > button#boton-mostrar-menu');
    if (mainMenuPanel && menuSwitchButton) {
        mainMenuPanel.style.display = 'none';
        menuSwitchButton.addEventListener('click', function () {
            switchMenu();
        });
    }
}
