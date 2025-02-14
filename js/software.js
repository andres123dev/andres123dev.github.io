/** Andrés Fernández Burón
 *  Noviembre de 2020
 *
 *  Copyright 2020
 *  Todos los derechos reservados
 *
 *  Aplicación web: Mi sitio web frontend
 *  Fichero con el script JS de la página Software de mi sitio web.
 *
 */
"use strict";
import { initMenuButtons } from './menu.js';
import { setCopyright, setLayout } from './functions.js';
var readMoreButtons;
var readMorePanels;
// 
function switchReadMore(btn, panel) {
    if (btn.classList.contains('pulsado')) {
        btn.classList.remove('pulsado');
        btn.innerHTML = 'Leer más ...';
        panel.style.display = 'none';
    }
    else {
        btn.classList.add('pulsado');
        btn.innerHTML = 'Leer menos ...';
        panel.style.display = 'block';
    }
}
function initArticleButtons() {
    readMoreButtons = document.querySelectorAll('main article button');
    readMorePanels = Array();
    if (readMoreButtons) {
        for (let i = 0; i < readMoreButtons.length; i++) {
            readMorePanels[i] = readMoreButtons[i].nextElementSibling;
            readMorePanels[i].style.display = 'none';
            readMoreButtons[i].addEventListener('click', function () {
                switchReadMore(this, readMorePanels[i]);
            });
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    initMenuButtons();
    initArticleButtons();
    setCopyright();
    setLayout();
    if (!isAppleDevice()) {
        let back = document.querySelector('body > figure:last-of-type');
        if (back) {
            back.style.backgroundAttachment = 'fixed';
        }
    }
});
