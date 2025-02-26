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
var menuSubPanelSwitchButtons;
var submenuPanels = [];
var menuSubsubPanelSwitchButtons;
var subsubmenuPanels = [];
export function closeAll(level) {
    let panelArray = [];
    switch (level) {
        case 0:
            panelArray = Array.from(submenuPanels);
            break;
        case 1:
            panelArray = Array.from(subsubmenuPanels);
            break;
        default:
            alert('INVALID LEVEL NUMBER !!!!');
    }
    for (let i = 0; i < panelArray.length; i++) {
        if (panelArray[i].style.display != 'none') {
            switchSubmenu(panelArray[i], level);
            break;
        }
    }
}
function switchSubmenu(panel, level) {
    if (panel.style.display != 'none') {
        panel.style.display = 'none';
    }
    else {
        if (level == 0) {
            closeAll(0);
        }
        else if (level == 1) {
            closeAll(1);
        }
        panel.style.display = 'block';
    }
    let btn = panel.previousElementSibling;
    if (btn.classList.contains('pulsado')) {
        btn.classList.remove('pulsado');
        btn.innerHTML = 'v';
    }
    else {
        btn.classList.add('pulsado');
        btn.innerHTML = '^';
    }
    let container = btn.parentElement;
    if (container.classList.contains('pulsado')) {
        container.classList.remove('pulsado');
    }
    else {
        container.classList.add('pulsado');
    }
}
export function addListenerBtnSubmenu() {
    menuSubPanelSwitchButtons = document.querySelectorAll('.boton-mostrar-submenu');
    if (menuSubPanelSwitchButtons) {
        for (let i = 0; i < menuSubPanelSwitchButtons.length; i++) {
            console.log(i);
            submenuPanels[i] = menuSubPanelSwitchButtons[i].nextElementSibling;
            if (menuSubPanelSwitchButtons[i]) {
                submenuPanels[i].style.display = 'none';
                menuSubPanelSwitchButtons[i].addEventListener('click', function () {
                    switchSubmenu(submenuPanels[i], 0);
                });
            }
        }
    }
}
export function addListenerBtnSubsubmenu() {
    menuSubsubPanelSwitchButtons = document.querySelectorAll('.boton-mostrar-subsubmenu');
    if (menuSubsubPanelSwitchButtons) {
        for (let i = 0; i < menuSubsubPanelSwitchButtons.length; i++) {
            subsubmenuPanels[i] = menuSubsubPanelSwitchButtons[i].nextElementSibling;
            if (menuSubsubPanelSwitchButtons[i]) {
                subsubmenuPanels[i].style.display = 'none';
                menuSubsubPanelSwitchButtons[i].addEventListener('click', function () {
                    if (subsubmenuPanels[i]) {
                        switchSubmenu(subsubmenuPanels[i], 1);
                    }
                });
            }
        }
    }
}
