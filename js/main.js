/** Andrés Fernández Burón
 *  Noviembre de 2020
 *
 *  Copyright 2020
 *  Todos los derechos reservados
 *
 *  Aplicación web: Mi sitio web
 *
 *  Fichero con el script JS de la página Principal de mi sitio web.
 *
 */
"use strict";
var mainMenuPanel;
var menuSwitchButton;
var closerElements;
function initMenuButtons() {
    addListenerBtnMenu();
    addListenerBtnSubmenu();
}
function addListenerBtnMenu() {
    mainMenuPanel = document.querySelector('nav');
    menuSwitchButton = document.querySelector('header button');
    if (mainMenuPanel && menuSwitchButton) {
        mainMenuPanel.style.display = 'none';
        menuSwitchButton.addEventListener('click', function () {
            if (this.classList.contains('pulsado')) {
                mainMenuPanel.style.display = 'none';
                this.classList.remove('pulsado');
            }
            else {
                mainMenuPanel.style.display = 'block';
                this.classList.add('pulsado');
            }
            closerElements = document.querySelectorAll('figure, main, footer');
            for (let i = 0; i < closerElements.length; i++) {
                closerElements[i].addEventListener('click', function () {
                    mainMenuPanel.style.display = 'none';
                    if (menuSwitchButton.classList.contains('pulsado')) {
                        menuSwitchButton.classList.remove('pulsado');
                    }
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
            if (menuSubPanelSwitchButtons[i]) {
                submenuPanels[i].style.display = 'none';
                menuSubPanelSwitchButtons[i].addEventListener('click', function () {
                    if (submenuPanels[i]) {
                        if (this.classList.contains('pulsado')) {
                            this.innerText = 'v';
                            this.classList.remove('pulsado');
                            if (this.parentElement) {
                                this.parentElement.classList.remove('pulsado');
                            }
                            submenuPanels[i].style.display = 'none';
                        }
                        else {
                            for (let j = 1; j < submenuPanels.length; j++) {
                                if (j != i && submenuPanels[j].style.display != 'none') {
                                    submenuPanels[j].style.display = 'none';
                                    let btn = submenuPanels[j].previousElementSibling;
                                    if (btn && btn.classList.contains('pulsado')) {
                                        btn.classList.remove('pulsado');
                                    }
                                    let cont = btn.parentElement;
                                    if (cont && cont.classList.contains('pulsado')) {
                                        cont.classList.remove('pulsado');
                                    }
                                }
                            }
                            this.innerText = '^';
                            this.classList.add('pulsado');
                            if (this.parentElement) {
                                this.parentElement.classList.add('pulsado');
                            }
                            submenuPanels[i].style.display = 'block';
                        }
                    }
                });
            }
        }
    }
}
function getStrYear() {
    return (new Date()).getFullYear();
}
function setCopyright() {
    let spanAnio = document.getElementById('anio');
    if (spanAnio) {
        spanAnio.innerText = getStrYear().toString();
    }
}
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
document.addEventListener('DOMContentLoaded', function () {
    initMenuButtons();
    setCopyright();
    document.oncopy = function () { alert('Andres Fernandez Buron\nCopyright 2020-' + getStrYear() + '\nTodos los derechos reservados'); return false; };
    document.oncut = function () { alert('Andres Fernandez Buron\nCopyright 2020-' + getStrYear() + '\nTodos los derechos reservados'); return false; };
    window.onload = function () { document.onselectstart = function () { return false; }; };
    document.oncontextmenu = function () { return false; };
    window.onload = function () { document.onmousedown = function () { return false; }; };
    if (isAppleDevice()) {
        let message = `Aún hace falta ajustar el diseño responsivo del sitio 
        para que se vea correctamente en los dispositivos de Apple.`;
        let paragraph = document.createElement('p');
        paragraph.innerText = message;
        let container = document.querySelector('main > section > article:first-of-type');
        if (container) {
            container.appendChild(paragraph);
        }
    }
});
